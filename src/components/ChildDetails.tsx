import SummaryCard from "./SummaryCard";

export interface Summary {
  minAge: number;
  maxAge: number;
  movement: number;
  dexterity: number;
  comprehension: number;
  vaccine: {
    essential: string[];
    supplement: string[];
  };
  development: {
    description: string[];
    value: number[];
  };
}

type ChildDetailsProps = {
  childName: string;
  childAge: string;
  childBD: string;
  summary: Summary[];
};

export default function ChildDetails({
  childName,
  childAge,
  childBD,
  summary,
}: ChildDetailsProps) {
  console.log(summary);
  return (
    <div className="bg-Bg w-screen px-12">
      <div className="flex justify-center items-center text-center relative z-0 flex-col pt-8 w-full">
        <div className="mt-8 flex flex-col w-full text-left bg-white rounded-2xl py-10 px-4 shadow-lg">
          <p className="text-4xl text-Dark font-bold pb-2">น้อง {childName}</p>
          <p className="text-lg text-Dark">อายุ {childAge}</p>
          <p className="text-lg text-Dark"> วันเกิด {childBD}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-12">
          {summary.map((item, index) => (
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
