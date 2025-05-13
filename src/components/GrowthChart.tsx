"use client";
import {
  MenuItem,
  Select,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useEffect, useState } from "react";
import CustomLineChart from "./CustomLineChart";

import {
  colors as colorsHFAB,
  keyToLabel as keyToLabelHFAB,
} from "@/app/growth/heightForAgeBoy";

import {
  colors as colorsWFAG,
  keyToLabel as keyToLabelWFAG,
} from "@/app/growth/weightForAgeGirl";

import {
  colors as colorsHCFAB,
  keyToLabel as keyToLabelHCFAB,
} from "@/app/growth/headCircumForAgeBoy";

import {
  colors as colorsWFHB,
  keyToLabel as keyToLabelWFHB,
} from "@/app/growth/weightForHeightBoy";

import GrowthService from "@/libs/GrowthService/GrowthService";
import dayjs, { Dayjs } from "dayjs";
import { useAuth } from "@/providers/AuthContext";
import { GrowthData } from "@/libs/GrowthService/GrowthServiceModel";
import { mergeDateAndTime } from "@mui/x-date-pickers/internals";

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

type SummaryData = {
  headCircumLabel?: string;
  heightLabel?: string;
  weightLabel?: string;
  weightHeightLabel?: string;
  measureAge?: string;
};

