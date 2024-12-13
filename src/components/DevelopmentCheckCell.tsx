"use client";
import { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import DateReserve from "./DateReserve";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

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
}

export default function DevelopmentCheckCell({
  currentSkills,
  prev_chosen,
  prev_reserveDate,
  devcode,
  deleteDevelopmentCallBack,
  saveDevelopmentCallBack,
}: DevelopmentCheckCellProps) {
  const [isClicked, setIsClicked] = useState(false);
  const [reserveDate, setReserveDate] = useState<Dayjs | null>(null);
  const getMatchingSkills = (code: string): any | undefined => {
    return currentSkills?.find((item: any) => item.CODE === code);
  };
  useEffect(() => {
    const f: boolean = currentSkills?.some(
      (item: any) => item.CODE === devcode
    );
    setIsClicked(f);
    setReserveDate(f ? dayjs(getMatchingSkills(devcode)?.DATE_OCCURRED) : null);
  }, [currentSkills]);
  useEffect(() => {
    if (prev_chosen) {
      setIsClicked(true);
      setReserveDate(dayjs(prev_reserveDate));
    }
  }, [prev_chosen, prev_reserveDate]);
  const handleClick = () => {
    if (isClicked) {
      setReserveDate(null);
      deleteDevelopmentCallBack(devcode);
    }
    // else {
    //   saveDevelopmentCallBack(
    //     reserveDate?.format("YYYY-MM-DD") ?? "0000-00-00",
    //     devcode,
    //     1
    //   );
    // }
    setIsClicked(!isClicked);

    // POST development information
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
    // PUT new date
  };

  return (
    <div
      className={`h-40 rounded-md px-4 py-12 text-center items-center hidden sm:block ${
        isClicked ? `bg-Yellow` : "bg-Bg hover:bg-gray-100"
      }`}
      onClick={handleClick}
    >
      <input
        type="checkbox"
        checked={isClicked}
        onChange={handleClick}
        className="w-6 h-6 cursor-pointer border-1 border-gray-300 rounded-md mb-2"
      />
      <span className="font-medium">
        {isClicked ? (
          ""
        ) : (
          <div>
            ติ้ก
            <FontAwesomeIcon
              icon={faCheck}
              className="text-Yellow text-xl mx-2"
            />
            เมื่อทำได้
          </div>
        )}
      </span>
      {isClicked ? (
        <div className="relative" onClick={(e) => e.stopPropagation()}>
          <DateReserve
            onDateChange={handleDateChange}
            initialDate={reserveDate}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
