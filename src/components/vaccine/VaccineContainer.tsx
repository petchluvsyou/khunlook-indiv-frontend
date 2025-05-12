"use client";
import { useState } from "react";
import VaccineGrid from "./VaccineGrid";
import { IChildData } from "@/libs/ChildService/ChildServiceModel";

export interface AgeLabel {
  label: string;
  months: number;
}
const AGELABELS = [
  { label: "แรกเกิด", months: 0 },
  { label: "2 เดือน", months: 2 },
  { label: "4 เดือน", months: 4 },
  { label: "5 เดิอน", months: 5 },
  { label: "6 เดือน", months: 6 },
  { label: "9 เดือน", months: 9 },
  { label: "12 เดือน", months: 12 },
  { label: "18 เดือน", months: 18 },
  { label: "2 ปี", months: 24 },
  { label: "2½ ปี", months: 30 },
  { label: "4-6 ปี", months: 48 },
  { label: "11-15 ปี", months: 132 },
];

interface VaccineContainerProps {
  isInPlan: boolean;
  child?: IChildData;
}

export default function VaccineContainer({
  isInPlan,
  child,
}: VaccineContainerProps) {
  const [ageLabels, setAgeLabels] = useState(AGELABELS.slice(0, 6));

  function toggleAgeLabels() {
    setAgeLabels(
      ageLabels.length === 6 ? AGELABELS.slice(6, 12) : AGELABELS.slice(0, 6),
    );
  }

  return (
    <div className="w-full p-4">
      <button
        onClick={toggleAgeLabels}
        className="w-32 py-2 bg-Yellow hover:bg-yellow-500 text-white font-semibold rounded-md transition"
      >
        Change Age
      </button>
      <div className="w-full">
        <VaccineGrid child={child} ageLabels={ageLabels} isInPlan={isInPlan} />
      </div>
    </div>
  );
}
