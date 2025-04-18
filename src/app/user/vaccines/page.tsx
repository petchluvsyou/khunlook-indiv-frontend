"use client";
import { useState, useEffect } from "react";
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
import AddChildPanel from "@/components/AddChildPanel";
import EditChildPanel from "@/components/EditChildPanel";
import { useSession } from "next-auth/react";
import VaccineService from "@/libs/VaccineService/VaccineService";
import { IGetVaccine } from "@/libs/VaccineService/VaccineServiceModel";
import VaccineContainer from "@/components/vaccine/VaccineContainer";
import ChildService from "@/libs/ChildService/ChildService";
import { IChildData } from "@/libs/ChildService/ChildServiceModel";
import VaccineChildCard from "@/components/childcard/vaccine/VaccineChildCard";

export default function page() {
  const session = useSession();
  const [children, setChildren] = useState<IChildData[] | null>([]);
  const [child, setChild] = useState<IChildData | undefined>(undefined);
  const [childBD, setChildBD] = useState<string>("");
  const [vaccines, setVaccines] = useState<IGetVaccine[]>([]);
  const [vaccineOption, setVaccineOption] = useState<"required" | "optional">(
    "required"
  );
  const [age, setAge] = useState<"lt1" | "mt1">("lt1");
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);
  const [childOption, setChildOption] = useState<string>("");

  const [isAddChildPanelVisible, setAddChildPanelVisible] = useState(false);
  const [isEditChildPanelVisible, setEditChildPanelVisible] = useState(false);

  const [hasReceivedAllVaccines, setHasReceivedAllVaccines] = useState<boolean>(false);
  const [missingVaccines, setMissingVaccines] = useState<string[]>([]);

  const handleVaccineOptionChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setActiveIndexes([]);
    setVaccineOption(e.target.value as "required" | "optional");
  };

  const handleChildOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setChildOption(e.target.value);
  };

  const toggleAccordion = (index: number) => {
    setActiveIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  // 0 - 6, 7 - 12
  const VACCINEAGEHEADER = [
    "อายุ",
    "แรกเกิด",
    "2 เดือน",
    "4 เดือน",
    "6 เดือน",
    "9 เดือน",
    "12 เดือน",
    "อายุ",
    "18 เดือน",
    "2 ปี",
    "2½ ปี",
    "4-6 ปี",
    "11-15 ปี",
  ];
  const data =
    vaccineOption === "required" ? requiredVaccineData : optionalVaccineData;
  useEffect(() => {
    const getChild = async () => {
      const childService = new ChildService(session.data?.accessToken);
      const res = await childService.getChildByID(
        session.data?.user?.pid ?? ""
      );
      const arr = Object.values(res.data.data);
      setChildren(arr);
      setChild(arr[0]);
      setChildOption(arr[0].NAME);
      setChildBD(arr[0].BIRTH);
    };
    getChild();
  }, []);
  useEffect(() => {
    const getVaccines = async () => {
      const child = children?.find((child) => child.NAME === childOption);
      const vaccineService = new VaccineService(session.data?.accessToken);
      const res = await vaccineService.getInformation({
        childpid: child?.PID ?? "",
        // isinplan: age === "lt1" ? "1" : "2",
        isinplan: "1",
        loggedin: 1,
        previous_chosen: "1",
      });

      const arr = res.data.history;
      await setVaccines(arr);

      const historyDescriptions = new Set(res.data.history.map((h: IGetVaccine) => h.DESCRIPTION));

      const missingVaccineDescriptions: string[] = [];
      let hasReceivedAllVaccines = true;

      for (const vaccine of res.data.content) {
        if (!historyDescriptions.has(vaccine.DESCRIPTION)) {
          missingVaccineDescriptions.push(vaccine.DESCRIPTION);
          hasReceivedAllVaccines = false;
        }
      }

      await setHasReceivedAllVaccines(hasReceivedAllVaccines);
      await setMissingVaccines(missingVaccineDescriptions);

    };
    getVaccines();
  }, [childOption, age]);

  function calculateAgeFormatted(birthTime: string) {
    const birthDate = new Date(birthTime);
    const now = new Date();

    console.log(now, birthDate);

    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    return `${years} ปี ${months} เดือน`;
  }

  function formatThaiDate(isoDate: string) {
    const date = new Date(isoDate);
  
    // Check if the date is valid
    if (isNaN(date.getTime())) {
      console.error("Invalid date:", isoDate);
      return "Invalid date"; // or return an empty string or fallback message
    }
  
    return new Intl.DateTimeFormat("th-TH", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  }
  

  return (
    <div className="min-h-screen justify-center items-center text-center relative z-0 flex flex-col p-12 bg-Bg gap-1 top-[64px] sm:top-[92px] w-full">
      <div className="fixed top-32 right-4 z-50">
        <VaccineChildCard
           childName={childOption}
           childAge={calculateAgeFormatted(childBD)}
           childBD={formatThaiDate(childBD)}
           hasReceivedAllVaccines={hasReceivedAllVaccines}
           missingVaccines={missingVaccines}
        />
      </div>
      <h1 className="font-bold text-[24px] sm:text-5xl mb-12 mt-5 sm:mb-16">
        ข้อมูลการรับวัคซีน
      </h1>
      <div className="mb-4 flex items-center">
        <label htmlFor="vaccineOption" className="text-gray-700 mr-2">
          วัคซีน
        </label>
        <select
          id="vaccineOption"
          value={vaccineOption}
          onChange={handleVaccineOptionChange}
          className="p-2 border border-gray-300 rounded w-48 mr-2"
        >
          <option key="required" value="required">
            จำเป็น
          </option>
          <option key="optional" value="optional">
            เสริมหรือทดแทน
          </option>
        </select>
        <label
          htmlFor="childOption"
          className="text-gray-700 mr-2 hidden sm:block"
        >
          ที่ควรได้รับสำหรับ
        </label>
        <select
          id="childOption"
          value={childOption}
          onChange={handleChildOptionChange}
          className="p-2 border border-gray-300 rounded w-48"
        >
          {children?.map((child, i) => (
            <option key={i} value={child.NAME}>
              {child.NAME}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-between space-x-2 mb-8">
        <div className="">
          <button
            onClick={() => {
              setAddChildPanelVisible(!isAddChildPanelVisible);
            }}
            className="w-32 py-2 bg-Yellow  hover:bg-yellow-500 text-white font-semibold rounded-md transition"
          >
            เพิ่มลูก
          </button>
          {isAddChildPanelVisible && (
            <AddChildPanel onClose={() => setAddChildPanelVisible(false)} />
          )}
        </div>
        <div className="">
          <button
            onClick={() => {
              setEditChildPanelVisible(!isEditChildPanelVisible);
            }}
            className="w-32 py-2 bg-Yellow  hover:bg-yellow-500 text-white font-semibold rounded-md transition"
          >
            แก้ไขข้อมูลลูก
          </button>
          {isEditChildPanelVisible && (
            <EditChildPanel onClose={() => setEditChildPanelVisible(false)} />
          )}
        </div>
      </div>
      {/*md*/}
      <div className="hidden sm:block">
        <VaccineContainer
          isInPlan={vaccineOption === "required"}
          child={child}
        />
      </div>
      {/*sm*/}
      <div className="sm:hidden w-full p-4">
        {data.map((item, index) => (
          <div key={index} className="mb-3">
            <div
              onClick={() => toggleAccordion(index)}
              className={`p-3 col-span-4 flex items-center justify-between text-left h-14 
                                    bg-Yellow2  mt-2 cursor-pointer hover:bg-Yellow
                                    ${activeIndexes.includes(index)
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
