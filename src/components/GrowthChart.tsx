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

export default function GrowthChart({ gender }: { gender: string }) {
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
						childDataset={[]}
					/>
				)}
				{chartComparison == 'weight-age' && gender == 'female' && (
					<CustomLineChart
						dataset={heightForAgeBoy}
						keyToLabel={keyToLabelHFAB}
						colors={colorsHFAB}
						ylabel="น้ำหนัก (กก.)"
						xlabel="อายุ (ปี)"
						childDataset={[]}
					/>
				)}
				{chartComparison == 'weight-height' && gender == 'female' && (
					<CustomLineChart
						dataset={heightForAgeGirl}
						keyToLabel={keyToLabelHFAG}
						colors={colorsHFAG}
						ylabel="น้ำหนัก (กก.)"
						xlabel="ส่วนสูง (ซม.)"
						childDataset={[]}
					/>
				)}
				{chartComparison == 'headcircum-age' && gender == 'female' && (
					<CustomLineChart
						dataset={heightForAgeGirl}
						keyToLabel={keyToLabelHFAG}
						colors={colorsHFAG}
						ylabel="รอบศรีษะ (ซม.)"
						xlabel="อายุ (ปี)"
						childDataset={[]}
					/>
				)}
				{chartComparison == 'height-age' && gender == 'male' && (
					<CustomLineChart
						dataset={heightForAgeBoy}
						keyToLabel={keyToLabelHFAB}
						colors={colorsHFAB}
						ylabel="ส่วนสูง (ซม.)"
						xlabel="อายุ (ปี)"
						childDataset={[]}
					/>
				)}
				{chartComparison == 'weight-age' && gender == 'male' && (
					<CustomLineChart
						dataset={heightForAgeGirl}
						keyToLabel={keyToLabelHFAG}
						colors={colorsHFAG}
						ylabel="น้ำหนัก (กก.)"
						xlabel="อายุ (ปี)"
						childDataset={[
							{ XValue: 20, YValue: 50 },
							{ XValue: 50, YValue: 80 },
							{ XValue: 80, YValue: 120 },
							{ XValue: 110, YValue: 70 },
							{ XValue: 140, YValue: 150 },
							{ XValue: 170, YValue: 100 },
						]}
					/>
				)}
				{chartComparison == 'weight-height' && gender == 'male' && (
					<CustomLineChart
						dataset={heightForAgeGirl}
						keyToLabel={keyToLabelHFAG}
						colors={colorsHFAG}
						ylabel="น้ำหนัก (กก.)"
						xlabel="ส่วนสูง (ซม.)"
						childDataset={[]}
					/>
				)}
				{chartComparison == 'headcircum-age' && gender == 'male' && (
					<CustomLineChart
						dataset={heightForAgeGirl}
						keyToLabel={keyToLabelHFAG}
						colors={colorsHFAG}
						ylabel="รอบศรีษะ (ซม.)"
						xlabel="อายุ (ปี)"
						childDataset={[]}
					/>
				)}
			</div>
		</>
	);
}
