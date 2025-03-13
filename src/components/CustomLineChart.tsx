"use client";
import { LineChart, lineElementClasses } from "@mui/x-charts/LineChart";
import { useEffect, useState } from "react";

type Dataset = {
  XVALUE: number | undefined;
  LESS5?: string | undefined;
  LESS3?: string | undefined;
  LESS1?: string | undefined;
  MORE2?: string | undefined;
  MORE4?: string | undefined;
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
      if (item?.LESS1) {
        return {
          XVALUE: parseFloat(item?.XVALUE?.toString() ?? ""),
          LESS5: item.LESS5 ? parseFloat(item.LESS5) : undefined,
          LESS3: item.LESS3 ? parseFloat(item.LESS3) : undefined,
          LESS1: item.LESS1 ? parseFloat(item.LESS1) : undefined,
          MORE2: item.MORE2 ? parseFloat(item.MORE2) : undefined,
          MORE4: item.MORE4 ? parseFloat(item.MORE4) : undefined,
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
                ...intDataset.map((item) => Number(item.MORE4 ?? item.P97)),
                0
              ) * 1.1,
            min:
              Math.min(
                ...intDataset.map((item) =>
                  Number(item.LESS5 ?? item.P3 ?? "0")
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
