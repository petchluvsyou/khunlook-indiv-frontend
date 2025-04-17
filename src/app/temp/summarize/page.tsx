import ChildDetails from "@/components/ChildDetails";

interface Summary {
  age: string;
  movement: number;
  dexterity: number;
  comprehension: number;
  "language-use": number;
  "self-help": number;
  vaccine: {
    essential: string[];
    supplement: string[];
  };
}

type SummaryList = Summary[];

const childName: string = "ดอง";
const childAge: string = "3 ปี 4 เดือน";
const childBD: string = "12-12-2012";
const summaryData: SummaryList = [
  {
    age: "0-1 เดือน",
    movement: 3,
    dexterity: 4,
    comprehension: 2,
    "language-use": 3,
    "self-help": 2,
    vaccine: {
      essential: [
        "MMR",
        "DTP",
        "Hepatitis B",
        "MMR",
        "DTP",
        "Hepatitis B",
        "MMR",
        "DTP",
        "Hepatitis B",
        "MMR",
        "DTP",
        "Hepatitis B",
      ],
      supplement: ["Influenza", "Rotavirus"],
    },
  },
  {
    age: "2-3 เดือน",
    movement: 4,
    dexterity: 3,
    comprehension: 4,
    "language-use": 4,
    "self-help": 3,
    vaccine: {
      essential: ["Polio", "Varicella"],
      supplement: ["Hepatitis A"],
    },
  },
  {
    age: "4-5 เดือน",
    movement: 3,
    dexterity: 4,
    comprehension: 2,
    "language-use": 3,
    "self-help": 2,
    vaccine: {
      essential: ["MMR", "DTP", "Hepatitis B"],
      supplement: ["Influenza", "Rotavirus"],
    },
  },
  {
    age: "6-7 เดือน",
    movement: 4,
    dexterity: 3,
    comprehension: 4,
    "language-use": 4,
    "self-help": 3,
    vaccine: {
      essential: ["Polio", "Varicella"],
      supplement: ["Hepatitis A"],
    },
  },
  {
    age: "6-7 เดือน",
    movement: 4,
    dexterity: 3,
    comprehension: 4,
    "language-use": 4,
    "self-help": 3,
    vaccine: {
      essential: ["Polio", "Varicella"],
      supplement: ["Hepatitis A"],
    },
  },
];

export default async function Page() {
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
        <select
          id="vaccineOption"
          className="p-2 px-4 border border-gray-300 rounded-xl w-60"
        >
          <option key="required" value="required">
            ดอง
          </option>
        </select>
        <ChildDetails
          childName={childName}
          childAge={childAge}
          childBD={childBD}
          summaryData={summaryData}
        />
      </div>
    </div>
  );
}
