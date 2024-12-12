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
import VaccineCell from "@/components/VaccineCell";
import AddChildPanel from "@/components/AddChildPanel";
import EditChildPanel from "@/components/EditChildPanel";
import ChildService from "@/libs/ChildService/ChildService";
import { IChildData } from "@/libs/ChildService/ChildServiceModel";
import { useSession } from "next-auth/react";

export default function page() {
  const session = useSession();
  const [childs, setChilds] = useState<IChildData[] | null>([]);
  const [vaccineOption, setVaccineOption] = useState<"required" | "optional">(
    "required"
  );
  const [age, setAge] = useState<"lt1" | "mt1">("lt1");
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);
  const [childOption, setChildOption] = useState<string>("");

  const [isAddChildPanelVisible, setAddChildPanelVisible] = useState(false);
  const [isEditChildPanelVisible, setEditChildPanelVisible] = useState(false);

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
      const res = await childService.getChildByID(6);
      const arr = Object.values(res.data.data);
      setChilds(arr);
      console.log(res);
    };
    getChild();
  }, []);

  return (
    <div className="min-h-screen justify-center items-center text-center relative z-0 flex flex-col p-12 bg-Bg gap-1 top-[64px] sm:top-[92px] w-full">
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
          {childs?.map((child, i) => (
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
        {vaccineOption === "required" ? (
          age === "lt1" ? (
            <div className="grid grid-cols-7 gap-1 bg-white p-10 rounded-md shadow-lg m-4">
              <div
                className="col-span-7 text-Yellow text-right font-bold hover:text-[#B88433] hover:scale-105 transform transition-all duration-200 cursor-pointer"
                onClick={() => setAge("mt1")}
              >
                มากกว่า 1 ปี
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-Yellow text-xl ml-2"
                />
              </div>

              {/* Header Row */}
              {VACCINEAGEHEADER.slice(0, 7).map((header, index) => (
                <div
                  className="font-bold text-center bg-Bg p-4 rounded-md"
                  key={header + index}
                >
                  {header}
                </div>
              ))}
              {/* Vaccine Rows */}
              {/* BCG */}
              <div className="bg-Bg p-4 rounded-md">วัคซีนวัณโรค (BCG)</div>
              <VaccineCell
                vaccineType="BCG"
                colspan={1}
                color="Yellow"
                prev_chosen={true}
                prev_location="Dongy Hospital"
                prev_reserveDate="10/26/2024"
              />
              <div className="col-span-5 p-4"></div>

              {/* HBV */}
              <div className="bg-Bg p-4 rounded-md">
                วัคซีนตับอักเสบบี (HBV)
              </div>
              <VaccineCell
                vaccineType="HBV1"
                colspan={1}
                color="DarkRed"
                prev_chosen={true}
                prev_location="GearGear WHO center"
                prev_reserveDate="10/05/2024"
              />
              <div className="col-span-5 p-4"></div>

              {/* DTPHB */}
              <div className="bg-Bg p-4 rounded-md">
                วัคซีนคอตีบ,บาดทะยัก (DTPHB)
              </div>
              <div className="col-span-1 p-4"></div>
              <VaccineCell
                vaccineType="DTPHB 1"
                colspan={1}
                color="Yellow"
                prev_chosen={false}
                prev_location=""
                prev_reserveDate=""
              />
              <VaccineCell
                vaccineType="DTPHB 2"
                colspan={1}
                color="Yellow"
                prev_chosen={false}
                prev_location=""
                prev_reserveDate=""
              />
              <VaccineCell
                vaccineType="DTPHB 3"
                colspan={1}
                color="Yellow"
                prev_chosen={false}
                prev_location=""
                prev_reserveDate=""
              />
              <div className="col-span-2 p-4"></div>

              {/* OPV */}
              <div className="bg-Bg p-4 rounded-md">วัคซีนโปลิโอ (OPV)</div>
              <div className="p-4"></div>
              <VaccineCell
                vaccineType="OPV1"
                colspan={1}
                color="Yellow"
                prev_chosen={false}
                prev_location=""
                prev_reserveDate=""
              />
              <VaccineCell
                vaccineType="OPV2"
                colspan={1}
                color="Yellow"
                prev_chosen={false}
                prev_location=""
                prev_reserveDate=""
              />
              <VaccineCell
                vaccineType="IPV"
                colspan={1}
                color="Yellow"
                prev_chosen={false}
                prev_location=""
                prev_reserveDate=""
              />
              <VaccineCell
                vaccineType="OPV3"
                colspan={1}
                color="Yellow"
                prev_chosen={false}
                prev_location=""
                prev_reserveDate=""
              />
              <div className="col-span-1 p-4"></div>

              {/* MMR */}
              <div className="bg-Bg p-4 rounded-md">
                วัคซีนหัด คางทูม หัดเยอรมัน (MMR)
              </div>
              <div className="col-span-4 p-4"></div>
              <VaccineCell
                vaccineType="MMR1"
                colspan={2}
                color="Yellow"
                prev_chosen={false}
                prev_location=""
                prev_reserveDate=""
              />

              {/* JE */}
              <div className="bg-Bg p-4 rounded-md">
                วัคซีนไข้สมองอักเสบ (JE)
              </div>
              <div className="col-span-4 p-4"></div>
              <VaccineCell
                vaccineType="JE1"
                colspan={2}
                color="Yellow"
                prev_chosen={false}
                prev_location=""
                prev_reserveDate=""
              />
            </div>
          ) : (
            <div className="grid grid-cols-6 gap-1 bg-white p-10 rounded-md shadow-lg m-4">
              <div
                className="col-span-6 text-left text-Yellow font-bold hover:text-[#B88433] hover:scale-105 transform transition-all duration-200 cursor-pointer"
                onClick={() => setAge("lt1")}
              >
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="text-Yellow text-xl ml-2"
                />
                น้อยกว่า 1 ปี
              </div>
              {/* Header Row */}
              <div className="font-bold text-center bg-Bg p-4 rounded-md">
                อายุ
              </div>
              <div className="font-bold text-center bg-Bg p-4 rounded-md">
                18 เดือน
              </div>
              <div className="font-bold text-center bg-Bg p-4 rounded-md">
                2 ปี
              </div>
              <div className="font-bold text-center bg-Bg p-4 rounded-md">
                2½ ปี
              </div>
              <div className="font-bold text-center bg-Bg p-4 rounded-md">
                4-6 ปี
              </div>
              <div className="font-bold text-center bg-Bg p-4 rounded-md">
                11-15 ปี
              </div>

              {/* BCG */}
              <div className="bg-Bg p-4 rounded-md">วัคซีนวัณโรค (BCG)</div>
              <div className="col-span-5 p-4"></div>

              {/* HBV */}
              <div className="bg-Bg p-4 rounded-md">
                วัคซีนตับอักเสบบี (HBV)
              </div>
              <div className="col-span-5 p-4"></div>

              {/* DTPHB */}
              <div className="bg-Bg p-4 rounded-md">
                วัคซีนคอตีบ,บาดทะยัก (DTPHB)
              </div>
              <VaccineCell
                vaccineType="DTwP กระตุ้น 1"
                colspan={1}
                color="Yellow"
                prev_chosen={false}
                prev_location=""
                prev_reserveDate=""
              />
              <div className="col-span-2 p-4"></div>
              <VaccineCell
                vaccineType="DTwP กระตุ้น 2"
                colspan={1}
                color="Yellow"
                prev_chosen={false}
                prev_location=""
                prev_reserveDate=""
              />
              <VaccineCell
                vaccineType="Td"
                colspan={1}
                color="Yellow"
                prev_chosen={false}
                prev_location=""
                prev_reserveDate=""
              />

              {/* OPV */}
              <div className="bg-Bg p-4 rounded-md">วัคซีนโปลิโอ (OPV)</div>
              <div className="col-span-1 p-4"></div>
              <VaccineCell
                vaccineType="OPV4"
                colspan={1}
                color="Yellow"
                prev_chosen={false}
                prev_location=""
                prev_reserveDate=""
              />
              <div className="col-span-2 p-4"></div>
              <VaccineCell
                vaccineType="OPV5"
                colspan={1}
                color="Yellow"
                prev_chosen={false}
                prev_location=""
                prev_reserveDate=""
              />

              {/* MMR */}
              <div className="bg-Bg p-4 rounded-md">
                วัคซีนหัด คางทูม หัดเยอรมัน (MMR)
              </div>
              <div className="col-span-2 p-4"></div>
              <VaccineCell
                vaccineType="MMR2"
                colspan={1}
                color="Yellow"
                prev_chosen={false}
                prev_location=""
                prev_reserveDate=""
              />
              <div className="col-span-2 p-4"></div>

              {/* JE */}
              <div className="bg-Bg p-4 rounded-md">
                วัคซีนไข้สมองอักเสบ (JE)
              </div>
              <VaccineCell
                vaccineType="JE2"
                colspan={1}
                color="Yellow"
                prev_chosen={false}
                prev_location=""
                prev_reserveDate=""
              />
              <VaccineCell
                vaccineType="JE3"
                colspan={1}
                color="Yellow"
                prev_chosen={false}
                prev_location=""
                prev_reserveDate=""
              />
              <div className="col-span-2 p-4"></div>
            </div>
          )
        ) : age === "lt1" ? (
          <div className="grid grid-cols-6 gap-1 bg-white p-10 rounded-md shadow-lg m-4">
            {/* Header */}
            <div
              className="col-span-6 text-Yellow text-right font-bold hover:text-[#B88433] hover:scale-105 transform transition-all duration-200 cursor-pointer"
              onClick={() => setAge("mt1")}
            >
              มากกว่า 1 ปี
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-Yellow text-xl ml-2"
              />
            </div>

            {/* Header Row */}
            <div className="font-bold text-center bg-Bg p-4 rounded-md">
              อายุ
            </div>
            <div className="font-bold text-center bg-Bg p-4 rounded-md">
              2 เดือน
            </div>
            <div className="font-bold text-center bg-Bg p-4 rounded-md">
              4 เดือน
            </div>
            <div className="font-bold text-center bg-Bg p-4 rounded-md">
              6 เดือน
            </div>
            <div className="font-bold text-center bg-Bg p-4 rounded-md">
              9 เดือน
            </div>
            <div className="font-bold text-center bg-Bg p-4 rounded-md">
              12 เดือน
            </div>

            {/* DTP-IPV-Hib */}
            <div className="bg-Bg p-4 rounded-md">
              วัคซีนโรคคอตีบ-บาดทะยัก-ไอกรน-โปลิโอ-เยื่อหุ้มสมองอักเสบจากเชื้อฮีโมฟิลุสอินฟลูเอ็นเซ่
              ทัยป์บี (DTP-IPV-Hib)
            </div>
            <div className="col-span-1 p-4"></div>
            <VaccineCell
              vaccineType="DTP-IPV-Hib 2"
              colspan={1}
              color="Yellow"
              prev_chosen={false}
              prev_location=""
              prev_reserveDate=""
            />
            <div className="col-span-3 p-4"></div>

            {/* DTP-IPV-HB-Hib */}
            <div className="bg-Bg p-4 rounded-md">
              วัคซีนโรคคอตีบ-บาดทะยัก-ไอกรน-โปลิโอ-ตับอักเสบบี-เยื่อหุ้มสมองอักเสบจากเชื้อฮีโมฟิลุสอินฟลูเอ็นเซ่
              ทัยป์บี (DTP-IPV-HB-Hib)
            </div>
            <VaccineCell
              vaccineType="DTP-IPV-HB-Hib1"
              colspan={1}
              color="Yellow"
              prev_chosen={false}
              prev_location=""
              prev_reserveDate=""
            />
            <VaccineCell
              vaccineType="DTP-IPV-HB-Hib2"
              colspan={1}
              color="Yellow"
              prev_chosen={false}
              prev_location=""
              prev_reserveDate=""
            />
            <VaccineCell
              vaccineType="DTP-IPV-HB-Hib3"
              colspan={1}
              color="Yellow"
              prev_chosen={false}
              prev_location=""
              prev_reserveDate=""
            />
            <div className="col-span-2 p-4"></div>

            {/* Hib */}
            <div className="bg-Bg p-4 rounded-md">
              วัคซีนโรคเยื่อหุ้มสมองอักเสบจาก เชื้อฮีโมฟิลุสอินฟลูเอ็นเซ่ทัยป์บี
              (Hib)
            </div>
            <VaccineCell
              vaccineType="Hib1"
              colspan={1}
              color="Yellow"
              prev_chosen={false}
              prev_location=""
              prev_reserveDate=""
            />
            <VaccineCell
              vaccineType="Hib2"
              colspan={1}
              color="Yellow"
              prev_chosen={false}
              prev_location=""
              prev_reserveDate=""
            />
            <VaccineCell
              vaccineType="Hib3"
              colspan={1}
              color="Yellow"
              prev_chosen={false}
              prev_location=""
              prev_reserveDate=""
            />
            <div className="col-span-2 p-4"></div>

            {/* JE */}
            <div className="bg-Bg p-4 rounded-md">
              วัคซีนโรคไข้สมองอักเสบเจอี (JE)
            </div>
            <div className="col-span-3 p-4"></div>
            <VaccineCell
              vaccineType="JE1: Lived attenuated"
              colspan={2}
              color="Yellow"
              prev_chosen={false}
              prev_location=""
              prev_reserveDate=""
            />

            {/* HA */}
            <div className="bg-Bg p-4 rounded-md">
              วัคซีนโรคตับอักเสบเอ (HA)
            </div>
            <div className="col-span-4 p-4"></div>
            <VaccineCell
              vaccineType="HAV1"
              colspan={1}
              color="Yellow"
              prev_chosen={false}
              prev_location=""
              prev_reserveDate=""
            />

            {/* VAR */}
            <div className="bg-Bg p-4 rounded-md">วัคซีนโรคอีสุกอีใส (Var)</div>
            <div className="col-span-4 p-4"></div>
            <VaccineCell
              vaccineType="VZV1"
              colspan={1}
              color="Yellow"
              prev_chosen={false}
              prev_location=""
              prev_reserveDate=""
            />

            {/* FLU */}
            <div className="bg-Bg p-4 rounded-md">วัคซีนไข้หวัดใหญ่ (Flu)</div>
            <div className="col-span-2 p-4"></div>
            <VaccineCell
              vaccineType="Influenza ให้ปีละครั้งช่วงอายุ 6 เดือน - 18 ปี (เน้นในอายุ 6-24 เดือน) ในปีแรกฉีด 2 เข็มห่างกัน 4 สัปดาห์"
              colspan={3}
              color="Yellow"
              prev_chosen={false}
              prev_location=""
              prev_reserveDate=""
            />

            {/* IPD PCV */}
            <div className="bg-Bg p-4 rounded-md">
              วัคซีนโรคไอพีดี (IPD) ชนิดคอนจูเกต หรือวัคซีน PCV (PCV)
            </div>
            <VaccineCell
              vaccineType="PCV1"
              colspan={1}
              color="Yellow"
              prev_chosen={false}
              prev_location=""
              prev_reserveDate=""
            />
            <VaccineCell
              vaccineType="PCV2"
              colspan={1}
              color="Yellow"
              prev_chosen={false}
              prev_location=""
              prev_reserveDate=""
            />
            <VaccineCell
              vaccineType="(PCV3)"
              colspan={1}
              color="Yellow"
              prev_chosen={false}
              prev_location=""
              prev_reserveDate=""
            />
            <div className="col-span-1 p-4"></div>
            <VaccineCell
              vaccineType="PCV4"
              colspan={1}
              color="Yellow"
              prev_chosen={false}
              prev_location=""
              prev_reserveDate=""
            />

            {/* RV3 */}
            <div className="bg-Bg p-4 rounded-md">
              วัคซีนโรคอุจจาระร่วงจากเชื้อไวรัสโรต้า (RV3)
            </div>
            <VaccineCell
              vaccineType="Rota1"
              colspan={1}
              color="Yellow"
              prev_chosen={false}
              prev_location=""
              prev_reserveDate=""
            />
            <VaccineCell
              vaccineType="Rota2"
              colspan={1}
              color="Yellow"
              prev_chosen={false}
              prev_location=""
              prev_reserveDate=""
            />
            <VaccineCell
              vaccineType="Rota3 (เฉพาะ pentavalent)"
              colspan={1}
              color="Yellow"
              prev_chosen={false}
              prev_location=""
              prev_reserveDate=""
            />
            <div className="col-span-2 p-4"></div>

            {/* HPV */}
            <div className="bg-Bg p-4 rounded-md">
              วัคซีนโรคมะเร็งปากมดลูกจากเชื้อ ไวรัสฮิวแมนแปบพิลโลมา (HPV)
            </div>
            <div className="col-span-5 p-4"></div>
          </div>
        ) : (
          <div className="grid grid-cols-6 gap-1 bg-white p-10 rounded-md shadow-lg m-4">
            {/* Header */}
            <div
              className="col-span-6 text-left text-Yellow font-bold hover:text-[#B88433] hover:scale-105 transform transition-all duration-200 cursor-pointer"
              onClick={() => setAge("lt1")}
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="text-Yellow text-xl ml-2"
              />
              น้อยกว่า 18 เดือน
            </div>

            {/* Header Row */}
            {VACCINEAGEHEADER.slice(7, 6).map((header, index) => (
              <div
                className="font-bold text-center bg-Bg p-4 rounded-md"
                key={header + index + 6}
              >
                {header}
              </div>
            ))}

            {/* DTP-IPV-Hib */}
            <div className="bg-Bg p-4 rounded-md">
              วัคซีนโรคคอตีบ-บาดทะยัก-ไอกรน-โปลิโอ-เยื่อหุ้มสมองอักเสบจากเชื้อฮีโมฟิลุสอินฟลูเอ็นเซ่
              ทัยป์บี (DTP-IPV-Hib)
            </div>
            <VaccineCell
              vaccineType="DTP-IPV-Hib 4"
              colspan={1}
              color="Yellow"
              prev_chosen={false}
              prev_location=""
              prev_reserveDate=""
            />
            <div className="col-span-4 p-4"></div>

            {/* DTP-IPV-HB-Hib */}
            <div className="bg-Bg p-4 rounded-md">
              วัคซีนโรคคอตีบ-บาดทะยัก-ไอกรน-โปลิโอ-ตับอักเสบบี-เยื่อหุ้มสมองอักเสบจากเชื้อฮีโมฟิลุสอินฟลูเอ็นเซ่
              ทัยป์บี (DTP-IPV-HB-Hib)
            </div>
            <VaccineCell
              vaccineType="DTP-IPV-HB-Hib4"
              colspan={1}
              color="Yellow"
              prev_chosen={false}
              prev_location=""
              prev_reserveDate=""
            />
            <div className="col-span-2 p-4"></div>
            <VaccineCell
              vaccineType="Tdap1 Tdap-IPV"
              colspan={1}
              color="Yellow"
              prev_chosen={false}
              prev_location=""
              prev_reserveDate=""
            />
            <div className="col-span-1 p-4"></div>

            {/* Hib */}
            <div className="bg-Bg p-4 rounded-md">
              วัคซีนโรคเยื่อหุ้มสมองอักเสบจาก เชื้อฮีโมฟิลุสอินฟลูเอ็นเซ่ทัยป์บี
              (Hib)
            </div>
            <VaccineCell
              vaccineType="Hib4"
              colspan={1}
              color="Yellow"
              prev_chosen={false}
              prev_location=""
              prev_reserveDate=""
            />
            <div className="col-span-4 p-4"></div>

            {/* JE */}
            <div className="bg-Bg p-4 rounded-md">
              วัคซีนโรคไข้สมองอักเสบเจอี (JE)
            </div>
            <VaccineCell
              vaccineType="JE2: Lived attenuated"
              colspan={3}
              color="Yellow"
              prev_chosen={false}
              prev_location=""
              prev_reserveDate=""
            />
            <div className="col-span-2 p-4"></div>

            {/* HA */}
            <div className="bg-Bg p-4 rounded-md">
              วัคซีนโรคตับอักเสบเอ (HA)
            </div>
            <VaccineCell
              vaccineType="HAV2"
              colspan={1}
              color="Yellow"
              prev_chosen={false}
              prev_location=""
              prev_reserveDate=""
            />
            <div className="col-span-4 p-4"></div>

            {/* VAR */}
            <div className="bg-Bg p-4 rounded-md">วัคซีนโรคอีสุกอีใส (Var)</div>
            <VaccineCell
              vaccineType="VZV1"
              colspan={1}
              color="Yellow"
              prev_chosen={false}
              prev_location=""
              prev_reserveDate=""
            />
            <div className="col-span-2 p-4"></div>
            <VaccineCell
              vaccineType="VZV2"
              colspan={1}
              color="Yellow"
              prev_chosen={false}
              prev_location=""
              prev_reserveDate=""
            />
            <div className="col-span-1 p-4"></div>

            {/* FLU */}
            <div className="bg-Bg p-4 rounded-md">วัคซีนไข้หวัดใหญ่ (Flu)</div>
            <VaccineCell
              vaccineType="Influenza ให้ปีละครั้งช่วงอายุ 6 เดือน - 18 ปี (เน้นในอายุ 6-24 เดือน) ในปีแรกฉีด 2 เข็มห่างกัน 4 สัปดาห์"
              colspan={5}
              color="Yellow"
              prev_chosen={false}
              prev_location=""
              prev_reserveDate=""
            />

            {/* IPD PCV */}
            <div className="bg-Bg p-4 rounded-md">
              วัคซีนโรคไอพีดี (IPD) ชนิดคอนจูเกต หรือวัคซีน PCV (PCV)
            </div>
            <VaccineCell
              vaccineType="PCV4"
              colspan={1}
              color="Yellow"
              prev_chosen={false}
              prev_location=""
              prev_reserveDate=""
            />
            <div className="col-span-4 p-4"></div>

            {/* RV3 */}
            <div className="bg-Bg p-4 rounded-md">
              วัคซีนโรคอุจจาระร่วงจากเชื้อไวรัสโรต้า (RV3)
            </div>
            <div className="col-span-5 p-4"></div>

            {/* HPV */}
            <div className="bg-Bg p-4 rounded-md">
              วัคซีนโรคมะเร็งปากมดลูกจากเชื้อ ไวรัสฮิวแมนแปบพิลโลมา (HPV)
            </div>
            <div className="col-span-4 p-4"></div>
            <div className="col-span-1 grid grid-cols-3 gap-1">
              <VaccineCell
                vaccineType="HPV1"
                colspan={1}
                color="Yellow"
                prev_chosen={false}
                prev_location=""
                prev_reserveDate=""
              />
              <VaccineCell
                vaccineType="HPV2"
                colspan={1}
                color="Yellow"
                prev_chosen={false}
                prev_location=""
                prev_reserveDate=""
              />
              <VaccineCell
                vaccineType="HPV3"
                colspan={1}
                color="Yellow"
                prev_chosen={false}
                prev_location=""
                prev_reserveDate=""
              />
            </div>
          </div>
        )}
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
