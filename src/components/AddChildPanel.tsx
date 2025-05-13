"use client";
import { useState } from "react";
import DateReserve from "./DateReserve";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ChildService from "@/libs/ChildService/ChildService";
import { useAuth } from "@/providers/AuthContext";
import dayjs, { Dayjs } from "dayjs";

export default function AddChildPanel({
  onClose,
  onUpdate,
}: {
  onClose: () => void;
  onUpdate?: () => void;
}) {
  const { accessToken, user } = useAuth();
  const [name, setName] = useState<string>("");
  const [sex, setSex] = useState<string>("M");
  const [birthDate, setBirthDate] = useState<Dayjs | null>(dayjs());
  const [wg, setWG] = useState<number>(38); //week of gestation (WG): อายุครรภ์
  const [birthWeight, setBirthWeight] = useState<string | null>(null);
  const [asphyxiaStatus, setAsphyxiaStatus] = useState<string>("unknown"); //Asphyxia: ภาวขาดออกซิเจนตอนคลอด

  // State for individual field errors
  const [nameError, setNameError] = useState<string>("");
  const [birthDateError, setBirthDateError] = useState<string>("");
  const [birthWeightError, setBirthWeightError] = useState<string>("");

  // State for handling server error
  const [serverMessage, setServerMessage] = useState<string>("");

  const validateFields = () => {
    let isValid = true;

    // Reset previous errors
    setNameError("");
    setBirthDateError("");
    setBirthWeightError("");
    setServerMessage("");

    // Name validation
    if (name.trim().length === 0) {
      setNameError("Name is required.");
      isValid = false;
    } else if (name.length > 100) {
      setNameError("Name must be less than 100 characters.");
      isValid = false;
    }

    // BirthDate validation
    if (!birthDate) {
      setBirthDateError("BirthDate is required");
      isValid = false;
    }

    // BirthWeight validation
    if (parseInt(birthWeight) < 0) {
      setBirthWeightError("BirthWeight must be positive number");
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = async () => {
    if (!validateFields) {
      return;
    }

    const childService = new ChildService(accessToken ?? undefined);
    const response = await childService.addChild({
      momcid: user?.PID ?? "1",
      childcid: Number(user?.ID) ?? 999,
      childpid: "C200",
      childhospcode: "APDEK",
      childname: name,
      datepickerchild: birthDate?.format("YYYY-MM-DD") ?? "0000-00-00",
      sexchild: "2",
      gaweek: 5,
      childfullname: "test",
      childbtime: birthDate?.format("HHmmss") ?? "00000000",
      childabo: "3",
      childrh: "2",
      childmemo: "dsajd",
      lowbtweigth: parseInt(birthWeight),
      birthAsphyxia: "2",
    });
    if (response.data.success) {
      console.log("add child success");
      if (onUpdate) onUpdate();
      onClose();
    }
  };

  const handleReset = () => {
    setName("");
    setSex("M");
    setBirthDate(null);
    setWG(38);
    setBirthWeight(null);
    setAsphyxiaStatus("unknown");
  };

  return (
    <div className="absolute z-50 flex flex-col items-start text-start justify-start w-72 bg-white rounded-lg shadow-md lg:max-w-screen-sm">
      <div className="p-4 w-full lg:p-6">
        <div className="flex justify-between">
          <h1 className="mb-3 text-2xl font-bold text-gray-900 lg:text-2xl dark:text-white">
            Add new child
          </h1>
          <div onClick={onClose}>
            <FontAwesomeIcon
              icon={faXmark}
              className="text-red-600 cursor-pointer hover:bg-gray-100 rounded-md"
              size="xl"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-900">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-gray-50 border border-gray-300 text-black lg:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {nameError && (
              <span className="text-red-500 text-sm">{nameError}</span>
            )}
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-900">
              Sex
            </label>
            <select
              id="sex"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
              required
              className="bg-gray-50 border border-gray-300 text-black lg:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="M">ชาย</option>
              <option value="F">หญิง</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-900">
              Birth Date
            </label>
            <div className="relative">
              <DateReserve
                onDateChange={(value: Dayjs) => setBirthDate(value)}
              />
            </div>
            {birthDateError && (
              <span className="text-red-500 text-sm">{birthDateError}</span>
            )}
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-900">
              Week of gestation
            </label>
            <select
              id="wg"
              value={wg}
              onChange={(e) => setWG(Number(e.target.value))}
              required
              className="bg-gray-50 border border-gray-300 text-black lg:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {Array.from({ length: 24 }, (_, index) => index + 20).map(
                (weight) => (
                  <option key={weight} value={weight}>
                    {weight} weeks
                  </option>
                )
              )}
            </select>
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-900">
              Birth Weight
            </label>
            <input
              type="number"
              name="birthWeight"
              value={birthWeight}
              onChange={(e) => {
                const val = e.target.value;
                if (val === "") {
                  setBirthWeight(null);
                } else if (!isNaN(Number(val)) && Number(val) >= 0) {
                  setBirthWeight(val.toString());
                }
              }}
              className="bg-gray-50 border border-gray-300 text-black lg:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {birthWeightError && (
              <span className="text-red-500 text-sm">{birthWeightError}</span>
            )}
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-900">
              Asphyxia Status
            </label>
            <select
              id="asphyxiaStatus"
              value={asphyxiaStatus}
              onChange={(e) => setAsphyxiaStatus(e.target.value)}
              required
              className="bg-gray-50 border border-gray-300 text-black lg:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="unknown">ไม่ทราบ</option>
              <option value="true">ขาด</option>
              <option value="false">ไม่ขาด</option>
            </select>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded-md"
            >
              ยืนยัน
            </button>
            <button
              onClick={handleReset}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold p-2 rounded-md"
            >
              ล้างค่า
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
