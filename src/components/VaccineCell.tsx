"use client";
import { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import DateReserve from "./DateReserve";
import VaccineService from "@/libs/VaccineService/VaccineService";
import {
  IGetVaccine,
  VaccineInterval,
  IPostChildVaccineClinicRequest,
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
  onChange
}: VaccineCellProps) {
  const { user, accessToken } = useAuth();
  const prev_chosen = vaccineHistory != null;
  const prev_location = prev_chosen ? vaccineHistory.HOSPITAL : "";
  const prev_reserveDate = prev_chosen ? vaccineHistory.DATE_SERV : new Date();

  const [isClicked, setIsClicked] = useState(false);
  const [location, setLocation] = useState("");
  const [reserveDate, setReserveDate] = useState<Dayjs | null>(
    prev_reserveDate ? dayjs(prev_reserveDate) : null
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
    if (onChange) onChange();
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

          {/* Hospital Dropdown */}
          <div className="relative mb-2" onClick={(e) => e.stopPropagation()}>
            {/* Selected Hospital */}
            <div
              onClick={() => setShowDropdown((prev) => !prev)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded cursor-pointer bg-white hover:bg-gray-50"
            >
              {location || "Select a hospital..."}
            </div>

            {/* Dropdown */}
            {showDropdown && (
              <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded shadow-md max-h-40 overflow-y-auto">
                <div className="p-2">
                  <input
                    type="text"
                    placeholder="Search hospital..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-2 py-1 border border-gray-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-Yellow"
                  />
                </div>

                {filteredHospitals.map((hospital) => (
                  <div
                    key={hospital}
                    onClick={() => {
                      setLocation(hospital);
                      setShowDropdown(false);
                      setSearchTerm("");
                    }}
                    className={`px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
                      location === hospital ? "bg-Yellow font-bold" : ""
                    }`}
                  >
                    {hospital}
                  </div>
                ))}

                {filteredHospitals.length === 0 && (
                  <div className="px-3 py-2 text-sm text-gray-500">
                    No results found
                  </div>
                )}

                {searchTerm && !hospitalList.includes(searchTerm) && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddHospital();
                    }}
                    className="w-full bg-Yellow text-white py-1 text-sm hover:bg-yellow-500"
                  >
                    Add "{searchTerm}"
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>{vaccine?.name ?? ""}</div>
      )}
    </div>
  );
}
