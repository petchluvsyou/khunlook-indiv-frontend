"use client";
import { useState, useEffect } from "react";
import developmentData from "./developmentData";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import EditChildPanel from "@/components/EditChildPanel";
import AddChildPanel from "@/components/AddChildPanel";
import DevelopmentCheckCell from "@/components/DevelopmentCheckCell";
import ChildService from "@/libs/ChildService/ChildService";
import { useSession } from "next-auth/react";
import DevelopmentService from "@/libs/DevelopmentService/DevelopmentService";
import {
  IGetDevelopmentRequest,
  ISaveDevelopmentRequest,
  IDeleteDevelopmentRequest,
} from "@/libs/DevelopmentService/DevelopmentServiceModel";
import { IChildData } from "@/libs/ChildService/ChildServiceModel";
import dayjs from "dayjs";

interface ICurrentSkills {
  CODE: string;
  TYPE: string;
  MIN_AGE_MONTH: string;
  MAX_AGE_MONTH: string;
  AGE_MONTH_DESCRIPTION: string;
  MONTH_AT_OCCURRED: string;
  DATE_OCCURRED: string;
  TBName: string;
}

interface ICurrentData {
  MIN_AGE_MONTH: string;
  MAX_AGE_MONTH: string;
  CODE: string;
  TYPE: string;
  AGE_MONTH_DESCRIPTION: string;
  DESCRIPTION: string;
  INFORMATION: string;
  TYPE_DESRIPTION: string;
  TBName: string;
  SCREENING: string;
}
export default function page() {
  const [selectedOption, setSelectedOption] = useState<
    "เด็กปฐมวัย" | "เด็กกลุ่มเสี่ยง"
  >("เด็กปฐมวัย");
  const [ageRange, setAgeRange] = useState<string>("0-1 เดือน");
  const [currentData, setCurrentData] = useState<ICurrentData[]>([]);
  const [currentSkills, setCurrentSkills] = useState<ICurrentSkills[]>([]);
  const [childOption, setChildOption] = useState<string>("");
  const [allChildInfo, setAllChildInfo] = useState<IChildData[]>([]);
  const [isAddChildPanelVisible, setAddChildPanelVisible] = useState(false);
  const [isEditChildPanelVisible, setEditChildPanelVisible] = useState(false);
  const [childIndex, setChildIndex] = useState(0);
  const session = useSession();
  const childServiceClass = new ChildService(session.data?.accessToken);
  const DevelopmentServiceClass = new DevelopmentService(
    session.data?.accessToken
  );

  const getMatchingSkills = (code: string): ICurrentSkills | undefined => {
    return currentSkills?.find((item) => item.CODE === code);
  };
  const handleChildOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setChildOption(e.target.value);
    const currentIndex = Object.values(allChildInfo).findIndex(
      (item) => item.NAME === e.target.value
    );
    setChildIndex(currentIndex);

    if (
      allChildInfo[currentIndex].ASPHYXIA === "1" ||
      allChildInfo[currentIndex].BWEIGHT < 2500
    ) {
      toggleOption("เด็กกลุ่มเสี่ยง");
    } else {
      toggleOption("เด็กปฐมวัย");
    }
    console.log(currentIndex);
    // onLoadWindow();
  };
  const setDevelopmentInfo = async () => {
    let request: IGetDevelopmentRequest = {
      ageMin: 0,
      ageMax: 0,
      childpid: allChildInfo[childIndex]?.PID ?? "",
      childbirth: dayjs(allChildInfo[childIndex]?.BIRTH).format("YYYY-MM-DD"),
      childcorrectedbirth: dayjs(allChildInfo[childIndex]?.BIRTH).format(
        "YYYY-MM-DD"
      ),
      loggedin: 1,
      tableName: "",
    };
    if (ageRange.split(" ").length === 1) {
      request.ageMin = 0;
      request.ageMax = 0;
    } else {
      if (ageRange.split(" ")[0].split("-").length === 1) {
        request.ageMax = parseInt(ageRange.split(" ")[0]);
        request.ageMin = parseInt(ageRange.split(" ")[0]);
      } else {
        request.ageMax = parseInt(ageRange.split(" ")[0].split("-")[1]);
        request.ageMin = parseInt(ageRange.split(" ")[0].split("-")[0]);
        // console.log(request);
      }
    }
    // request.ageMax = 0;
    // request.ageMin = 0;
    if (selectedOption === "เด็กกลุ่มเสี่ยง")
      request.tableName = "GL_DEVELOPMENT_DAIM";
    else if (selectedOption === "เด็กปฐมวัย")
      request.tableName = "GL_DEVELOPMENT_DSPM";
    let response = await DevelopmentServiceClass.getDevelopment(request);
    console.log(response);
    let arr = Object.values(response.data.content[0]);
    let arr2 = response.data.history;
    setCurrentData(arr as ICurrentData[]);
    setCurrentSkills(arr2);
  };
  const saveDevelopmentCallBack = async (
    daterec: string,
    developmentcode: string,
    isUpdate: number
  ) => {
    const request: ISaveDevelopmentRequest = {
      childpid: allChildInfo[childIndex].PID,
      dateocc: dayjs(daterec).format("YYYY-MM-DD"),
      childbirth: dayjs(allChildInfo[childIndex].BIRTH).format("YYYY-MM-DD"),
      childcorrectedbirth: dayjs(allChildInfo[childIndex].BIRTH).format(
        "YYYY-MM-DD"
      ),
      devcode: developmentcode,
      isUpdate: isUpdate,
    };
    const req = await DevelopmentServiceClass.saveDevelopment(request);
  };
  const deleteDevelopmentCallBack = async (developmentCode: string) => {
    const request: IDeleteDevelopmentRequest = {
      childpid: allChildInfo[childIndex].PID,
      devcode: developmentCode,
    };
    const req = await DevelopmentServiceClass.deleteDevelopment(request);
  };
  const getDefaultAgeRange = (
    option: "เด็กปฐมวัย" | "เด็กกลุ่มเสี่ยง"
  ): string => {
    return option === "เด็กปฐมวัย" ? "0-1 เดือน" : "แรกเกิด";
  };

  const toggleOption = (option: "เด็กปฐมวัย" | "เด็กกลุ่มเสี่ยง") => {
    setSelectedOption(option);
    setAgeRange(getDefaultAgeRange(option));
  };

  const handleAgeRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAgeRange(e.target.value);
  };

  const onLoadWindow = async () => {
    setChildOption(allChildInfo[childIndex]?.NAME);
  };
  useEffect(() => {
    const getAllChildInfo = async () => {
      const response = await childServiceClass.getChildByID(
        session.data?.user.pid ?? "0000"
      );
      const childInfo = response.data.data;
      setAllChildInfo(childInfo);
      if (childInfo[0]?.ASPHYXIA === "1" || childInfo[0]?.BWEIGHT < 2500) {
        toggleOption("เด็กกลุ่มเสี่ยง");
      } else {
        toggleOption("เด็กปฐมวัย");
      }
    };
    getAllChildInfo();
  }, []);

  useEffect(() => {
    onLoadWindow();
    setDevelopmentInfo();
    console.log(currentData, currentSkills);
  }, [childOption, allChildInfo, ageRange]);
  return (
    <div className="justify-center items-center text-center relative z-0 flex flex-col p-12 bg-[#F8F8F8] gap-1 top-[64px] sm:top-[92px] w-full">
      <h1 className="font-bold text-[24px] sm:text-5xl mb-[4px] mt-5 sm:mb-[12px]">
        พัฒนาการของ
      </h1>
      <p className="text-[48px] sm:text-6xl font-bold text-[#D49D44] mb-6">
        คุณลูก
      </p>
      <p className="text-gray-500 text-sm sm:text-base mb-16 w-[50%]">
        เกณฑ์นี้เป็นเกณฑ์อ้างอิงเบื้องต้นสำหรับเด็กทั่วไปว่าสามารถทำอะไรได้ในเเต่ละช่วงวัย
        ซึ่งอาจมีทักษะบางอย่างที่เด็กปกติ
        จำนวนหนี่งทำได้เร็วหรือช้ากว่าเกณฑ์นี้เล็กน้อย ควรกระตึ้นตามคำแนะนำ
        หากมีความกังวลเรื่องพัฒนาการของลูกควรปรึกษาแพทย์หรือบุคลากรทางสาธารณสุข
      </p>

      <p className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-10">
        พัฒนาการตามช่วงวัย
      </p>
      <hr className=""></hr>

      {/*this part gotta be removed since child type depend on current child option: DAIM or DSPM
               if dong is DAIM --> toggleOption('เด็กกลุ่มเสี่ยง')
               */}
      <div className="flex justify-center mb-6 sm:mb-10">
        <button
          disabled={selectedOption === "เด็กกลุ่มเสี่ยง"}
          className={`relative px-4 py-2 rounded ${
            selectedOption === "เด็กปฐมวัย" ? "text-black" : "text-gray-400"
          }`}
          // onClick={() => toggleOption("เด็กปฐมวัย")}
        >
          เด็กปฐมวัย (DSPM)
          <hr
            className={`absolute left-0 right-0 mt-2 border-t-2 ${
              selectedOption === "เด็กปฐมวัย"
                ? "border-black"
                : "border-gray-400"
            }`}
          />
        </button>
        <button
          disabled={selectedOption === "เด็กปฐมวัย"}
          className={`relative px-4 py-2 rounded ${
            selectedOption === "เด็กกลุ่มเสี่ยง"
              ? "text-black"
              : "text-gray-400"
          }`}
          // onClick={() => toggleOption("เด็กกลุ่มเสี่ยง")}
        >
          เด็กกลุ่มเสี่ยง (DAIM)
          <hr
            className={`absolute left-0 right-0 mt-2 border-t-2 ${
              selectedOption === "เด็กกลุ่มเสี่ยง"
                ? "border-black"
                : "border-gray-400"
            }`}
          />
        </button>
      </div>

      <div className="mb-8 flex items-center">
        <label
          htmlFor="childOption"
          className="text-gray-700 mr-2 hidden sm:block"
        >
          ประเมินพัฒนาการของ
        </label>
        <select
          id="childOption"
          value={childOption}
          onChange={handleChildOptionChange}
          className="p-2 border border-gray-300 rounded w-48 mr-2"
        >
          {/*fetch all child options*/}
          {Object.values(allChildInfo)?.map((child, i) => (
            <option key={i} value={child.NAME}>
              {child.NAME}
            </option>
          ))}
        </select>
        <label htmlFor="ageRange" className="text-gray-700 mr-2">
          ในช่วง:
        </label>
        <select
          id="ageRange"
          value={ageRange}
          onChange={handleAgeRangeChange}
          className="p-2 border border-gray-300 rounded w-48"
        >
          {developmentData[selectedOption]?.map((data) => (
            <option key={data.age} value={data.age}>
              {data.age}
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

      <div className="grid grid-cols-2 gap-1 w-full h-full px-8 sm:px-16">
        <div className="col-span-2 flex items-center justify-center text-center item-center h-20 font-semibold bg-[#D49D44] rounded-md">
          พัฒนาการของเด็กช่วงอายุ {ageRange}
        </div>
        <div className="items-center justify-center text-center h-12 font-semibold bg-[#D49D44] rounded-md sm:flex hidden">
          พัฒนาการตามวัย
        </div>
        <div className="items-center justify-center text-center h-12 font-semibold bg-[#D49D44] rounded-md sm:flex hidden">
          วิธีส่งเสริมให้ลูกทำได้
        </div>

        {currentData?.map((row: ICurrentData, index: number) => {
          return (
            <>
              {/*md*/}
              <div className="grid grid-cols-3 gap-1 w-full">
                {/*fetch child information to check whether certain skill is previously checked and also prev date*/}
                <DevelopmentCheckCell
                  currentSkills={currentSkills}
                  prev_chosen={currentSkills?.some(
                    (item) => item.CODE === row.CODE
                  )}
                  prev_reserveDate={
                    dayjs(getMatchingSkills(row.CODE)?.DATE_OCCURRED).format(
                      "YYYY-MM-DD"
                    ) ?? "0000-00-00"
                  }
                  saveDevelopmentCallBack={saveDevelopmentCallBack}
                  devcode={row.CODE}
                  deleteDevelopmentCallBack={deleteDevelopmentCallBack}
                />
                <div className="relative h-40 w-full bg-gray-100 rounded-md overflow-hidden hidden sm:block">
                  <Image
                    src={`/img/developmentres/${selectedOption}/${ageRange}/${index}.png`}
                    alt="img"
                    layout="fill"
                    objectFit="contain"
                    className="rounded-md"
                  />
                </div>
                <div className="h-40 p-3 bg-gray-100 rounded-md text-left hidden sm:block">
                  {row.DESCRIPTION}
                </div>
              </div>
              <div className="h-40 p-3 bg-gray-100 rounded-md text-left hidden sm:block overflow-y-auto">
                {row.INFORMATION}
              </div>

              {/*sm*/}
              <Link
                href={`/development/${selectedOption}/${ageRange}/${index}`}
                passHref
                className="p-3 col-span-2 flex items-center text-left item-center h-16 bg-white rounded-md sm:hidden mt-2"
              >
                <div>
                  {row.DESCRIPTION}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-Yellow text-xl ml-2"
                  />
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
}
