import { ToggleButtonGroup } from "@mui/material";
import { ToggleButton } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { useState } from "react";
import CustomLineChart from "./CustomLineChart";

import {
    heightForAgeGirl,
    keyToLabel as keyToLabelHFAG,
    colors as colorsHFAG,
  } from "@/app/growth/heightForAgeGirl";

import {
    heightForAgeBoy,
    keyToLabel as keyToLabelHFAB,
    colors as colorsHFAB,
  } from "@/app/growth/heightForAgeBoy";

export default function GrowthChart({gender}:{gender:string}){

    const [chartComparison, setChartComparison] = useState('height-age')

    return (
        <>
        <div className="hidden lg:block pt-6">
            <ToggleButtonGroup
                color="primary"
                value={chartComparison}
                exclusive
                onChange={(e, newValue) => {if (newValue !== null) {
                    setChartComparison(newValue);
                }}}
                sx={{
                    '& .MuiToggleButton-root': {
                        color: 'gray',
                        border: 'none',
                        borderRadius: '0',
                        textTransform: 'none',
                        fontFamily: 'inherit',
                        fontWeight: 'normal',
                        fontSize: '1rem',
                        padding: '4px 16px',
                        borderBottom: '1px solid grey',
                        '&.Mui-selected': {
                            color: 'black',
                            background: 'transparent',
                            borderBottom: '1px solid black',
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
                onChange={(e)=>{setChartComparison(e.target.value);}}
                sx={{
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    textAlign: "center",
                    fontFamily: "line-seed-sans",
                    padding: 1.5,
                    borderRadius: "0.75rem",
                    '& .MuiInputBase-input': {
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
            {gender==''&&<CustomLineChart dataset={[]} keyToLabel={keyToLabelHFAG} colors={colorsHFAG} ylabel='' xlabel=''/>}
            {chartComparison=='height-age'&&gender=='female'&&<CustomLineChart dataset={heightForAgeGirl} keyToLabel={keyToLabelHFAG} colors={colorsHFAG} ylabel='ส่วนสูง (ซม.)' xlabel='อายุ (เดือน)'/>}
            {chartComparison=='weight-age'&&gender=='female'&&<CustomLineChart dataset={heightForAgeBoy} keyToLabel={keyToLabelHFAB} colors={colorsHFAB} ylabel='น้ำหนัก (กก.)' xlabel='อายุ (เดือน)'/>}
            {chartComparison=='weight-height'&&gender=='female'&&<CustomLineChart dataset={heightForAgeGirl} keyToLabel={keyToLabelHFAG} colors={colorsHFAG} ylabel='น้ำหนัก (กก.)' xlabel='ส่วนสูง (ซม.)'/>}
            {chartComparison=='headcircum-age'&&gender=='female'&&<CustomLineChart dataset={heightForAgeGirl} keyToLabel={keyToLabelHFAG} colors={colorsHFAG} ylabel='รอบศรีษะ (ซม.)' xlabel='อายุ (เดือน)'/>}
            {chartComparison=='height-age'&&gender=='male'&&<CustomLineChart dataset={heightForAgeBoy} keyToLabel={keyToLabelHFAB} colors={colorsHFAB} ylabel='ส่วนสูง (ซม.)' xlabel='อายุ (เดือน)'/>}
            {chartComparison=='weight-age'&&gender=='male'&&<CustomLineChart dataset={heightForAgeGirl} keyToLabel={keyToLabelHFAG} colors={colorsHFAG} ylabel='น้ำหนัก (กก.)' xlabel='อายุ (เดือน)'/>}
            {chartComparison=='weight-height'&&gender=='male'&&<CustomLineChart dataset={heightForAgeGirl} keyToLabel={keyToLabelHFAG} colors={colorsHFAG} ylabel='น้ำหนัก (กก.)' xlabel='ส่วนสูง (ซม.)'/>}
            {chartComparison=='headcircum-age'&&gender=='male'&&<CustomLineChart dataset={heightForAgeGirl} keyToLabel={keyToLabelHFAG} colors={colorsHFAG} ylabel='รอบศรีษะ (ซม.)' xlabel='อายุ (เดือน)'/>}
        </div>
        </>
    );
}