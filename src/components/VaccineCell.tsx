"use client";
import { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import DateReserve from "./DateReserve";
import VaccineService from "@/libs/VaccineService/VaccineService";
import {
  IGetVaccine,
  IHospital,
  VaccineInterval,
  IPostChildVaccineClinicRequest,
} from "@/libs/VaccineService/VaccineServiceModel";
import { useAuth } from "@/providers/AuthContext";

interface VaccineCellProps {
  childpid: string;
  vaccine: VaccineInterval;
  vaccineHistory: IGetVaccine;
  setHospitalSearch: (search: string) => void;
  hospital: IHospital[];
}

export default function VaccineCell({
  childpid,
  vaccine,
  hospital,
  vaccineHistory,
  setHospitalSearch,
}: VaccineCellProps) {
  const { user, accessToken } = useAuth();
  const prev_chosen = vaccineHistory != null;
  const prev_location = prev_chosen ? vaccineHistory.HOSPITAL : "";
  const prev_reserveDate = prev_chosen ? vaccineHistory.DATE_SERV : new Date();

  const [isClicked, setIsClicked] = useState(false);
  const [location, setLocation] = useState("");
  const [reserveDate, setReserveDate] = useState<Dayjs | null>(
    prev_reserveDate ? dayjs(prev_reserveDate) : null,
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [hospitalList, setHospitalList] = useState([
    "Dongy Hospital",
    "Sira medical center",
    "GearGear WHO cente",
  ]);
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredHospitals = hospitalList.filter((hospital) =>
    hospital.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (prev_chosen) {
      setIsClicked(true);
      setLocation(prev_location);
      setReserveDate(prev_reserveDate ? dayjs(prev_reserveDate) : null);
    }
  }, [prev_chosen, prev_location, prev_reserveDate]);

  const handleChange = async (day: Dayjs) => {
    const vaccineService = new VaccineService(accessToken ?? undefined);
    if (prev_chosen) {
      const res = await vaccineService.updateChildVaccine({
        vaccineplace: location,
        childpid: childpid ?? "",
        vaccinetype: vaccine.CODE,
        vaccinated_date: day.format("YYYY-MM-DD"),
        prev_dateserv: dayjs(prev_reserveDate).format("YYYY-MM-DD"),
      });
      console.log(res);
    } else {
      const res = await vaccineService.createChildVaccine({
        vaccineplace: location,
        childpid: childpid ?? "",
        vaccinetype: vaccine.CODE,
        vaccinated_date: day.format("YYYY-MM-DD"),
      });
      console.log(res);
    }
  };

  const handleClick = () => {
    if (!user) return;
    if (isClicked) {
      setReserveDate(null);
    }
    setIsClicked(!isClicked);
    if (user && reserveDate) handleChange(reserveDate);
  };

  const handleDateChange = (value: Dayjs) => {
    setReserveDate(value);
    if (user) handleChange(value);
  };

  const handleAddHospital = () => {
    if (!searchTerm.trim()) return;
    if (!hospitalList.includes(searchTerm)) {
      setHospitalList((prev) => [...prev, searchTerm]);
      setLocation(searchTerm);
      setSearchTerm("");
      setShowDropdown(false);
    }
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
              initialDate={dayjs(prev_chosen ? reserveDate : dayjs())}
            />
          </div>
          <div
            className="relative text-black"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              type="text"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
                setHospitalSearch(e.target.value);
              }}
              placeholder="Type hospital name"
              className="w-full border-0 border-b-2 border-gray-300 focus:border-Yellow placeholder:text-sm placeholder-gray-500 focus:ring-0 focus-visible:outline-none"
            />
            {location.length >= 3 && (
              <ul className="absolute z-10 bg-white border border-gray-300 w-full mt-1 max-h-48 overflow-y-auto shadow-md rounded">
                {hospital.map((h) => (
                  <li
                    key={h.id}
                    className="px-4 py-2 hover:bg-yellow-100 cursor-pointer text-left"
                    onClick={() => {
                      setLocation(h.text);
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
