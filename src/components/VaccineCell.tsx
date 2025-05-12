"use client";
import { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import DateReserve from "./DateReserve";
import { useSession } from "next-auth/react";
import VaccineService from "@/libs/VaccineService/VaccineService";
import {
  IGetVaccine,
  VaccineInterval,
  IPostHospital,
  IGetHospital,
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

  const [searchTerm, setSearchTerm] = useState("");
  const [hospitalList, setHospitalList] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredHospitals = hospitalList.filter((hospital) =>
    hospital.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log("Location:", location);
  useEffect(() => {
    if (prev_chosen) {
      setIsClicked(true);
      setLocation(prev_location);
      setReserveDate(prev_reserveDate ? dayjs(prev_reserveDate) : null);
    }
  }, [prev_chosen, prev_location, prev_reserveDate]);

  useEffect(() => {
    const fetchHospitalList = async () => {
      const momcid = session.data?.user?.id;
      if (!session.data?.accessToken || !momcid) return;

      const vaccineService = new VaccineService(session.data.accessToken);
      console.log(session.data.accessToken);
      try {
        const hospitals = await vaccineService.getHospital({
          momcid: momcid,
          search: "",
        });
        console.log(hospitals);

        const names = Object.values(hospitals.data.content).map((h) => h.text);
        console.log(names);
        setHospitalList(names);
      } catch (error) {
        console.error("Failed to fetch hospital list:", error);
      }
    };
    fetchHospitalList();
  }, [session.data?.accessToken, session.data?.user?.id]);

  const handleChange = async (day: Dayjs) => {
    const vaccineService = new VaccineService(session.data?.accessToken);
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
    if (!session.data) return;
    if (isClicked) {
      setReserveDate(null);
    }
    setIsClicked(!isClicked);
    if (session && reserveDate) handleChange(reserveDate);
  };

  const handleDateChange = (value: Dayjs) => {
    setReserveDate(value);
    if (session) handleChange(value);
  };

  const saveClinicToDatabase = async (clinicname: string) => {
    const momcid = session.data?.user?.id;
    if (!momcid) {
      console.warn("momcid is missing from session.");
      return;
    }

    const payload: IPostHospital = {
      momcid,
      clinicname,
    };

    const vaccineService = new VaccineService(session.data?.accessToken);
    try {
      await vaccineService.postHospital({
        momcid: session.data?.user.id,
        clinicname: location,
      });
      // Refresh hospital list after adding new one
      const hospitals: IGetHospital[] = await vaccineService.getHospital();
      const names = hospitals.map((h) => h.clinicname);
      setHospitalList(names);
    } catch (error) {
      console.error("Failed to save clinic:", error);
    }
  };

  const handleAddHospital = async () => {
    if (!searchTerm.trim()) return;
    if (!hospitalList.includes(searchTerm)) {
      setHospitalList((prev) => [...prev, searchTerm]);
      setLocation(searchTerm);
      setSearchTerm("");
      setShowDropdown(false);
      await saveClinicToDatabase(searchTerm);
    }
  };

  return (
    <div
      className={`col-span-1 p-4 border border-Grey text-center rounded-md ${
        session.data && "cursor-pointer"
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
            <div
              onClick={() => setShowDropdown((prev) => !prev)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded cursor-pointer bg-white hover:bg-gray-50"
            >
              {location || "Select a hospital..."}
            </div>

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
                    onClick={async () => {
                      setLocation(hospital);
                      setShowDropdown(false);
                      setSearchTerm("");
                      await saveClinicToDatabase(hospital);
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
