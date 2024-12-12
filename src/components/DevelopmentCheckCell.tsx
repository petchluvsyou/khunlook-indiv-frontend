"use client";
import { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import DateReserve from "./DateReserve";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface DevelopmentCheckCellProps {
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
  prev_chosen,
  prev_reserveDate,
  devcode,
  deleteDevelopmentCallBack,
  saveDevelopmentCallBack,
}: DevelopmentCheckCellProps) {
  const [isClicked, setIsClicked] = useState(false);
  const [reserveDate, setReserveDate] = useState<Dayjs | null>(null);

  useEffect(() => {
    if (prev_chosen) {
      setIsClicked(true);
      setReserveDate(dayjs(prev_reserveDate));
    }
  }, [prev_chosen, prev_reserveDate]);

  const handleClick = () => {
    if (isClicked) {
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
    setReserveDate(value);
    console.log(reserveDate);
    saveDevelopmentCallBack(
      value?.format("YYYY-MM-DD") ?? "0000-00-00",
      devcode,
      0
    );

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
          <DateReserve onDateChange={handleDateChange} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
