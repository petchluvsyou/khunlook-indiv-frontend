import React from "react";

export default function VaccineList({ name, vaccines }: { name: string; vaccines: string[] }) {
  return (
    <div className="p-1 rounded-md">
      <h3 className="text-left text-sm font-bold text-black">{name}</h3>
      {/* Vaccine List */}
      <div className="mt-2 grid grid-cols-3 gap-1">
        {vaccines.map((vaccine, index) => (
          <span
            key={index}
            className="p-1 bg-Yellow text-white font-medium text-sm rounded-xl"
          >
            {vaccine}
          </span>
        ))}
      </div>
    </div>
  );
}
