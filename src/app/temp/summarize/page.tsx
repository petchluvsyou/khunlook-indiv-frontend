"use client";

import ChildDetails from "@/components/ChildDetails";
import ChildService from "@/libs/ChildService/ChildService";
import { IChildData } from "@/libs/ChildService/ChildServiceModel";
import { useAuth } from "@/providers/AuthContext";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

// const summaryData: SummaryList = [
//   {
//     age: "0-1 เดือน",
//     movement: 3,
//     dexterity: 4,
//     comprehension: 2,
//     "language-use": 3,
//     "self-help": 2,
//     vaccine: {
//       essential: [
//         "MMR",
//         "DTP",
//         "Hepatitis B",
//         "MMR",
//         "DTP",
//         "Hepatitis B",
//         "MMR",
//         "DTP",
//         "Hepatitis B",
//         "MMR",
//         "DTP",
//         "Hepatitis B",
//       ],
//       supplement: ["Influenza", "Rotavirus"],
//     },
//   },
//   {
//     age: "2-3 เดือน",
//     movement: 4,
//     dexterity: 3,
//     comprehension: 4,
//     "language-use": 4,
//     "self-help": 3,
//     vaccine: {
//       essential: ["Polio", "Varicella"],
//       supplement: ["Hepatitis A"],
//     },
//   },
//   {
//     age: "4-5 เดือน",
//     movement: 3,
//     dexterity: 4,
//     comprehension: 2,
//     "language-use": 3,
//     "self-help": 2,
//     vaccine: {
//       essential: ["MMR", "DTP", "Hepatitis B"],
//       supplement: ["Influenza", "Rotavirus"],
//     },
//   },
//   {
//     age: "6-7 เดือน",
//     movement: 4,
//     dexterity: 3,
//     comprehension: 4,
//     "language-use": 4,
//     "self-help": 3,
//     vaccine: {
//       essential: ["Polio", "Varicella"],
//       supplement: ["Hepatitis A"],
//     },
//   },
//   {
//     age: "6-7 เดือน",
//     movement: 4,
//     dexterity: 3,
//     comprehension: 4,
//     "language-use": 4,
//     "self-help": 3,
//     vaccine: {
//       essential: ["Polio", "Varicella"],
//       supplement: ["Hepatitis A"],
//     },
//   },
// ];

const formatThaiDate = (isoDate: any) =>
  new Intl.DateTimeFormat("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(isoDate));

export default function Page() {
  const [selectedPID, setSelectedPID] = useState("");
  const [selectedChild, setSelectedChild] = useState<IChildData | null>(null);
  const [children, setChildren] = useState<IChildData[]>([]);
  const { user, accessToken } = useAuth();
  const [age, setAge] = useState("");

  useEffect(() => {
    if (selectedChild?.BIRTH) {
      setAge(calculateAgeFormatted(selectedChild.BIRTH));
    }
  }, [selectedChild]);

  function calculateAgeFormatted(birthTime: any) {
    const birthDate = new Date(birthTime);
    const now = new Date();

    console.log(now, birthDate);

    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    return `${years} ปี ${months} เดือน`;
  }

  useEffect(() => {
    async function fetchChildren() {
      if (accessToken && user?.PID) {
        const childService = new ChildService(accessToken);

        const childData = await childService.getChildByID(user.PID);
        console.log(Object.values(childData.data.data));
        setChildren(Object.values(childData.data.data) ?? []);
      }
    }
    fetchChildren();
  }, [user]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedName = event.target.value;
    const selectedChild = children.find((item) => item.NAME === selectedName);
    setSelectedPID(selectedChild ? selectedChild.PID : "");
    setSelectedChild(selectedChild ?? null);
    console.log(selectedChild);
  };

  return (
    <div className="bg-Bg">
      <div className="flex justify-center items-center text-center relative z-0 flex-col p-12 bg-Bg gap-1 top-16 lg:top-24 w-full">
        <h1 className="font-bold text-3xl lg:text-5xl text-Dark pb-1 mt-5 lg:pb-3">
          สรุปข้อมูลของ
        </h1>
        <p className="text-3xl lg:text-5xl font-bold text-Yellow mb-6">
          คุณลูก
        </p>
        <p className="text-2xl text-Dark font-bold mb-6 mt-8">
          เลือกคุณลูกเพื่อดูสรุปข้อมูลเลย!
        </p>

        {children.length > 0 ? (
          <select
            id="vaccineOption"
            className="p-2 px-4 border border-gray-300 rounded-xl w-60"
            onChange={handleSelectChange}
          >
            <option value="">เลือกคุณลูก</option>
            {children.map((item) => (
              <option key={item.PID} value={item.NAME}>
                {item.NAME}
              </option>
            ))}
          </select>
        ) : (
          <p className="text-gray-500">กำลังโหลดข้อมูล...</p>
        )}

        {selectedPID && (
          <ChildDetails
            childName={selectedChild?.NAME ?? ""}
            childAge={age}
            childBD={formatThaiDate(selectedChild?.BIRTH ?? "")}
            summaryData={[]}
          />
        )}
      </div>
    </div>
  );
}
