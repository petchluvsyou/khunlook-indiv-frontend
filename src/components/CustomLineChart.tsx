import { LineChart } from '@mui/x-charts/LineChart';
import { useState, useEffect } from 'react';

type Dataset = {
    Month: number;
    P3: number;
    P15: number;
    P85: number;
    P97: number;
    P99: number;
}
type KeyToLabel = { [key: string]: string };
type Colors = { [key: string]: string };
  
const stackStrategy = {
      area: true,
    } as const;
    
const customize = {
      height: 360,
      margin: { top: 5 },
    };

export default function CustomLineChart({dataset, keyToLabel, colors, ylabel, xlabel}: {dataset: Dataset[], keyToLabel:KeyToLabel, colors:Colors, ylabel:string, xlabel:string}){
    const [showLegend, setShowLegend] = useState(false);

    useEffect(() => {
            const handleResize = () => {
            setShowLegend(window.innerWidth >= 1024);
            };
            handleResize();
            window.addEventListener('resize', handleResize);

            return () => window.removeEventListener('resize', handleResize);
        }, []);

    return(
        <>
        <LineChart
            sx={{
                '& .MuiLineElement-root': {
                    strokeWidth: 0,
                },
            }}
            xAxis={[
                {
                dataKey: 'Month',
                valueFormatter: (value) => value.toString(),
                min: 0,
                max: Math.max(...dataset.map((item) => item.Month)), 
                label: xlabel,
                tickSize: 5,
                },
            ]}

            yAxis={[
                {
                valueFormatter: (value) => value.toString(),
                max: Math.max(...dataset.map((item) => item.P99))*1.1, 
                min: Math.min(...dataset.map((item) => item.P3))*0.8,
                label: ylabel,
                tickSize: 5,
                },
            ]}
  
            series={Object.keys(keyToLabel).map((key) => ({
                dataKey: key,
                label: keyToLabel[key],
                color: colors[key],
                showMark: false,
                showGrid: true,
                ...stackStrategy,
            }))}
            dataset={dataset}
            {...customize}
            legend={{
                hidden: !showLegend,     
            }}
            grid={{ vertical: true, horizontal: true }}
        />
        </>
    );
}