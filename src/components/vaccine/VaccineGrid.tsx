"use client";
import { useState, useEffect } from "react";
import VaccineBox from "./VaccineBox";
import { AgeLabel } from "./VaccineContainer";
import VaccineService from "@/libs/VaccineService/VaccineService";

interface VaccineGridProps {
  ageLabels: AgeLabel[];
}
type Vaccine = {
  name: string;
  intervals: {
    startAge: number;
    endAge: number;
  }[];
};

export default function VaccineGrid({ ageLabels }: VaccineGridProps) {
  const [vaccines, setVaccines] = useState<Vaccine[]>([]);

  function transformVaccineData(rawData: any[]) {
    const vaccineMap: Record<
      string,
      { name: string; intervals: { startAge: number; endAge: number }[] }
    > = {};

    rawData.forEach((item) => {
      const groupName = item.DESCRIPTION;
      if (!vaccineMap[groupName]) {
        vaccineMap[groupName] = { name: item.DESCRIPTION, intervals: [] };
      }
      vaccineMap[groupName].intervals.push({
        startAge: item.AGE,
        endAge: item.AGE_MAX,
      });
    });

    return Object.values(vaccineMap).map((vaccine) => ({
      ...vaccine,
      intervals: mergeIntervals(vaccine.intervals),
    }));
  }

  useEffect(() => {
    async function fetchVaccines() {
      try {
        const vaccineService = new VaccineService();
        const response = await vaccineService.getInformation({
          childpid: "1",
          isinplan: "1",
          loggedin: 0,
        });
        if (response.data.success) {
          setVaccines(transformVaccineData(response.data.content));
        } else {
          console.error("Failed to fetch vaccine information");
        }
      } catch (error) {
        console.error("Error fetching vaccines:", error);
      }
    }

    fetchVaccines();
  }, []);

  function mergeIntervals(intervals: { startAge: number; endAge: number }[]) {
    const merged: { startAge: number; endAge: number }[] = [];
    intervals
      .sort((a, b) => a.startAge - b.startAge)
      .forEach((interval) => {
        const last = merged[merged.length - 1];
        if (!last || last.endAge < interval.startAge) {
          merged.push(interval);
        } else {
          last.endAge = Math.max(last.endAge, interval.endAge);
        }
      });
    return merged;
  }

  function generateVaccineTimeline(vaccine: any) {
    const mergedIntervals = mergeIntervals(vaccine.intervals);

    let previousBoolean = false;
    let count = 0;
    const result: Array<[boolean, number]> = [];

    ageLabels.forEach((ageLabel) => {
      const isRequired = mergedIntervals.some(
        (interval) =>
          interval.startAge <= ageLabel.months &&
          interval.endAge >= ageLabel.months
      );

      if (isRequired !== previousBoolean) {
        if (count > 0) {
          result.push([previousBoolean, count]);
        }
        previousBoolean = isRequired;
        count = 1;
      } else {
        count++;
      }
    });

    if (count > 0) {
      result.push([previousBoolean, count]);
    }
    return result;
  }
  vaccines.map((v) => {
    console.log(v, generateVaccineTimeline(v));
  });
  return (
    <div className="w-full p-4">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row">
          <VaccineBox
            isVaccined={false}
            ageLabels={ageLabels}
            description="Age"
          />
          {ageLabels.map((a) => (
            <VaccineBox
              isVaccined={false}
              ageLabels={ageLabels}
              key={a.months}
              description={a.label}
            />
          ))}
        </div>

        {vaccines.map((v) => (
          <div key={v.name} className="flex flex-row">
            <VaccineBox
              isVaccined={false}
              ageLabels={ageLabels}
              description={v.name}
            />
            {generateVaccineTimeline(v).map((timeline, index) => (
              <VaccineBox
                isVaccined={timeline[0]}
                ageLabels={ageLabels}
                key={index}
                description="None"
                size={timeline[1]}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
