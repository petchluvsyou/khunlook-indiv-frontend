"use client";
import { LineChart, lineElementClasses } from "@mui/x-charts/LineChart";
import { useEffect, useState } from "react";

type Dataset = {
  XVALUE: number | undefined;
  aLESS5?: string | undefined;
  aLESS3?: string | undefined;
  aLESS1?: string | undefined;
  bMORE2?: string | undefined;
  bMORE4?: string | undefined;
  P3?: string | undefined;
  P97?: string | undefined;
  OVER?: string | undefined;
};

type ChildDataset = {
  XVALUE: number;
  YVALUE: number;
};

type KeyToLabel = { [key: string]: string };
type Colors = { [key: string]: string };

const stackStrategy = {
  area: true,
} as const;

const customize = {
  height: 360,
  margin: { top: 5 },
};

export default function CustomLineChart({
  dataset,
  childDataset,
  keyToLabel,
  colors,
  ylabel,
  xlabel,
}: {
  dataset: Dataset[];
  childDataset: ChildDataset[];
  keyToLabel: KeyToLabel;
  colors: Colors;
  ylabel: string;
  xlabel: string;
}) {
  const [showLegend, setShowLegend] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowLegend(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Convert Month to Year and Month format
  const intDataset =
    dataset?.map((item) => {
      if (item?.aLESS1) {
        return {
          XVALUE: parseFloat(item?.XVALUE?.toString() ?? ""),
          aLESS5: item.aLESS5 ? parseFloat(item.aLESS5) : undefined,
          aLESS3: item.aLESS3 ? parseFloat(item.aLESS3) : undefined,
          aLESS1: item.aLESS1 ? parseFloat(item.aLESS1) : undefined,
          bMORE2: item.bMORE2 ? parseFloat(item.bMORE2) : undefined,
          bMORE4: item.bMORE4 ? parseFloat(item.bMORE4) : undefined,
        };
      } else {
        return {
          XVALUE: parseFloat(item?.XVALUE?.toString() ?? ""),
          P3: item.P3 ? parseFloat(item.P3) : undefined,
          P97: item.P97 ? parseFloat(item.P97) : undefined,
        };
      }
    }) ?? [];
  console.log(intDataset);

  const transformedDataset =
    intDataset?.map((item, idx) => ({
      ...item,
      XVALUE: `${Math.floor(idx / 12)} years ${idx % 12} months`,
    })) ?? [];

  const transformedChildDataset = childDataset.map((item) => ({
    XVALUE: `${Math.floor(item.XVALUE / 12)} years ${item.XVALUE % 12} months`,
    YVALUE: item.YVALUE,
  }));
  // Conditional dataset selection
  const combinedDataset =
    xlabel === "อายุ (ปี)"
      ? [...transformedDataset, ...transformedChildDataset]
      : [...intDataset, ...childDataset];

  return (
    <>
      <LineChart
        sx={{
          [`& .${lineElementClasses.root}`]: {
            strokeWidth: 2,
          },
          "& .MuiAreaElement-series-child": {
            strokeWidth: 4,
          },
        }}
        xAxis={[
          {
            dataKey: "XVALUE",
            scaleType: "point",
            label: xlabel,
            tickSize: 1,
          },
        ]}
        yAxis={[
          {
            valueFormatter: (value) => value.toString(),
            max:
              Math.max(
                ...intDataset.map((item) => Number(item.bMORE4 ?? item.P97)),
                0
              ) * 1.1,
            min:
              Math.min(
                ...intDataset.map((item) =>
                  Number(item.aLESS5 ?? item.P3 ?? "0")
                ),
                10000
              ) * 0.8,
            label: ylabel,
            tickSize: 5,
          },
        ]}
        series={[
          ...Object.keys(keyToLabel).map((key) => ({
            dataKey: key,
            label: keyToLabel[key],
            color: colors[key],
            showMark: false,
            showGrid: true,
            ...stackStrategy,
          })),
        ]}
        dataset={combinedDataset}
        {...customize}
        grid={{ vertical: true, horizontal: true }}
      />
    </>
  );
}
