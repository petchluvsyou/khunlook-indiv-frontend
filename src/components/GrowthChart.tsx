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
import { useSession } from "next-auth/react";

interface ChildData {
  birthDate: Dayjs | null;
  gender: string;
  measureDate: Dayjs | null;
  weight: string;
  height: string;
  headCircum: string;
}

export default function GrowthChart({
  gender,
  childData,
}: {
  gender: string;
  childData: ChildData[];
}) {
  const session = useSession();
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
      const service = new GrowthService(session.data?.accessToken);
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
  }, [gender, childData]);

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
                    childDataset={childData
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
                    childDataset={childData
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
                    childDataset={childData
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
                    childDataset={childData
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
