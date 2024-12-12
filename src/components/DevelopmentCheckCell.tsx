'use client'
import { useState, useEffect } from "react";
import dayjs, { Dayjs } from 'dayjs';
import DateReserve from "./DateReserve";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck } from '@fortawesome/free-solid-svg-icons';

interface DevelopmentCheckCellProps {
     prev_chosen: boolean;
     prev_reserveDate: string;
}

export default function DevelopmentCheckCell({
     prev_chosen,
     prev_reserveDate,
}: DevelopmentCheckCellProps) {
     const [isClicked, setIsClicked] = useState(false);
     const [reserveDate, setReserveDate] = useState<Dayjs | null>(null);

     useEffect(() => {
          if (prev_chosen) {
               setIsClicked(true);
               setReserveDate(prev_reserveDate ? dayjs(prev_reserveDate) : null);
          }
     }, [prev_chosen, prev_reserveDate]);


     const handleClick = () => {
          setIsClicked(!isClicked);
          // POST development information 
     };

     const handleDateChange = (value: Dayjs) => {
          setReserveDate(value);
          // PUT new date
     }

     return (
          <div
               className={`h-40 rounded-md px-4 py-12 text-center items-center hidden sm:block ${isClicked
                    ? `bg-Yellow`
                    : "bg-Bg hover:bg-gray-100"
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
                    {isClicked ? "" : <div>ติ้ก<FontAwesomeIcon icon={faCheck} className="text-Yellow text-xl mx-2"/>เมื่อทำได้</div>}
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
};


