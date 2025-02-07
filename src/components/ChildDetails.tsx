import SummaryCard from "./SummaryCard";

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

type ChildDetailsProps = {
  childName: string;
  childAge: string;
  childBD: string;
  summaryData: Summary[];
};

export default function ChildDetails({
  childName,
  childAge,
  childBD,
  summaryData,
}: ChildDetailsProps) {
  return (
    <div className="bg-Bg">
      <div className="flex justify-center items-center text-center relative z-0 flex-col pt-8 w-full">
        <div className="mt-8 flex flex-col w-full text-left bg-white rounded-2xl py-10 px-4 shadow-lg">
          <p className="text-4xl text-Dark font-bold pb-2">น้อง{childName}</p>
          <p className="text-lg text-Dark">อายุ {childAge}</p>
          <p className="text-lg text-Dark"> วันเกิด {childBD}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-12">
          {summaryData.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center text-white text-sm"
            >
              <SummaryCard summary={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
