"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faSyringe } from "@fortawesome/free-solid-svg-icons";

export interface DevelopmentSummary {
  movement: string;
  dexterity: string;
  comprehension: string;
  "language-use": string;
  "self-help": string;
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
    <div className="relative flex flex-col p-4">
      {/* Age Label */}
      <div className="absolute -top-3 -left-3 bg-white text-black text-sm font-bold px-3 py-1 rounded-full shadow-md">
        {ageRange}
      </div>

      {/* Hover Group */}
      <div className="group flex flex-col items-start space-y-3">
        {/* Summary Button */}
        <div className="flex items-center gap-2 p-2 rounded-full transition-all duration-300 w-36 bg-white text-Yellow shadow-md group-hover:bg-Yellow group-hover:text-white cursor-pointer">
          <FontAwesomeIcon
            icon={faStar}
            className="transition-all duration-300 group-hover:text-white"
            size="lg"
          />
          <span className="text-sm font-medium transition-all duration-300">
            สรุปพัฒนาการ
          </span>
        </div>

        {/* Detail Panel */}
        <div className="transition-all duration-300 max-h-0 opacity-0 overflow-hidden group-hover:max-h-[1000px] group-hover:opacity-100 bg-Yellow p-2 rounded-xl">
          <div className="flex flex-col space-y-2 w-64 bg-white rounded-md p-4">
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
              <span className="font-medium"> {summaryData.movement} </span>
            </p>
            <p className="text-left text-sm font-bold text-black">
              การใช้กล้ามเนื้อมัดเล็กและสติปัญญา:
              <span className="font-medium"> {summaryData.dexterity} </span>
            </p>
            <p className="text-left text-sm font-bold text-black">
              การเข้าใจภาษา:
              <span className="font-medium"> {summaryData.comprehension} </span>
            </p>
            <p className="text-left text-sm font-bold text-black">
              การใช้ภาษา:
              <span className="font-medium">
                {" "}
                {summaryData["language-use"]}{" "}
              </span>
            </p>
            <p className="text-left text-sm font-bold text-black">
              การช่วยเหลือตัวเองและสังคม:
              <span className="font-medium"> {summaryData["self-help"]} </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
