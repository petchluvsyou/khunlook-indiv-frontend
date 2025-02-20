"use client";
import { LineChart, lineElementClasses } from "@mui/x-charts/LineChart";
import { useEffect, useState } from "react";

type Dataset = {
  XValue: number;
  P3: string;
  P15: string;
  P85: string;
  P97: string;
  P99: string;
};

type ChildDataset = {
  XValue: number;
  YValue: number;
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
  const intDataset = dataset.map((item) => ({
    ...item,
    P3: Number(item.P3),
    P15: Number(item.P15),
    P85: Number(item.P85),
    P97: Number(item.P97),
    P99: Number(item.P97),
  }));
  const transformedDataset = intDataset.map((item, idx) => ({
    ...item,
    XValue: `${Math.floor(idx / 12)} years ${idx % 12} months`,
  }));

  const transformedChildDataset = childDataset.map((item) => ({
    XValue: `${Math.floor(item.XValue / 12)} years ${item.XValue % 12} months`,
    YValue: item.YValue,
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
            dataKey: "XValue",
            scaleType: "point",
            label: xlabel,
            tickSize: 1,
          },
        ]}
        yAxis={[
          {
            valueFormatter: (value) => value.toString(),
            max:
              Math.max(...intDataset.map((item) => Number(item.P99)), 0) * 1.1,
            min:
              Math.min(...intDataset.map((item) => Number(item.P3)), 10000) *
              0.8,
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
          {
            id: "child",
            dataKey: "YValue",
            label: "ลูก",
            color: "#6b003e",
            showMark: true,
            area: false,
          },
        ]}
        dataset={combinedDataset}
        {...customize}
        grid={{ vertical: true, horizontal: true }}
      />
    </>
  );
}
