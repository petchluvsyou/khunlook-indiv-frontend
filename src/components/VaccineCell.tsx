"use client";
import { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import DateReserve from "./DateReserve";
import { useSession } from "next-auth/react";
import VaccineService from "@/libs/VaccineService/VaccineService";
import {
  IGetVaccine,
  VaccineInterval,
} from "@/libs/VaccineService/VaccineServiceModel";

interface VaccineCellProps {
  childpid: string;
  vaccine: VaccineInterval;
  vaccineHistory: IGetVaccine;
}

export default function VaccineCell({
  childpid,
  vaccine,
  vaccineHistory,
}: VaccineCellProps) {
  const session = useSession();
  const prev_chosen = vaccineHistory != null;
  const prev_location = prev_chosen ? vaccineHistory.HOSPITAL : "";
  const prev_reserveDate = prev_chosen ? vaccineHistory.DATE_SERV : new Date();
  const [isClicked, setIsClicked] = useState(false);
  const [location, setLocation] = useState("");
  const [reserveDate, setReserveDate] = useState<Dayjs | null>(
    prev_reserveDate ? dayjs(prev_reserveDate) : null
  );

  useEffect(() => {
    if (prev_chosen) {
      setIsClicked(true);
      setLocation(prev_location);
      setReserveDate(prev_reserveDate ? dayjs(prev_reserveDate) : null);
    }
  }, [prev_chosen, prev_location, prev_reserveDate]);
  const handleChange = async (day: Dayjs) => {
    const vaccineService = new VaccineService(session.data?.accessToken);
    if (prev_chosen) {
      const res = await vaccineService.updateChildVaccine({
        vaccineplace: location,
        childpid: childpid ?? "",
        vaccinetype: vaccine.CODE,
        vaccinated_date: day.format("YYYY-MM-DD") ?? "2020-10-10",
        prev_dateserv:
          dayjs(prev_reserveDate).format("YYYY-MM-DD") ?? "2020-10-10",
        // months: "2",
      });
      console.log(res);
    } else {
      const res = await vaccineService.createChildVaccine({
        vaccineplace: location,
        childpid: childpid ?? "",
        vaccinetype: vaccine.CODE,
        vaccinated_date: day.format("YYYY-MM-DD") ?? "2020-10-10",
        // months: "2",
      });
      console.log(res);
    }
  };

  const handleClick = () => {
    if (!session.data) return;
    if (isClicked) {
      setReserveDate(null);
    }

    setIsClicked(!isClicked);
    if (session) handleChange(reserveDate ?? new Dayjs());
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.stopPropagation();
    setLocation(e.target.value);
  };

  const handleDateChange = (value: Dayjs) => {
    setReserveDate(value);
    if (session) handleChange(value);
  };
  return (
    <div
      className={`col-span-${1} p-4 border border-Grey text-center rounded-md ${
        session.data && "cursor-pointer"
      } ${isClicked ? `bg-Yellow font-bold` : "bg-Bg hover:bg-gray-100"}`}
      onClick={handleClick}
    >
      {isClicked ? (
        <div className="">
          <div className="mb-1">{vaccine.name ?? ""}</div>
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <DateReserve
              onDateChange={handleDateChange}
              initialDate={dayjs(prev_chosen ? reserveDate : dayjs())}
            />
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
        <div>{vaccine?.name ?? ""}</div>
      )}
    </div>
  );
}
