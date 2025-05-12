"use client";
import { ReactNode } from "react";
import { AgeLabel } from "./VaccineContainer";

interface VaccineBoxProp {
  ageLabels: AgeLabel[];
  description: string;
  size?: number;
  isVaccined: boolean;
  vaccineCell?: ReactNode;
}

export default function VaccineBox({
  description,
  size,
  ageLabels,
  isVaccined,
  vaccineCell,
}: VaccineBoxProp) {
  const width = ageLabels.length ? (100 * (size ?? 1)) / ageLabels.length : 100;

  const isData = description == "";
  return (
    <div
      className={`flex flex-col gap-1 items-center justify-center bg-Bg p-2 min-w-48 flex-grow ${
        isVaccined && isData && ""
      } ${!isData && "bg-Bg font-bold"}`}
      style={{ width: `${width}%` }}
    >
      {isVaccined && isData && vaccineCell}
      {isData ? "" : description}
    </div>
  );
}
