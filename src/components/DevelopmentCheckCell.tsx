"use client";
import { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import DateReserve from "./DateReserve";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { IChildData } from "@/libs/ChildService/ChildServiceModel";
import { Star } from "lucide-react";

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
interface DevelopmentCheckCellProps {
  currentSkills: ICurrentSkills[];
  prev_chosen: boolean;
  prev_reserveDate: string;
  devcode: string;
  saveDevelopmentCallBack: (
    reserveDate: string,
    devcode: string,
    isUpdate: number
  ) => Promise<void>;
  deleteDevelopmentCallBack: (devcode: string) => Promise<void>;
  childData: IChildData;
  ageMax: number;
}

export default function DevelopmentCheckCell({
  currentSkills,
  prev_chosen,
  prev_reserveDate,
  devcode,
  deleteDevelopmentCallBack,
  saveDevelopmentCallBack,
  childData,
  ageMax,
}: DevelopmentCheckCellProps) {
  const [isClicked, setIsClicked] = useState(false);
  const [reserveDate, setReserveDate] = useState<Dayjs | null>(dayjs());
  const [star, setStar] = useState(0);
  const getMatchingSkills = (code: string): any | undefined => {
    return currentSkills?.find((item: any) => item.CODE === code);
  };

  const calculateStar = (dateDone: Dayjs) => {
    const ageInMonths = calculateAgeDiff(dateDone);
    if (ageMax >= ageInMonths) setStar(5);
    else setStar(3);
  };

  const calculateAgeDiff = (dateDone: Dayjs) => {
    if (!childData) return;
    const birthDate = dayjs(childData.BIRTH);
    return dateDone.diff(birthDate, "month");
  };
  useEffect(() => {
    const f: boolean = currentSkills?.some(
      (item: any) => item.CODE === devcode
    );
    setIsClicked(f);
    setReserveDate(
      f ? dayjs(getMatchingSkills(devcode)?.DATE_OCCURRED) : dayjs()
    );
    calculateStar(dayjs(getMatchingSkills(devcode)?.DATE_OCCURRED));
  }, [currentSkills]);
  useEffect(() => {
    if (prev_chosen) {
      setIsClicked(true);
      setReserveDate(dayjs(prev_reserveDate));
      calculateStar(dayjs(prev_reserveDate));
    }
  }, [prev_chosen, prev_reserveDate]);
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (isClicked) {
      deleteDevelopmentCallBack(devcode);
    } else {
      saveDevelopmentCallBack(
        reserveDate?.format("YYYY-MM-DD") ?? "0000-00-00",
        devcode,
        0
      );
    }
    setIsClicked(!isClicked);
  };

  const handleDateChange = (value: Dayjs) => {
    if (isClicked) {
      if (reserveDate) {
        saveDevelopmentCallBack(
          value?.format("YYYY-MM-DD") ?? "0000-00-00",
          devcode,
          1
        );
      } else {
        saveDevelopmentCallBack(
          value?.format("YYYY-MM-DD") ?? "0000-00-00",
          devcode,
          0
        );
      }
    }
    setReserveDate(value);
  };
  return (
    <div
      className={`h-40 rounded-md p-2 flex-col justify-start items-center space-y-2 sm:block ${
        isClicked ? `bg-Yellow` : "bg-Bg hover:bg-gray-100"
      }`}
    >
      <input
        type="checkbox"
        checked={isClicked}
        onClick={(e) => handleClick(e)}
        className="w-6 h-6 cursor-pointer border-1 border-gray-300 rounded-md mb-2"
      />
      {!isClicked && (
        <div>
          ติ๊ก
          <FontAwesomeIcon
            icon={faCheck}
            className="text-Yellow text-xl mx-2"
          />
          เมื่อทำได้
        </div>
      )}
      {isClicked && (
        <div className="flex-col space-y-2">
          <div>
            <DateReserve
              onDateChange={handleDateChange}
              initialDate={reserveDate ?? undefined}
            />
          </div>
          <span>
            ทำได้เมื่ออายุ {Math.floor(calculateAgeDiff(reserveDate) / 12)} ปี {calculateAgeDiff(reserveDate) % 12} เดือน
          </span>
          <div className="flex justify-center items-center">
            {[...Array(5)].map((_, i) =>
              i < star ? (
                <Star key={i} className="text-yellow-500 fill-yellow-200" />
              ) : (
                <Star key={i} className="text-yellow-500" />
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}
