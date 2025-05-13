"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faSyringe } from "@fortawesome/free-solid-svg-icons";
import VaccineList from "./summary/VaccineList";
import { Summary } from "./ChildDetails";
import ProgressBar from "./summary/ProgressBar";

export default function SummaryCard({ summary }: { summary: Summary }) {
  return (
    <div className="relative flex flex-col space-y-3 p-4 bg-Yellow rounded-xl">
      <div className="absolute -top-3 -left-3 bg-white text-black text-sm font-bold px-3 py-1 rounded-full shadow-md">
        {summary.maxAge === summary.minAge
          ? summary.maxAge + " เดือน"
          : `${summary.minAge}-${summary.maxAge} เดือน`}
      </div>

      <div className="flex gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 p-2 rounded-full cursor-pointer transition-all duration-300 w-36 bg-white text-Yellow shadow-md">
            <FontAwesomeIcon icon={faStar} className="text-Yellow" size="lg" />
            <span className="text-sm font-medium">Development</span>
          </div>
          <div className="flex flex-col space-y-2 w-64 bg-white rounded-md p-4 min-h-80">
            {summary.development.description.length > 0 ? (
              summary.development.description.map((e, i) => (
                <ProgressBar
                  key={e}
                  name={e}
                  score={summary.development.value[i]}
                />
              ))
            ) : (
              <ProgressBar name="No Data!" score={5} />
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 p-2 rounded-full cursor-pointer transition-all duration-300 w-28 bg-white text-Yellow shadow-md">
            <FontAwesomeIcon
              icon={faSyringe}
              className="text-Yellow"
              size="lg"
            />
            <span className="text-sm font-medium">Vaccine</span>
          </div>
          <div className="flex flex-col space-y-2 w-64 bg-white rounded-md p-4 h-full">
            <VaccineList
              name="วัคซีนจำเป็นที่ได้รับแล้ว"
              vaccines={summary.vaccine.essential}
            />
            <VaccineList
              name="วัคซีนเสริมที่ได้รับแล้ว"
              vaccines={summary.vaccine.supplement}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