export default function GrowthChart({
  gender,
  growthData,
  onSummary
}: {
  gender: string;
  growthData: GrowthData[];
  onSummary?: (data: SummaryData) => void;
}) {
  const { user, accessToken } = useAuth();
  const [chartComparison, setChartComparison] = useState("height-age");
  const [isLoading, setIsLoading] = useState(true);
  const [chartData, setChartData] = useState<any[]>(Array(11).fill([]));
  const fetchGrowthData = async () => {
    try {
      let sex = "1";
      switch (gender) {
        case "male":
          sex = "1";
          break;
        case "female":
          sex = "2";
          break;
        default:
          sex = "1";
          break;
      }
      const service = new GrowthService(accessToken ?? undefined);
      let results: any[] = [];
      for (let i = 1; i <= 4; i++) {
        const res = await service.queryResult({
          sex: sex,
          typeGraph: i,
          minFirstGL: 0,
          maxFirstGL: i !== 2 ? 0 : 99,
          minSecondGL: i !== 2 ? 0 : 100,
          maxSecondGL: i !== 2 ? 999 : 119,
          minThirdGL: i !== 2 ? 0 : 120,
          maxThirdGL: i !== 2 ? 0 : 999,
        });
        results.push(res.data.data?.[0] ?? []);
      }
      setChartData(results);
    } catch (error) {
      console.error("Error fetching growth information:", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    setIsLoading(true);
    fetchGrowthData();
  }, [gender, growthData]);

  function getGrowthLabel(
    i: number,
    dataset: Dataset[],
    keyToLabel: { [key: string]: string }
  ): [string, string] {

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

    const latestGrowthData = [...growthData]
      .sort((a, b) => dayjs(a.measureDate).diff(dayjs(b.measureDate)))
      .at(-1);

    const birthDate = latestGrowthData?.birthDate;
    const measureDate = latestGrowthData?.measureDate;
    const weight = latestGrowthData?.weight;
    const height = latestGrowthData?.height;
    const headCircum = latestGrowthData?.headCircum;

    let XVALUE = (measureDate && birthDate)
      ? dayjs(measureDate).diff(dayjs(birthDate), "month")
      : 0;

    let YVALUE =
      i === 1
        ? parseFloat(headCircum as string)
        : i === 2
          ? parseFloat(height as string)
          : i === 3
            ? parseFloat(weight as string)
            : 0;

    if (i == 4) {
      XVALUE = parseFloat(height as string);
      YVALUE = parseFloat(weight as string);
    }

    const XVALUE_formatted = `${Math.floor(XVALUE / 12)} years ${XVALUE % 12} months`;


    const reference = intDataset.find((item) => item.XVALUE === XVALUE);

    // console.log("📊 Growth Data Debug Info:", i);
    // console.log("➡️ Birth Date:", birthDate);
    // console.log("➡️ Measure Date:", measureDate);
    // console.log("➡️ Weight:", weight);
    // console.log("➡️ Height:", height);
    // console.log("➡️ Head Circumference:", headCircum);
    // console.log("➡️ X Value (raw):", XVALUE);
    // console.log("➡️ Y Value:", YVALUE);
    // console.log("➡️ Formatted Age (XVALUE):", XVALUE_formatted);
    // console.log("➡️ Ref:", reference);
    // console.log("➡️ keyTolabel:", keyToLabel);

    if (!reference) return ["ไม่มีข้อมูลการเจริญเติบโตครับ", "-"];

    // Mode 1: Head Circumference — use P3, P97
    if ("P3" in reference && "P97" in reference) {
      const { P3, P97 } = reference;
      if (P3 !== undefined && YVALUE < P3) return [keyToLabel["P3"] ?? "น้อยกว่าเกณฑ์", XVALUE_formatted];
      if (P3 !== undefined && P97 !== undefined && YVALUE <= P97) return [keyToLabel["P97"] ?? "ค่อนข้างสูงกว่าเกณฑ์", XVALUE_formatted];
      if (P97 !== undefined && YVALUE > P97) return [keyToLabel["OVER"] ?? "สูงกว่าเกณฑ์", XVALUE_formatted];
    }

    // Mode 2: Standard thresholds
    if ("LESS5" in reference) {
      const { LESS5, LESS3, LESS1, MORE2, MORE4 } = reference;

      if (LESS5 !== undefined && YVALUE < LESS5) return [keyToLabel["LESS5"], XVALUE_formatted];
      if (LESS5 !== undefined && LESS3 !== undefined && YVALUE < LESS3) return [keyToLabel["LESS3"], XVALUE_formatted];
      if (LESS3 !== undefined && LESS1 !== undefined && YVALUE < LESS1) return [keyToLabel["LESS1"], XVALUE_formatted];
      if (LESS1 !== undefined && MORE2 !== undefined && YVALUE < MORE2) return [keyToLabel["MORE2"], XVALUE_formatted];
      if (MORE2 !== undefined && YVALUE >= MORE2) return [keyToLabel["MORE4"], XVALUE_formatted];
    }

    return ["ไม่มีข้อมูลการเจริญเติบโตครับ", "-"];
  }

  useEffect(() => {
    const [headCircumLabel, age1] = getGrowthLabel(1, chartData[0], keyToLabelHCFAB);
    const [heightLabel, age2] = getGrowthLabel(2, chartData[2], keyToLabelHFAB);
    const [weightLabel, age3] = getGrowthLabel(3, chartData[3], keyToLabelWFAG);
    const [weightHeightLabel, age4] = getGrowthLabel(4, chartData[1], keyToLabelWFHB);

    const summaryData: SummaryData = {
      headCircumLabel: headCircumLabel,
      heightLabel: heightLabel,
      weightLabel: weightLabel,
      weightHeightLabel: weightHeightLabel,
      measureAge: age1
    }

    if (onSummary) {
      onSummary(summaryData);
    }
  }, [growthData]);

  return (
    <>
      <div className="hidden lg:block pt-6">
        <ToggleButtonGroup
          color="primary"
          value={chartComparison}
          exclusive
          onChange={(e, newValue) => {
            if (newValue !== null) {
              setChartComparison(newValue);
            }
          }}
          sx={{
            "& .MuiToggleButton-root": {
              color: "gray",
              border: "none",
              borderRadius: "0",
              textTransform: "none",
              fontFamily: "inherit",
              fontWeight: "normal",
              fontSize: "1rem",
              padding: "4px 16px",
              borderBottom: "1px solid grey",
              "&.Mui-selected": {
                color: "black",
                background: "transparent",
                borderBottom: "1px solid black",
              },
            },
          }}
        >
          <ToggleButton value="height-age">ส่วนสูงเทียบอายุ</ToggleButton>
          <ToggleButton value="weight-age">น้ำหนักเทียบอายุ</ToggleButton>
          <ToggleButton value="weight-height">น้ำหนักเทียบส่วนสูง</ToggleButton>
          <ToggleButton value="headcircum-age">รอบศรีษะเทียบอายุ</ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="block lg:hidden pt-6">
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={chartComparison}
          label="gender"
          onChange={(e) => {
            setChartComparison(e.target.value);
          }}
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            textAlign: "center",
            fontFamily: "line-seed-sans",
            padding: 1.5,
            borderRadius: "0.75rem",
            "& .MuiInputBase-input": {
              padding: 0,
            },
          }}
          className="w-48"
        >
          <MenuItem value="height-age">ส่วนสูงเทียบอายุ</MenuItem>
          <MenuItem value="weight-age">น้ำหนักเทียบอายุ</MenuItem>
          <MenuItem value="weight-height">น้ำหนักเทียบส่วนสูง</MenuItem>
          <MenuItem value="headcircum-age">รอบศรีษะเทียบอายุ</MenuItem>
        </Select>
      </div>
      <div className="w-full sm:w-4/5 lg:w-2/3 pt-12">
        {isLoading ? (
          <p>...is loading</p>
        ) : (
          (() => {
            switch (chartComparison) {
              case "height-age":
                return (
                  <CustomLineChart
                    dataset={chartData[2]}
                    keyToLabel={keyToLabelHFAB}
                    colors={colorsHFAB}
                    ylabel="ส่วนสูง (ซม.)"
                    xlabel="อายุ (ปี)"
                    childDataset={growthData
                      .map(({ height, measureDate, birthDate }) => ({
                        YVALUE: parseFloat(height),
                        XVALUE:
                          measureDate && birthDate
                            ? dayjs(measureDate).diff(dayjs(birthDate), "month")
                            : 0,
                      }))
                      .sort((a, b) => a.XVALUE - b.XVALUE)}
                  />
                );
              case "weight-age":
                return (
                  <CustomLineChart
                    dataset={chartData[3]}
                    keyToLabel={keyToLabelWFAG}
                    colors={colorsWFAG}
                    ylabel="น้ำหนัก (กก.)"
                    xlabel="อายุ (ปี)"
                    childDataset={growthData
                      .map(({ weight, measureDate, birthDate }) => ({
                        YVALUE: parseFloat(weight),
                        XVALUE:
                          measureDate && birthDate
                            ? dayjs(measureDate).diff(dayjs(birthDate), "month")
                            : 0,
                      }))
                      .sort((a, b) => a.XVALUE - b.XVALUE)}
                  />
                );
              case "weight-height":
                return (
                  <CustomLineChart
                    dataset={chartData[1]}
                    keyToLabel={keyToLabelWFHB}
                    colors={colorsWFHB}
                    ylabel="น้ำหนัก (กก.)"
                    xlabel="ส่วนสูง (ซม.)"
                    childDataset={growthData
                      .map(({ height, weight }) => ({
                        YVALUE: parseFloat(weight),
                        XVALUE: parseFloat(height),
                      }))
                      .sort((a, b) => a.XVALUE - b.XVALUE)}
                  />
                );
              case "headcircum-age":
                return (
                  <CustomLineChart
                    dataset={chartData[0]}
                    keyToLabel={keyToLabelHCFAB}
                    colors={colorsHCFAB}
                    ylabel="รอบศรีษะ (ซม.)"
                    xlabel="อายุ (ปี)"
                    childDataset={growthData
                      .map(({ headCircum, measureDate, birthDate }) => ({
                        YVALUE: parseFloat(headCircum),
                        XVALUE:
                          measureDate && birthDate
                            ? dayjs(measureDate).diff(dayjs(birthDate), "month")
                            : 0,
                      }))
                      .sort((a, b) => a.XVALUE - b.XVALUE)}
                  />
                );
            }
          })()
        )}
      </div>
    </>
  );
}
