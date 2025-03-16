"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import requiredVaccineData from "./vaccineData/requiredVaccineData";
import optionalVaccineData from "./vaccineData/optionalVaccineData";
import vaccineName from "./vaccineData/vaccineName";
import VaccineContainer from "@/components/vaccine/VaccineContainer";

export default function page() {
  const [vaccineOption, setVaccineOption] = useState<"required" | "optional">(
    "required"
  );
  const [age, setAge] = useState<"lt1" | "mt1">("lt1");
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  const handleVaccineOptionChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setActiveIndexes([]);
    setVaccineOption(e.target.value as "required" | "optional");
  };

  const toggleAccordion = (index: number) => {
    setActiveIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const data =
    vaccineOption === "required" ? requiredVaccineData : optionalVaccineData;

  return (
    <div className="min-h-screen justify-center items-center text-center relative z-0 flex flex-col p-12 bg-Bg gap-1 top-[64px] sm:top-[92px] w-full">
      <h1 className="font-bold text-[24px] sm:text-5xl mb-12 mt-5 sm:mb-16">
        ข้อมูลการรับวัคซีน
      </h1>
      <div className="mb-8 flex items-center">
        <label htmlFor="vaccineOption" className="text-gray-700 mr-2">
          วัคซีน
        </label>
        <select
          id="vaccineOption"
          value={vaccineOption}
          onChange={handleVaccineOptionChange}
          className="p-2 border border-gray-300 rounded w-48"
        >
          <option key="required" value="required">
            จำเป็น
          </option>
          <option key="optional" value="optional">
            เสริมหรือทดแทน
          </option>
        </select>
        <label
          htmlFor="vaccineOption"
          className="text-gray-700 mr-2 hidden sm:block"
        >
          ที่ควรได้รับสำหรับเด็กปฐมวัย
        </label>
      </div>
      <div>
        <VaccineContainer />
      </div>
      {/*sm*/}
      <div className="sm:hidden w-full p-4">
        {data.map((item, index) => (
          <div key={index} className="mb-3">
            <div
              onClick={() => toggleAccordion(index)}
              className={`p-3 col-span-4 flex items-center justify-between text-left h-14 
                                    bg-Yellow2  mt-2 cursor-pointer hover:bg-Yellow
                                    ${
                                      activeIndexes.includes(index)
                                        ? "rounded-t-md"
                                        : "rounded-md"
                                    }`}
            >
              <span className="text-md font-semibold">{item.age}</span>
              <FontAwesomeIcon
                icon={activeIndexes.includes(index) ? faAngleUp : faAngleDown}
                className="text-black text-xl"
              />
            </div>
            {activeIndexes.includes(index) && (
              <div className="rounded-b-md bg-white">
                {Object.entries(item.vac).map(
                  ([vaccineKey, vaccineLabel], idx) => (
                    <div
                      key={idx}
                      className="flex justify-between space-x-8 border border-Yellow2 p-4"
                    >
                      <span className="text-md text-Yellow font-bold text-left">
                        {vaccineLabel}
                      </span>
                      <span className="font-medium text-black text-right">
                        {vaccineName[vaccineKey]}
                      </span>
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
