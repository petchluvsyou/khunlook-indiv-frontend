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
        <div className="flex flex-col">
          <p className="text-2xl text-Dark font-bold pb-2">น้อง{childName}</p>
          <p className="text-lg text-Dark">อายุ {childAge}</p>
          <p className="text-lg text-Dark"> วันเกิด {childBD}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 pt-12">
          {summaryData.map((item, index) => (
            <div
              key={index}
              className="w-[300px] h-[300px] bg-black flex items-center justify-center text-white text-sm"
            >
              {item.age}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
