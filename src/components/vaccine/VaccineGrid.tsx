"use client";
import { useState, useEffect } from "react";
import VaccineBox from "./VaccineBox";
import VaccineCell from "./VaccineCell";
import { AgeLabel } from "./VaccineContainer";
import VaccineService from "@/libs/VaccineService/VaccineService";
import {
  IGetVaccine,
  VaccineInterval,
  Vaccine,
  IHospital,
} from "@/libs/VaccineService/VaccineServiceModel";
import { IChildData } from "@/libs/ChildService/ChildServiceModel";
import { useAuth } from "@/providers/AuthContext";

interface VaccineGridProps {
  ageLabels: AgeLabel[];
  child?: IChildData;
  isInPlan: boolean;
  onVaccineChange: () => void;
}

export default function VaccineGrid({
  ageLabels,
  child,
  isInPlan,
  onVaccineChange,
}: VaccineGridProps) {
  const [vaccines, setVaccines] = useState<Vaccine[]>([]);
  const [history, setHistory] = useState<IGetVaccine[]>([]);
  const { user, accessToken } = useAuth();

  function transformVaccineData(rawData: IGetVaccine[]) {
    const vaccineMap: Record<
      string,
      {
        groupName: string;
        intervals: {
          name: string;
          startAge: number;
          endAge: number;
          [key: string]: any;
        }[];
      }
    > = {};

    rawData.forEach((item) => {
      const { WEB_GRP_NAME, AGE, AGE_MAX, DESCRIPTION, ...other } = item;
      if (!vaccineMap[WEB_GRP_NAME]) {
        vaccineMap[WEB_GRP_NAME] = { groupName: WEB_GRP_NAME, intervals: [] };
      }

      vaccineMap[WEB_GRP_NAME].intervals.push({
        name: DESCRIPTION,
        startAge: AGE,
        endAge: AGE_MAX,
        ...other,
      });
    });

    Object.values(vaccineMap).forEach((vaccine) => {
      vaccine.intervals.sort((a, b) =>
        a.startAge === b.startAge
          ? a.endAge - b.endAge
          : a.startAge - b.startAge,
      );
    });
    return Object.values(vaccineMap);
  }

  function generateVaccineTimeline(vaccine: any) {
    const intervals: VaccineInterval[] = vaccine.intervals;
    let previousBoolean = false;
    let previousVaccine: any = null;
    let count = 0;

    const result: Array<[boolean, number, VaccineInterval[]?]> = [];

    ageLabels.forEach((ageLabel) => {
      const matchingVaccines = intervals.filter(
        (interval: { startAge: number; endAge: number }) =>
          interval.startAge <= ageLabel.months &&
          interval.endAge >= ageLabel.months,
      );

      const isInPlan = matchingVaccines.length > 0;
      const currentVaccine = isInPlan ? matchingVaccines[0] : null;
      const isMatch = previousVaccine?.some(
        (prev: any) => prev.name === currentVaccine?.name,
      );

      if (isInPlan !== previousBoolean || !isMatch) {
        if (count > 0) {
          result.push(
            previousBoolean ? [true, count, previousVaccine] : [false, count],
          );
        }

        count = 1;
        previousBoolean = isInPlan;
        previousVaccine = matchingVaccines;
      } else {
        count++;
      }
    });

    if (count > 0) {
      result.push(
        previousBoolean ? [true, count, previousVaccine] : [false, count],
      );
    }
    return result;
  }

  useEffect(() => {
    async function fetchVaccines() {
      try {
        const vaccineService = new VaccineService(accessToken ?? "");
        const response = await vaccineService.getInformation({
          childpid: child?.PID ?? "1",
          isinplan: isInPlan ? "1" : "0", // required is 1, 0, 2 is other
          loggedin: user ? 1 : 0,
        });
        if (response.data.success) {
          setVaccines(transformVaccineData(response.data.content));
          if (user) setHistory(response.data.history);
        } else {
          console.error("Failed to fetch vaccine information");
        }
      } catch (error) {
        console.error("Error fetching vaccines:", error);
      }
    }

    fetchVaccines();
  }, [isInPlan, child]);

  return (
    <div className="w-full p-4 gap-1 flex">
      <div className="flex flex-col justify-start items-start gap-2 bg-white border p-16 w-full overflow-auto">
        <div className="flex flex-row gap-1">
          <VaccineBox
            isVaccined={false}
            ageLabels={ageLabels}
            description="Age"
          />
          {ageLabels.map((a, i) => (
            <VaccineBox
              isVaccined={false}
              ageLabels={ageLabels}
              key={a.months}
              description={a.label}
              size={1}
            />
          ))}
        </div>
        <div className="flex gap-2 flex-col">
          {vaccines.map((v) => (
            <div key={v.groupName} className="flex flex-row gap-1">
              <VaccineBox
                isVaccined={false}
                ageLabels={ageLabels}
                description={v.groupName}
              />
              {generateVaccineTimeline(v).map((timeline, index) => (
                <VaccineBox
                  isVaccined={timeline[0]}
                  ageLabels={ageLabels}
                  key={index}
                  description=""
                  size={timeline[1]}
                  vaccineCell={
                    <>
                      {(timeline[2] ?? []).map((t, i) => (
                        <VaccineCell
                          key={index + i}
                          childpid={user ? (child?.PID ?? "1") : "0"}
                          vaccine={t}
                          vaccineHistory={
                            history.filter((h) => h.DESCRIPTION === t.name)[0]
                          }
                          onChange={onVaccineChange}
                        />
                      ))}
                    </>
                  }
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
