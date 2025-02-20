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
  colors as colorsHFAG,
  heightForAgeGirl,
  keyToLabel as keyToLabelHFAG,
} from "@/app/growth/heightForAgeGirl";

import {
  colors as colorsWFAG,
  keyToLabel as keyToLabelWFAG,
} from "@/app/growth/weightForAgeGirl";

import {
  colors as colorsHCFAB,
  keyToLabel as keyToLabelHCFAB,
} from "@/app/growth/headCircumForAgeBoy";

import {
  colors as colorsWFHG,
  keyToLabel as keyToLabelWFHG,
} from "@/app/growth/weightForHeightGirl";

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
  const colors: { [key: string]: string } = {
    P3: "#C36277",
    P15: "#D49D44",
    P85: "#718930",
    P97: "#486708",
    P99: "#AAAAAA",
  };
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
      for (let i = 0; i <= 10; i++) {
        const res = await service.queryResult({
          sex: sex,
          typeGraph: i,
          minFirstGL: 0,
          maxFirstGL: 0,
          minSecondGL: 0,
          maxSecondGL: 0,
          minThirdGL: 0,
          maxThirdGL: 999,
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
  console.log(childData);
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
                    // dataset={heightForAgeGirl}
                    dataset={chartData[3]}
                    keyToLabel={keyToLabelHFAG}
                    colors={colors}
                    ylabel="ส่วนสูง (ซม.)"
                    xlabel="อายุ (ปี)"
                    childDataset={childData
                      .map(({ height, measureDate, birthDate }) => ({
                        YValue: parseFloat(height),
                        XValue:
                          measureDate && birthDate
                            ? dayjs(measureDate).diff(dayjs(birthDate), "month")
                            : 0,
                      }))
                      .sort((a, b) => a.XValue - b.XValue)}
                  />
                );
              case "weight-age":
                return (
                  <CustomLineChart
                    dataset={chartData[4]}
                    keyToLabel={keyToLabelWFAG}
                    colors={colorsWFAG}
                    ylabel="น้ำหนัก (กก.)"
                    xlabel="อายุ (ปี)"
                    childDataset={childData
                      .map(({ weight, measureDate, birthDate }) => ({
                        YValue: parseFloat(weight),
                        XValue:
                          measureDate && birthDate
                            ? dayjs(measureDate).diff(dayjs(birthDate), "month")
                            : 0,
                      }))
                      .sort((a, b) => a.XValue - b.XValue)}
                  />
                );
              case "weight-height":
                return (
                  <CustomLineChart
                    dataset={chartData[2]}
                    keyToLabel={keyToLabelWFHG}
                    colors={colorsWFHG}
                    ylabel="น้ำหนัก (กก.)"
                    xlabel="ส่วนสูง (ซม.)"
                    childDataset={childData
                      .map(({ height, weight }) => ({
                        YValue: parseFloat(weight),
                        XValue: parseFloat(height),
                      }))
                      .sort((a, b) => a.XValue - b.XValue)}
                  />
                );
              case "headcircum-age":
                return (
                  <CustomLineChart
                    dataset={chartData[1]}
                    keyToLabel={keyToLabelHCFAB}
                    colors={colorsHCFAB}
                    ylabel="รอบศรีษะ (ซม.)"
                    xlabel="อายุ (ปี)"
                    childDataset={childData
                      .map(({ headCircum, measureDate, birthDate }) => ({
                        YValue: parseFloat(headCircum),
                        XValue:
                          measureDate && birthDate
                            ? dayjs(measureDate).diff(dayjs(birthDate), "month")
                            : 0,
                      }))
                      .sort((a, b) => a.XValue - b.XValue)}
                  />
                );
              default:
                return (
                  <CustomLineChart
                    dataset={[]}
                    keyToLabel={keyToLabelHFAG}
                    colors={colorsHFAG}
                    ylabel=""
                    xlabel=""
                    childDataset={[]}
                  />
                );
            }
          })()
        )}
      </div>
    </>
  );
}
