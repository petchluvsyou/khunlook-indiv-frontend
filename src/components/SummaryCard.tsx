"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faSyringe } from "@fortawesome/free-solid-svg-icons";
import ProgressBar from "./summary/ProgressBar";
import VaccineList from "./summary/VaccineList";

interface Summary {
  age: string;
  movement: number;
  dexterity: number;
  comprehension: number;
  "language-use": number;
  "self-help": number;
  vaccine: {
    essential: string[];
    supplement: string[];
  };
}

export default function SummaryCard({ summary }: { summary: Summary }) {
  return (
    <div className="relative flex flex-col space-y-3 p-4 bg-Yellow rounded-xl h-[340px]">
      {/* Age Label */}
      <div className="absolute -top-3 -left-3 bg-white text-black text-sm font-bold px-3 py-1 rounded-full shadow-md">
        {summary.age}
      </div>

      {/* Information panel */}
      <div className="flex gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 p-2 rounded-full cursor-pointer transition-all duration-300 w-36 bg-white text-Yellow shadow-md">
            <FontAwesomeIcon icon={faStar} className="text-Yellow" size="lg" />
            <span className="text-sm font-medium">Development</span>
          </div>
          <div className="flex flex-col space-y-2 w-64 bg-white rounded-md p-4 h-64">
            <ProgressBar name="การเคลื่อนไหว" score={summary.movement} />
            <ProgressBar
              name="การใช้กล้ามเนื้อมัดเล็กและสติปัญญา"
              score={summary.dexterity}
            />
            <ProgressBar name="การเข้าใจภาษา" score={summary.comprehension} />
            <ProgressBar name="การใช้ภาษา" score={summary["language-use"]} />
            <ProgressBar
              name="การช่วยเหลือตัวเองและสังคม"
              score={summary["self-help"]}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 p-2 rounded-full cursor-pointer transition-all duration-300 w-28 bg-white text-Yellow shadow-md">
            <FontAwesomeIcon
              icon={faSyringe}
              className="text-Yellow"
              size="lg"
            />
            <span className="text-sm font-medium">Vaccine</span>
          </div>
          <div className="flex flex-col space-y-2 w-64 bg-white rounded-md p-4 min-h-64">
            <VaccineList
              name="วัคซีนจำเป็นที่ได้รับแล้ว"
              vaccines={summary.vaccine.essential}
            />
            <VaccineList
              name="วัคซีนเสริมที่ได้รับแล้ว"
              vaccines={summary.vaccine.supplement}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
