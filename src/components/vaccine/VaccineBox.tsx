"use client";
import VaccineCell from "../VaccineCell";
import { AgeLabel } from "./VaccineContainer";

interface VaccineBoxProp {
  ageLabels: AgeLabel[];
  description: string;
  size?: number;
  isVaccined: boolean;
}

export default function VaccineBox({
  description,
  size,
  ageLabels,
  isVaccined,
}: VaccineBoxProp) {
  const width = ageLabels.length ? (100 * (size ?? 1)) / ageLabels.length : 100;
  const isData = description == "None";
  return (
    <div
      className={`flex flex-row items-center justify-center border border-x-Grey p-2 min-w-32 border-y-black ${
        isVaccined && isData && "bg-Yellow2"
      } ${!isData && "bg-Yellow"}`}
      style={{ width: `${width}%` }}
    >
      {isData ? "" : description}
    </div>
  );
}
