import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart';
import { useEffect, useState } from 'react';

type Dataset = {
	XValue: number;
	P3: number;
	P15: number;
	P85: number;
	P97: number;
	P99: number;
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
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	// Convert Month to Year and Month format
	const transformedDataset = dataset.map((item) => ({
		...item,
		XValue: `${Math.floor(item.XValue / 12)} years ${item.XValue % 12} months`,
	}));

	const transformedChildDataset = childDataset.map((item) => ({
		XValue: `${Math.floor(item.XValue / 12)} years ${item.XValue % 12} months`,
		YValue: item.YValue,
	}));

	// Conditional dataset selection
	const combinedDataset =
		xlabel === 'อายุ (ปี)'
			? [...transformedDataset, ...transformedChildDataset]
			: [...dataset, ...childDataset];

	return (
		<>
			<LineChart
				sx={{
					[`& .${lineElementClasses.root}`]: {
						strokeWidth: 2,
					},
					'& .MuiAreaElement-series-child': {
						strokeWidth: 4,
					},
				}}
				xAxis={[
					{
						dataKey: 'XValue',
						scaleType: 'band',
						label: xlabel,
						tickSize: 1,
					},
				]}
				yAxis={[
					{
						valueFormatter: (value) => value.toString(),
						max: Math.max(...dataset.map((item) => item.P99), 0) * 1.1,
						min: Math.min(...dataset.map((item) => item.P3), 0) * 0.8,
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
						id: 'child',
						dataKey: 'YValue',
						label: 'ลูก',
						color: '#556666',
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
