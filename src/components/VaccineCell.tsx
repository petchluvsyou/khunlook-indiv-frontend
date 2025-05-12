"use client";
import { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import DateReserve from "./DateReserve";
import VaccineService from "@/libs/VaccineService/VaccineService";
import {
  IGetVaccine,
  IHospital,
  VaccineInterval,
} from "@/libs/VaccineService/VaccineServiceModel";
import { useAuth } from "@/providers/AuthContext";

interface VaccineCellProps {
  childpid: string;
  vaccine: VaccineInterval;
  vaccineHistory: IGetVaccine;
  onChange?: () => void;
}

export default function VaccineCell({
  childpid,
  vaccine,
  vaccineHistory,
  onChange,

}: VaccineCellProps) {
  const { user, accessToken } = useAuth();
  const [prevChosen, setPrevChosen] = useState(false);
  const [hospitals, setHospitals] = useState<IHospital[]>();
  const [hospital, setHospital] = useState<IHospital | null>(null);
  const [isSaved, setIsSaved] = useState(true);
  const [hospitalSearch, setHospitalSearch] = useState<string>(
    vaccineHistory?.HOSPITAL ?? "",
  );
  const [isClicked, setIsClicked] = useState(false);
  const [reserveDate, setReserveDate] = useState<Dayjs>(
    vaccineHistory ? dayjs(vaccineHistory.DATE_SERV) : dayjs(),
  );
  useEffect(() => {
    if (vaccineHistory) {
      setPrevChosen(true);
      setIsClicked(true);
      setIsSaved(true);
      setHospital({
        id: vaccineHistory.HOSPITALCODE,
        text: vaccineHistory.HOSPITAL,
      });
      setHospitalSearch(vaccineHistory.HOSPITAL);
      setReserveDate(dayjs(vaccineHistory.DATE_SERV));
    }
  }, [vaccineHistory]);

  const handleChange = async (day: Dayjs, hosp?: IHospital) => {
    const vaccineService = new VaccineService(accessToken ?? undefined);
    try {
      if (prevChosen) {
        const res = await vaccineService.updateChildVaccine({
          vaccineplace: hosp?.id ?? "",
          childpid: childpid ?? "",
          vaccinetype: vaccine.CODE,
          vaccinated_date: day.format("YYYY-MM-DD"),
          prev_dateserv: dayjs(reserveDate).format("YYYY-MM-DD"),
        });
        console.log(res);
      } else {
        const res = await vaccineService.createChildVaccine({
          vaccineplace: hosp?.id ?? "",
          childpid: childpid ?? "",
          vaccinetype: vaccine.CODE,
          vaccinated_date: day.format("YYYY-MM-DD"),
        });
        setPrevChosen(true);
        console.log(res);
      }
      setIsSaved(true);
    } catch (error) {
      console.error("Error saving vaccine data", error);
    }
    if (onChange) onChange();
  };
  useEffect(() => {
    async function fetchHospital() {
      try {
        const vaccineService = new VaccineService(accessToken ?? "");
        const response = await vaccineService.getHospital({
          momcid: "",
          search: hospitalSearch,
        });
        if (response.data) {
          setHospitals(response.data.content);
        } else {
          console.error("Failed to fetch vaccine information");
        }
      } catch (error) {
        console.error("Error fetching vaccines:", error);
      }
    }
    fetchHospital();
  }, [hospitalSearch.length >= 3]);
  const handleClick = () => {
    if (!user) return;
    if (isClicked) {
      setReserveDate(dayjs());
    }
    setIsClicked(!isClicked);
    if (user && reserveDate) handleChange(reserveDate);
  };

  const handleDateChange = (value: Dayjs) => {
    setReserveDate(value);
    if (user) handleChange(value);
  };

  const handleAddHospital = (hosp: IHospital) => {
    if (!hospitalSearch.trim()) return;
    if (user) handleChange(reserveDate, hosp);
  };

  return (
    <div
      className={`col-span-1 p-4 border border-Grey text-center rounded-md ${
        user && "cursor-pointer"
      } ${isClicked ? `bg-Yellow font-bold` : "bg-Bg hover:bg-gray-100"}`}
      onClick={handleClick}
    >
      {isClicked ? (
        <div>
          <div className="mb-1">{vaccine.name ?? ""}</div>

          {/* Date Picker */}
          <div className="relative mb-3" onClick={(e) => e.stopPropagation()}>
            <DateReserve
              onDateChange={handleDateChange}
              initialDate={dayjs(prevChosen ? reserveDate : dayjs())}
            />
          </div>
          <div
            className="relative text-black"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              type="text"
              value={hospitalSearch}
              onChange={(e) => {
                const value = e.target.value;
                setIsSaved(false);
                setHospitalSearch(value);
              }}
              placeholder="Type hospital name"
              className="w-full border-0 border-b-2 border-gray-300 focus:border-yellow-400 placeholder:text-sm placeholder-gray-500 focus:ring-0 focus-visible:outline-none"
            />

            {hospitalSearch.length >= 3 && !isSaved && (
              <ul className="absolute z-10 bg-white border border-gray-300 w-full mt-1 max-h-48 overflow-y-auto shadow-md rounded">
                {hospitals
                  ?.filter((h) =>
                    h.text.toLowerCase().includes(hospitalSearch.toLowerCase()),
                  )
                  .map((h) => (
                    <li
                      key={h.id}
                      className="px-4 py-2 hover:bg-yellow-100 cursor-pointer text-left"
                      onClick={() => {
                        setHospital(h);
                        setHospitalSearch(h.text);
                        handleAddHospital(h);
                      }}
                    >
                      {h.text}
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>
      ) : (
        <div>{vaccine?.name ?? ""}</div>
      )}
    </div>
  );
}
