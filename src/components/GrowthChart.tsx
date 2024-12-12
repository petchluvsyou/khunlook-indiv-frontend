import {
	MenuItem,
	Select,
	ToggleButton,
	ToggleButtonGroup,
} from '@mui/material';
import { useState } from 'react';
import CustomLineChart from './CustomLineChart';

import {
	colors as colorsHFAG,
	heightForAgeGirl,
	keyToLabel as keyToLabelHFAG,
} from '@/app/growth/heightForAgeGirl';

import {
	colors as colorsHFAB,
	heightForAgeBoy,
	keyToLabel as keyToLabelHFAB,
} from '@/app/growth/heightForAgeBoy';

import {
	colors as colorsWFAB,
	keyToLabel as keyToLabelWFAB,
	weightForAgeBoy,
} from '@/app/growth/weightForAgeBoy';

import {
	colors as colorsWFAG,
	keyToLabel as keyToLabelWFAG,
	weightForAgeGirl,
} from '@/app/growth/weightForAgeGirl';

import {
	colors as colorsHCFAB,
	headCircumForAgeBoy,
	keyToLabel as keyToLabelHCFAB,
} from '@/app/growth/headCircumForAgeBoy';

import {
	colors as colorsHCFAG,
	headCircumForAgeGirl,
	keyToLabel as keyToLabelHCFAG,
} from '@/app/growth/headCircumForAgeGirl';

import {
	colors as colorsWFHB,
	keyToLabel as keyToLabelWFHB,
	weightForHeightBoy,
} from '@/app/growth/weightForHeightBoy';

import {
	colors as colorsWFHG,
	keyToLabel as keyToLabelWFHG,
	weightForHeightGirl,
} from '@/app/growth/weightForHeightGirl';

import dayjs, { Dayjs } from 'dayjs';

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
	const [chartComparison, setChartComparison] = useState('height-age');

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
					onChange={(e) => {
						setChartComparison(e.target.value);
					}}
					sx={{
						backgroundColor: 'transparent',
						boxShadow: 'none',
						textAlign: 'center',
						fontFamily: 'line-seed-sans',
						padding: 1.5,
						borderRadius: '0.75rem',
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
				{gender == '' && (
					<CustomLineChart
						dataset={[]}
						keyToLabel={keyToLabelHFAG}
						colors={colorsHFAG}
						ylabel=""
						xlabel=""
						childDataset={[]}
					/>
				)}
				{chartComparison == 'height-age' && gender == 'female' && (
					<CustomLineChart
						dataset={heightForAgeGirl}
						keyToLabel={keyToLabelHFAG}
						colors={colorsHFAG}
						ylabel="ส่วนสูง (ซม.)"
						xlabel="อายุ (ปี)"
						childDataset={childData
							.map(({ height, measureDate, birthDate }) => ({
								YValue: parseFloat(height),
								XValue:
									measureDate && birthDate
										? dayjs(measureDate).diff(dayjs(birthDate), 'month')
										: 0,
							}))
							.sort((a, b) => a.XValue - b.XValue)}
					/>
				)}
				{chartComparison == 'weight-age' && gender == 'female' && (
					<CustomLineChart
						dataset={weightForAgeGirl}
						keyToLabel={keyToLabelWFAG}
						colors={colorsWFAG}
						ylabel="น้ำหนัก (กก.)"
						xlabel="อายุ (ปี)"
						childDataset={childData
							.map(({ weight, measureDate, birthDate }) => ({
								YValue: parseFloat(weight),
								XValue:
									measureDate && birthDate
										? dayjs(measureDate).diff(dayjs(birthDate), 'month')
										: 0,
							}))
							.sort((a, b) => a.XValue - b.XValue)}
					/>
				)}
				{chartComparison == 'weight-height' && gender == 'female' && (
					<CustomLineChart
						dataset={weightForHeightGirl}
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
				)}
				{chartComparison == 'headcircum-age' && gender == 'female' && (
					<CustomLineChart
						dataset={headCircumForAgeGirl}
						keyToLabel={keyToLabelHCFAG}
						colors={colorsHCFAG}
						ylabel="รอบศรีษะ (ซม.)"
						xlabel="อายุ (ปี)"
						childDataset={childData
							.map(({ headCircum, measureDate, birthDate }) => ({
								YValue: parseFloat(headCircum),
								XValue:
									measureDate && birthDate
										? dayjs(measureDate).diff(dayjs(birthDate), 'month')
										: 0,
							}))
							.sort((a, b) => a.XValue - b.XValue)}
					/>
				)}
				{chartComparison == 'height-age' && gender == 'male' && (
					<CustomLineChart
						dataset={heightForAgeBoy}
						keyToLabel={keyToLabelHFAB}
						colors={colorsHFAB}
						ylabel="ส่วนสูง (ซม.)"
						xlabel="อายุ (ปี)"
						childDataset={childData
							.map(({ height, measureDate, birthDate }) => ({
								YValue: parseFloat(height),
								XValue:
									measureDate && birthDate
										? dayjs(measureDate).diff(dayjs(birthDate), 'month')
										: 0,
							}))
							.sort((a, b) => a.XValue - b.XValue)}
					/>
				)}
				{chartComparison == 'weight-age' && gender == 'male' && (
					<CustomLineChart
						dataset={weightForAgeBoy}
						keyToLabel={keyToLabelWFAB}
						colors={colorsWFAB}
						ylabel="น้ำหนัก (กก.)"
						xlabel="อายุ (ปี)"
						childDataset={childData
							.map(({ weight, measureDate, birthDate }) => ({
								YValue: parseFloat(weight),
								XValue:
									measureDate && birthDate
										? dayjs(measureDate).diff(dayjs(birthDate), 'month')
										: 0,
							}))
							.sort((a, b) => a.XValue - b.XValue)}
					/>
				)}
				{chartComparison == 'weight-height' && gender == 'male' && (
					<CustomLineChart
						dataset={weightForHeightBoy}
						keyToLabel={keyToLabelWFHB}
						colors={colorsWFHB}
						ylabel="น้ำหนัก (กก.)"
						xlabel="ส่วนสูง (ซม.)"
						childDataset={childData
							.map(({ height, weight }) => ({
								YValue: parseFloat(weight),
								XValue: parseFloat(height),
							}))
							.sort((a, b) => a.XValue - b.XValue)}
					/>
				)}
				{chartComparison == 'headcircum-age' && gender == 'male' && (
					<CustomLineChart
						dataset={headCircumForAgeBoy}
						keyToLabel={keyToLabelHCFAB}
						colors={colorsHCFAB}
						ylabel="รอบศรีษะ (ซม.)"
						xlabel="อายุ (ปี)"
						childDataset={childData
							.map(({ headCircum, measureDate, birthDate }) => ({
								YValue: parseFloat(headCircum),
								XValue:
									measureDate && birthDate
										? dayjs(measureDate).diff(dayjs(birthDate), 'month')
										: 0,
							}))
							.sort((a, b) => a.XValue - b.XValue)}
					/>
				)}
			</div>
		</>
	);
}
