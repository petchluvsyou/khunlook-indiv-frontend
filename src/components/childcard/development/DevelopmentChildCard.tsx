"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faSyringe } from "@fortawesome/free-solid-svg-icons";

export interface DevelopmentSummary {
  movement: { score: number; fullScore: number };
  dexterity: { score: number; fullScore: number };
  comprehension: { score: number; fullScore: number };
  "language-use": { score: number; fullScore: number };
  "self-help": { score: number; fullScore: number };
}

type ChildDetailsProps = {
  childName: string;
  childAge: string;
  childBD: string;
  ageRange: string;
  summaryData: DevelopmentSummary;
};

export default function DevelopmentChildCard({
  childName,
  childAge,
  childBD,
  ageRange,
  summaryData,
}: ChildDetailsProps) {
  return (
    <div className="relative flex flex-col space-y-3 p-4 bg-Yellow rounded-xl h-96">
      {/* Age Label */}
      <div className="absolute -top-3 -left-3 bg-white text-black text-sm font-bold px-3 py-1 rounded-full shadow-md">
        {ageRange}
      </div>

      {/* Development Information panel */}
      <div className="flex gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 p-2 rounded-full transition-all duration-300 w-36 bg-white text-Yellow shadow-md">
            <FontAwesomeIcon icon={faStar} className="text-Yellow" size="lg" />
            <span className="text-sm font-medium">สรุปพัฒนาการ</span>
          </div>

          <div className="flex flex-col space-y-2 w-64 bg-white rounded-md p-4 relative">
            <p className="text-left text-sm font-bold text-black">
              น้อง: <span className="font-medium">{childName}</span>
            </p>
            <p className="text-left text-sm font-bold text-black">
              อายุ: <span className="font-medium">{childAge}</span>
            </p>
            <p className="text-left text-sm font-bold text-black">
              วันเกิด: <span className="font-medium">{childBD}</span>
            </p>
            <p className="text-left text-sm font-bold text-black">
              ช่วงอายุพัฒนาการ: <span className="font-medium">{ageRange}</span>
            </p>
            <p className="text-left text-sm font-bold text-black">
              การเคลื่อนไหว:
              <span className="font-medium"> {summaryData.movement.score} / {summaryData.movement.fullScore} </span>
            </p>
            <p className="text-left text-sm font-bold text-black">
              การใช้กล้ามเนื้อมัดเล็กและสติปัญญา:
              <span className="font-medium"> {summaryData.dexterity.score} / {summaryData.dexterity.fullScore} </span>
            </p>
            <p className="text-left text-sm font-bold text-black">
              การเข้าใจภาษา:
              <span className="font-medium"> {summaryData.comprehension.score} / {summaryData.comprehension.fullScore} </span>
            </p>
            <p className="text-left text-sm font-bold text-black">
              การใช้ภาษา:
              <span className="font-medium"> {summaryData["language-use"].score} / {summaryData["language-use"].fullScore} </span>
            </p>
            <p className="text-left text-sm font-bold text-black">
              การช่วยเหลือตัวเองและสังคม:
              <span className="font-medium"> {summaryData["self-help"].score} / {summaryData["self-help"].fullScore} </span>
            </p>


          </div>
        </div>

      </div>
    </div>
  );
}





