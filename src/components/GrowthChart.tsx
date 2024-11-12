import { ToggleButtonGroup } from "@mui/material";
import { ToggleButton } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { useState } from "react";
import { LineChart } from '@mui/x-charts/LineChart';
import {
  heightForAgeGirl,
  keyToLabel as keyToLabelHFAG,
  colors as colorsHFAG,
} from "@/app/growth/heightForAgeGirl";

const stackStrategy = {
    stack: 'total',
    area: true,
    stackOffset: 'none', // To stack 0 on top of others
  } as const;
  
const customize = {
    height: 300,
    legend: { hidden: false },
    margin: { top: 5 },
  };

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
                className="w-48 bg-transparent shadow-none text-center font-line-seed-sans p-1.5 rounded-xl border [&_.MuiOutlinedInput-notchedOutline]:border [&_.MuiInputBase-input]:p-0 "
                >
                <MenuItem value="height-age">ส่วนสูงเทียบอายุ</MenuItem>
                <MenuItem value="weight-age">น้ำหนักเทียบอายุ</MenuItem>
                <MenuItem value="weight-height">น้ำหนักเทียบส่วนสูง</MenuItem>
                <MenuItem value="headcircum-age">รอบศรีษะเทียบอายุ</MenuItem>
            </Select>
        </div>
        {chartComparison=='height-age'&&gender=='female'&&<div className="w-5/6 pt-12">
        <LineChart
            xAxis={[
                {
                dataKey: 'Month',
                valueFormatter: (value) => value.toString(),
                min: 0,
                max: 228,
                },
            ]}
            series={Object.keys(keyToLabelHFAG).map((key) => ({
                dataKey: key,
                label: keyToLabelHFAG[key],
                color: colorsHFAG[key],
                showMark: false,
                ...stackStrategy,
            }))}
            dataset={heightForAgeGirl}
            {...customize}
        />
        </div>}
        </>
    );
}