"use client";
import { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import DateReserve from "./DateReserve";
import { useSession } from "next-auth/react";
import VaccineService from "@/libs/VaccineService/VaccineService";
import { MAPTYPETOCODE } from "@/app/user/vaccines/vaccineData/vaccineTypeToCode";
import { IGetVaccine } from "@/libs/VaccineService/VaccineServiceModel";

interface VaccineCellProps {
  childpid: string;
  vaccineType: string;
  colspan: number;
  color: string;
  prev_chosen: boolean;
  prev_location: string;
  prev_reserveDate: string;
}

export default function VaccineCell({
  childpid,
  vaccineType,
  colspan,
  color,
  prev_chosen,
  prev_location,
  prev_reserveDate,
}: VaccineCellProps) {
  const session = useSession();
  const [isClicked, setIsClicked] = useState(false);
  const [location, setLocation] = useState("");
  const [reserveDate, setReserveDate] = useState<Dayjs | null>(null);

  useEffect(() => {
    if (prev_chosen) {
      setIsClicked(true);
      setLocation(prev_location);
      setReserveDate(prev_reserveDate ? dayjs(prev_reserveDate) : null);
    }
  }, [prev_chosen, prev_location, prev_reserveDate]);
  console.log(reserveDate, vaccineType);
  const handleChange = async () => {
    const vaccineService = new VaccineService(session.data?.accessToken);
    if (prev_chosen) {
      const res = await vaccineService.updateChildVaccine({
        vaccineplace: location,
        childpid: childpid ?? "",
        vaccinetype: MAPTYPETOCODE?.[vaccineType] as string,
        vaccinated_date: reserveDate?.format("YYYY-MM-DD") ?? "0000-00-00",
        prev_dateserv: prev_reserveDate,
        // months: "2",
      });
      console.log(res);
    } else {
      const res = await vaccineService.createChildVaccine({
        vaccineplace: location,
        childpid: childpid ?? "",
        vaccinetype: MAPTYPETOCODE?.[vaccineType] as string,
        vaccinated_date: reserveDate?.format("YYYY-MM-DD") ?? "0000-00-00",
        // months: "2",
      });
      console.log(res);
    }
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
    console.log(childpid);
    // POST vaccinated information
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.stopPropagation();
    setLocation(e.target.value);
    handleChange();
    // PUT new location
  };

  const handleDateChange = (value: Dayjs) => {
    setReserveDate(value);
    handleChange();
    // PUT new date
  };

  return (
    <div
      className={`col-span-${colspan} p-4 text-center rounded-md cursor-pointer ${
        isClicked ? `bg-${color} font-bold` : "bg-Bg hover:bg-gray-100"
      }`}
      onClick={handleClick}
    >
      {isClicked ? (
        <div className="">
          <div className="mb-1">{vaccineType}</div>
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <DateReserve onDateChange={handleDateChange} />
          </div>
          <select
            id="location"
            value={location}
            onChange={handleLocationChange}
            onClick={(e) => e.stopPropagation()}
            required
            className="w-full border-0 border-b-2 border-gray-300 focus:border-Yellow placeholder:text-sm placeholder-gray-500 focus:ring-0 focus-visible:outline-none"
          >
            {/*get Location option from database*/}
            <option value="DDD">Dongy Hospital</option>
            <option value="PPP">Sira medical center</option>
            <option value="GGG">GearGear WHO cente</option>
          </select>
        </div>
      ) : (
        <div>{vaccineType}</div>
      )}
    </div>
  );
}
