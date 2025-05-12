"use client";

import ChildDetails, { Summary } from "@/components/ChildDetails";
import ChildService from "@/libs/ChildService/ChildService";
import { IChildData } from "@/libs/ChildService/ChildServiceModel";
import SummaryService from "@/libs/SummaryService/SummaryService";
import {
  ISummaryRequest,
  ISummaryResponse,
} from "@/libs/SummaryService/SummaryServiceModel";
import { useAuth } from "@/providers/AuthContext";
import { useEffect, useState } from "react";
import developmentData from "../development/developmentData";
import { PassThrough } from "stream";

const formatThaiDate = (isoDate: string) =>
  new Intl.DateTimeFormat("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(isoDate));

export default function Page() {
  const [selectedPID, setSelectedPID] = useState("");
  const [selectedChild, setSelectedChild] = useState<IChildData | null>(null);
  const [children, setChildren] = useState<IChildData[]>([]);
  const { user, accessToken } = useAuth();
  const [age, setAge] = useState("");
  const [summary, setSummary] = useState<Summary[]>([]);

  function calculateAgeFormatted(birthTime: string) {
    const birthDate = new Date(birthTime);
    const now = new Date();
    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    if (months < 0) {
      years--;
      months += 12;
    }
    return `${years} ปี ${months} เดือน`;
  }

  useEffect(() => {
    async function fetchChildren() {
      if (accessToken && user?.PID) {
        const childService = new ChildService(accessToken);
        const childData = await childService.getChildByID(user.PID);
        setChildren(Object.values(childData.data.data) ?? []);
      }
    }
    fetchChildren();
  }, [user]);

  useEffect(() => {
    if (selectedChild?.BIRTH) {
      setAge(calculateAgeFormatted(selectedChild.BIRTH));
    }
  }, [selectedChild]);

  function rangesOverlap(
    aMin: number,
    aMax: number,
    bMin: number,
    bMax: number
  ): boolean {
    return Math.max(aMin, bMin) <= Math.min(aMax, bMax);
  }

  function mapSummary(response: ISummaryResponse, type: number): Summary[] {
    const tempSummaries: Summary[] = [];

    if (type === 1) {
      response.vaccine.history.forEach((item) => {
        tempSummaries.push({
          minAge: item.AGE,
          maxAge: item.AGE_MAX,
          movement: 1,
          dexterity: 1,
          comprehension: 1,
          vaccine: {
            essential: item.IN_PLAN === 1 ? [item.DESCRIPTION_TH] : [],
            supplement: item.IN_PLAN !== 1 ? [item.DESCRIPTION_TH] : [],
          },
          development: {
            description: [],
            value: [],
          },
        });
      });
    }
    if (
      response.development.content.length > 0 &&
      response.development.history.length > 0
    ) {
      const val: number[] = [];
      const description: string[] = [];
      response.development.content.forEach((item) => {
        if (!item.DESCRIPTION || !item.TYPE || !item.CODE) return;

        description.push(item.DESCRIPTION);

        const t = response.development.history.find(
          (hist) => hist.CODE === item.CODE
        );
        if (t) {
          const monthOccurred =
            t.MONTH_AT_OCCURRED_CORRECTED ?? t.MONTH_AT_OCCURRED;
          if (monthOccurred) val.push(5);
          else val.push(3);
        } else {
          val.push(0);
        }
      });
      tempSummaries.push({
        minAge: response.development.content[0].MIN_AGE_MONTH,
        maxAge: response.development.content[0].MAX_AGE_MONTH,
        movement: 1,
        dexterity: 1,
        comprehension: 1,
        vaccine: {
          essential: [],
          supplement: [],
        },
        development: {
          description: description,
          value: val,
        },
      });
    }

    const groupedMap: Map<string, Summary> = new Map();

    for (const summary of tempSummaries) {
      let matchedKey: string | null = null;

      for (const key of Array.from(groupedMap.keys())) {
        const [min, max] = key.split("-").map(Number);
        if (rangesOverlap(summary.minAge, summary.maxAge, min, max)) {
          matchedKey = key;
          break;
        }
      }

      if (matchedKey) {
        const existing = groupedMap.get(matchedKey)!;
        existing.minAge = Math.min(existing.minAge, summary.minAge);
        existing.maxAge = Math.max(existing.maxAge, summary.maxAge);
        existing.vaccine.essential.push(...summary.vaccine.essential);
        existing.vaccine.supplement.push(...summary.vaccine.supplement);
        existing.development.description.push(
          ...summary.development.description
        );
        existing.development.value.push(...summary.development.value);
      } else {
        const newKey = `${summary.minAge}-${summary.maxAge}`;
        groupedMap.set(newKey, {
          ...summary,
          vaccine: {
            essential: [...summary.vaccine.essential],
            supplement: [...summary.vaccine.supplement],
          },
          development: {
            description: [...summary.development.description],
            value: [...summary.development.value],
          },
        });
      }
    }

    return Array.from(groupedMap.values())
      .map((entry) => ({
        ...entry,
        vaccine: {
          essential: Array.from(new Set(entry.vaccine.essential)),
          supplement: Array.from(new Set(entry.vaccine.supplement)),
        },
        development: {
          description: Array.from(new Set(entry.development.description)),
          value: entry.development.value,
        },
      }))
      .sort((a, b) => a.minAge - b.minAge);
  }

  async function fetchSummaryData(pid: string) {
    if (!accessToken) return;

    const summaryService = new SummaryService(accessToken);
    const abnormalChild = developmentData.เด็กกลุ่มเสี่ยง.map((e) => {
      let minAge = 0;
      let maxAge = 0;
      if (e.age === "แรกเกิด") {
        minAge = 0;
        maxAge = 0;
      } else {
        const match = e.age.match(/(\d+)[^\d]+(\d+)/);
        if (match) {
          minAge = parseInt(match[1]);
          maxAge = parseInt(match[2]);
        }
      }
      return { ...e, minAge, maxAge };
    });

    try {
      const request: ISummaryRequest = {
        ageMin: 3,
        ageMax: 4,
        childpid: pid,
        childbirth: new Date().toISOString(),
        childcorrectedbirth: new Date().toISOString(),
        loggedin: 1,
        previous_chosen: "0",
        tableName: "GL_DEVELOPMENT_DAIM",
        childlowbtweigth: "no",
      };

      const response = await summaryService.getSummaryInfo(request);
      const initialSummaries = mapSummary(response.data, 1);

      const mappedSummaries = await Promise.all(
        abnormalChild.map(async (ss) => {
          const req: ISummaryRequest = {
            ageMin: ss.minAge,
            ageMax: ss.maxAge,
            childpid: pid,
            childbirth: new Date().toISOString(),
            childcorrectedbirth: new Date().toISOString(),
            loggedin: 1,
            previous_chosen: "0",
            tableName: "GL_DEVELOPMENT_DAIM",
            childlowbtweigth: "no",
          };
          const res = await summaryService.getSummaryInfo(req);
          return mapSummary(res.data, 0);
        })
      );

      const additionalSummaries = mappedSummaries.flat();
      const allSummaries = [...initialSummaries, ...additionalSummaries];
      setSummary(allSummaries);
    } catch (error) {
      console.error("Failed to fetch summary data:", error);
    }
  }

  function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedName = event.target.value;
    const selected = children.find((item) => item.NAME === selectedName);
    setSelectedPID(selected ? selected.PID : "");
    setSelectedChild(selected ?? null);

    if (selected?.PID) {
      fetchSummaryData(selected.PID);
    }
  }

  return (
    <div className="bg-Bg">
      <div className="flex justify-center items-center text-center relative z-0 flex-col p-12 bg-Bg gap-1 top-16 lg:top-24 w-full">
        <h1 className="font-bold text-3xl lg:text-5xl text-Dark pb-1 mt-5 lg:pb-3">
          สรุปข้อมูลของ
        </h1>
        <p className="text-3xl lg:text-5xl font-bold text-Yellow mb-6">
          คุณลูก
        </p>
        <p className="text-2xl text-Dark font-bold mb-6 mt-8">
          เลือกคุณลูกเพื่อดูสรุปข้อมูลเลย!
        </p>

        {children.length > 0 ? (
          <select
            id="vaccineOption"
            className="p-2 px-4 border border-gray-300 rounded-xl w-60"
            onChange={handleSelectChange}
          >
            <option value="">เลือกคุณลูก</option>
            {children.map((item) => (
              <option key={item.PID} value={item.NAME}>
                {item.NAME}
              </option>
            ))}
          </select>
        ) : (
          <p className="text-gray-500">กำลังโหลดข้อมูล...</p>
        )}

        {selectedPID && (
          <ChildDetails
            childName={selectedChild?.NAME ?? ""}
            childAge={age}
            childBD={formatThaiDate(selectedChild?.BIRTH ?? "")}
            summary={summary}
          />
        )}
      </div>
    </div>
  );
}
