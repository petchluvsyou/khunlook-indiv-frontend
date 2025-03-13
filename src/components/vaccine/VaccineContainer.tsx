import { useState } from "react";

// Age Labels mapped to months
const AGELABELS = [
  { label: "แรกเกิด", months: 0 },
  { label: "2 เดือน", months: 2 },
  { label: "4 เดือน", months: 4 },
  { label: "6 เดือน", months: 6 },
  { label: "9 เดือน", months: 9 },
  { label: "12 เดือน", months: 12 },
  { label: "18 เดือน", months: 18 },
  { label: "2 ปี", months: 24 },
  { label: "2½ ปี", months: 30 },
  { label: "4-6 ปี", months: 48 },
  { label: "11-15 ปี", months: 132 },
];

// Define the vaccine and its applicable age ranges
const VACCINES = [
  {
    name: "Hepatitis B",
    intervals: [
      { startAge: 0, endAge: 1 },
      { startAge: 12, endAge: 18 },
    ],
  },
  {
    name: "DTaP",
    intervals: [
      { startAge: 2, endAge: 4 },
      { startAge: 4, endAge: 6 },
      { startAge: 6, endAge: 18 },
    ],
  },
];

export default function Calendar() {
  const [ageLabels, setAgeLabels] = useState(AGELABELS.slice(0, 6));

  function toggleAgeLabels() {
    setAgeLabels(
      ageLabels.length === 6 ? AGELABELS.slice(6, 12) : AGELABELS.slice(0, 6)
    );
  }

  function mergeIntervals(intervals: { startAge: number; endAge: number }[]) {
    const merged: { startAge: number; endAge: number }[] = [];
    intervals
      .sort((a, b) => a.startAge - b.startAge)
      .forEach((interval) => {
        const last = merged[merged.length - 1];
        if (!last || last.endAge < interval.startAge) {
          merged.push(interval);
        } else {
          last.endAge = Math.max(last.endAge, interval.endAge);
        }
      });
    return merged;
  }

  function generateVaccineTimeline(vaccine: any) {
    const mergedIntervals = mergeIntervals(vaccine.intervals);

    let previousBoolean = false;
    let count = 0;
    const result: Array<[boolean, number]> = [];

    ageLabels.forEach((ageLabel) => {
      const isRequired = mergedIntervals.some(
        (interval) =>
          interval.startAge <= ageLabel.months &&
          interval.endAge >= ageLabel.months
      );

      if (isRequired !== previousBoolean) {
        if (count > 0) {
          result.push([previousBoolean, count]);
        }
        previousBoolean = isRequired;
        count = 1;
      } else {
        count++;
      }
    });

    if (count > 0) {
      result.push([previousBoolean, count]);
    }
    return result;
  }

  interface GridBoxProp {
    description: string;
    size?: number;
  }
  VACCINES.map((v) => {
    console.log(v, generateVaccineTimeline(v));
  });
  function GridBox({ description, size }: GridBoxProp) {
    const width = size
      ? (100 * size) / ageLabels.length
      : 100 / ageLabels.length;

    return (
      <div
        className="flex flex-row items-center justify-center border p-2 min-w-32"
        style={{ width: `${width}%` }}
      >
        {description}
      </div>
    );
  }

  return (
    <div className="w-full p-4">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row">
          <GridBox description="Age" />
          {ageLabels.map((a) => (
            <GridBox key={a.months} description={a.label} />
          ))}
        </div>

        {VACCINES.map((v) => (
          <div key={v.name} className="flex flex-row">
            <GridBox description={v.name} />
            {generateVaccineTimeline(v).map((timeline, index) => (
              <GridBox
                key={index}
                description={timeline[0].toString()}
                size={timeline[1]}
              />
            ))}
          </div>
        ))}
      </div>

      <button
        onClick={toggleAgeLabels}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        Change Age
      </button>
    </div>
  );
}
