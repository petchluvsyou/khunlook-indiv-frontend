"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faChild } from "@fortawesome/free-solid-svg-icons";
import SummaryCard from "@/components/SummaryCard";

type ChildDetailsProps = {
  childName: string;
  childAge: string;
  childBD: string;
  headCircumLabel: string | undefined;
  heightLabel: string | undefined;
  weightLabel: string | undefined;
  weightHeightLabel: string | undefined;
  measureAge: string | undefined;
};

export default function GrowthChildCard({
  childName,
  childAge,
  childBD,
  headCircumLabel,
  heightLabel,
  weightLabel,
  weightHeightLabel,
  measureAge
}: ChildDetailsProps) {
  return (
    <div className="relative flex flex-col p-4">
      {/* Wrapper for hover effect */}
      <div className="group flex flex-col items-start space-y-3">
        {/* Vaccine Summary Button */}
        <div className="flex items-center gap-2 p-2 px-3 rounded-full transition-all duration-300 w-40 bg-white text-Yellow shadow-md group-hover:bg-Yellow group-hover:text-white cursor-pointer">
          <FontAwesomeIcon
            icon={faChild}
            className="transition-all duration-300 group-hover:text-white"
            size="lg"
          />
          <span className="text-sm font-medium transition-all duration-300">
            สรุปการเจริญเติบโต
          </span>
        </div>

        {/* Detail Box (show on hover) */}
        <div className="transition-all duration-300 max-h-0 opacity-0 overflow-hidden group-hover:max-h-[500px] group-hover:opacity-100 bg-Yellow p-2 rounded-xl">
          <div className="flex flex-col space-y-2 w-64 bg-white rounded-md p-4">
            <p className="text-left text-sm font-bold text-black">
              น้อง: <span className="font-medium">{childName}</span>
            </p>
            <p className="text-left text-sm font-bold text-black">
              อายุ: <span className="font-medium">{childAge}</span>
            </p>
            {measureAge !== "-" && (
              <p className="text-left text-sm font-bold text-black">
                อายุที่วัดล่าสุด: <span className="font-medium">{measureAge}</span>
              </p>
            )}
            <p className="text-left text-sm font-bold text-black">
              รูปร่าง: <span className="font-medium">{weightHeightLabel}</span>
            </p>
            <p className="text-left text-sm font-bold text-black">
              น้ำหนัก: <span className="font-medium">{weightLabel}</span>
            </p>
            <p className="text-left text-sm font-bold text-black">
              ส่วนสูง: <span className="font-medium">{heightLabel}</span>
            </p>
            <p className="text-left text-sm font-bold text-black">
              รอบศรีษะ: <span className="font-medium">{headCircumLabel}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
