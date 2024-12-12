'use client';

import GrowthChart from '@/components/GrowthChart';
import postGrowthData from '@/libs/postGrowthData';
import CheckIcon from '@mui/icons-material/Check';
import RefreshIcon from '@mui/icons-material/Refresh';
import { MenuItem, Select, TextField } from '@mui/material';
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import { useState } from 'react';

interface ChildData {
	currentDate: Dayjs | null;
	birthDate: Dayjs | null;
	gender: string;
	measureDate: Dayjs | null;
	weight: string;
	height: string;
	headCircum: string;
}

export default function GrowthPanel({ token }: { token: string }) {
	const [currentDate, setCurrentDate] = useState<Dayjs | null>(null);
	const [birthDate, setBirthDate] = useState<Dayjs | null>(null);
	const [gender, setGender] = useState('');
	const [measureDate, setMeasureDate] = useState<Dayjs | null>(null);
	const [weight, setWeight] = useState('');
	const [height, setHeight] = useState('');
	const [headCircum, setHeadCircum] = useState('');
	const [tempChildData, setTempChildData] = useState<ChildData[]>([]);

	const handleSubmit = async () => {
		const newData: ChildData = {
			currentDate,
			birthDate,
			gender,
			measureDate,
			weight,
			height,
			headCircum,
		};

		if (token) {
			try {
				await postGrowthData(newData);
				alert('Data posted successfully!');
			} catch (error) {
				alert('Error posting data');
			}
		} else {
			// Append to tempChildData
			setTempChildData((prevData) => [...prevData, newData]);
			alert('Data added locally!');
		}
	};

	return (
		<div className="bg-Bg">
			<div className="flex justify-center items-center text-center relative z-0 flex-col p-12 pb-16 lg:pb-24 bg-Bg gap-1 top-16 lg:top-24 w-full">
				<h1 className="font-bold text-3xl lg:text-5xl text-Dark pb-1 mt-5 lg:pb-3">
					การเจริญเติบโตของ
				</h1>
				<p className="text-3xl lg:text-5xl font-bold text-Yellow mb-6">
					คุณลูก
				</p>
				<p className="text-2xl text-Dark font-bold mb-6 mt-8">
					กรอกข้อมูลดูการเจริญเติบโตเลย!
				</p>
			</div>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<div className="flex flex-col w-5/6 sm:w-3/5 justify-self-center items-start lg:items-center relative z-0 p-8 gap-6 text-Grey">
					<div className="flex flex-row justify-center gap-4">
						<p className="self-center">วันที่ปัจจุบัน:</p>
						<MobileDatePicker
							value={currentDate}
							onChange={(value) => {
								setCurrentDate(value);
							}}
							disableOpenPicker
							className="w-32 [&_.MuiOutlinedInput-notchedOutline]:border [&_.MuiOutlinedInput-notchedOutline]:rounded-xl [&_.MuiInputBase-input]:p-1.5 [&_.MuiInputBase-input]:text-center [&_.MuiInputBase-input]:bg-transparent [&_.MuiOutlinedInput-root]:p-0"
						/>
						{/* <DatePicker
							value={currentDate}
							onChange={(value) => {
								setCurrentDate(value);
							}}
							disableOpenPicker
							className="hidden lg:block w-32 [&_.MuiOutlinedInput-notchedOutline]:border [&_.MuiOutlinedInput-notchedOutline]:rounded-xl [&_.MuiInputBase-input]:p-1.5 [&_.MuiInputBase-input]:text-center [&_.MuiInputBase-input]:bg-transparent [&_.MuiOutlinedInput-root]:p-0"
						/> */}
					</div>
					<div className="flex flex-row justify-center gap-4">
						<p className="self-center">วันเกิด:</p>
						<MobileDatePicker
							value={birthDate}
							onChange={(value) => {
								setBirthDate(value);
							}}
							disableOpenPicker
							className="w-32 [&_.MuiOutlinedInput-notchedOutline]:border [&_.MuiOutlinedInput-notchedOutline]:rounded-xl [&_.MuiInputBase-input]:p-1.5 [&_.MuiInputBase-input]:text-center [&_.MuiInputBase-input]:bg-transparent [&_.MuiOutlinedInput-root]:p-0"
						/>
						{/* <DatePicker
							value={birthDate}
							onChange={(value) => {
								setBirthDate(value);
							}}
							disableOpenPicker
							className="hidden lg:block w-32 [&_.MuiOutlinedInput-notchedOutline]:border [&_.MuiOutlinedInput-notchedOutline]:rounded-xl [&_.MuiInputBase-input]:p-1.5 [&_.MuiInputBase-input]:text-center [&_.MuiInputBase-input]:bg-transparent [&_.MuiOutlinedInput-root]:p-0"
						/> */}
					</div>
					<div className="flex flex-row justify-center gap-4">
						<p className="self-center">เพศ:</p>
						<Select
							labelId="demo-simple-select-helper-label"
							id="demo-simple-select-helper"
							value={gender}
							label="gender"
							onChange={(e) => {
								setGender(e.target.value);
							}}
							className="w-24 bg-transparent shadow-none text-center font-line-seed-sans p-1.5 [&_.MuiOutlinedInput-notchedOutline]:border [&_.MuiOutlinedInput-notchedOutline]:rounded-xl [&_.MuiInputBase-input]:p-0 "
						>
							<MenuItem value={'male'}>ชาย</MenuItem>
							<MenuItem value={'female'}>หญิง</MenuItem>
						</Select>
					</div>
					<div className="flex flex-row justify-center gap-4">
						<p className="self-center">
							วันที่ชั่งน้ำหนัก วัดส่วนสูง รอบศรีษะ:
						</p>
						<MobileDatePicker
							value={measureDate}
							onChange={(value) => {
								setMeasureDate(value);
							}}
							disableOpenPicker
							className="w-32 min-w-32 [&_.MuiOutlinedInput-notchedOutline]:border [&_.MuiOutlinedInput-notchedOutline]:rounded-xl [&_.MuiInputBase-input]:p-1.5 [&_.MuiInputBase-input]:text-center [&_.MuiInputBase-input]:bg-transparent [&_.MuiOutlinedInput-root]:p-0"
						/>
						{/* <DatePicker
							value={measureDate}
							onChange={(value) => {
								setMeasureDate(value);
							}}
							disableOpenPicker
							className="hidden lg:block w-32 min-w-32 [&_.MuiOutlinedInput-notchedOutline]:border [&_.MuiOutlinedInput-notchedOutline]:rounded-xl [&_.MuiInputBase-input]:p-1.5 [&_.MuiInputBase-input]:text-center [&_.MuiInputBase-input]:bg-transparent [&_.MuiOutlinedInput-root]:p-0"
						/> */}
					</div>
					<div className="flex flex-col lg:flex-row justify-center gap-6 items-start lg:items-center">
						<div className="flex flex-row justify-center gap-1">
							<p className="self-center pr-3">น้ำหนัก:</p>
							<TextField
								variant="outlined"
								placeholder="0-80"
								value={weight}
								onChange={(e) => {
									setWeight(e.target.value);
								}}
								className="w-24 [&_.MuiOutlinedInput-root]:bg-transparent [&_.MuiOutlinedInput-root]:shadow-none [&_.MuiOutlinedInput-root]:rounded-xl [&_.MuiOutlinedInput-notchedOutline]:border [&_.MuiInputBase-input]:p-1.5 [&_.MuiInputBase-input]:text-inherit [&_.MuiInputBase-input]:text-center [&_.MuiInputBase-input]:bg-transparent [&_.MuiInputLabel-root]:hidden "
							/>
							<p className="self-center">กก.</p>
						</div>
						<div className="flex flex-row justify-center gap-1">
							<p className="self-center pr-3">ส่วนสูง:</p>
							<TextField
								variant="outlined"
								placeholder="0-180"
								value={height}
								onChange={(e) => {
									setHeight(e.target.value);
								}}
								className="w-24 [&_.MuiOutlinedInput-root]:bg-transparent [&_.MuiOutlinedInput-root]:shadow-none [&_.MuiOutlinedInput-root]:rounded-xl [&_.MuiOutlinedInput-notchedOutline]:border [&_.MuiInputBase-input]:p-1.5 [&_.MuiInputBase-input]:text-inherit [&_.MuiInputBase-input]:text-center [&_.MuiInputBase-input]:bg-transparent [&_.MuiInputLabel-root]:hidden "
							/>
							<p className="self-center">ซม.</p>
						</div>
						<div className="flex flex-row justify-center gap-1">
							<p className="self-center pr-3">รอบศรีษะ:</p>
							<TextField
								variant="outlined"
								placeholder="20-55"
								value={headCircum}
								onChange={(e) => {
									setHeadCircum(e.target.value);
								}}
								className="w-24 [&_.MuiOutlinedInput-root]:bg-transparent [&_.MuiOutlinedInput-root]:shadow-none [&_.MuiOutlinedInput-root]:rounded-xl [&_.MuiOutlinedInput-notchedOutline]:border [&_.MuiInputBase-input]:p-1.5 [&_.MuiInputBase-input]:text-inherit [&_.MuiInputBase-input]:text-center [&_.MuiInputBase-input]:bg-transparent [&_.MuiInputLabel-root]:hidden "
							/>
							<p className="self-center">ซม.</p>
						</div>
					</div>
					<div className="flex flex-row justify-center gap-6 items-center lg:items-center pt-4 w-full">
						<button
							className="rounded-xl bg-Yellow font-line-seed-sans p-1.5 w-24 text-base text-white gap-2 flex flex-row justify-center"
							onClick={() => {
								handleSubmit();
							}}
						>
							<CheckIcon className="w-5" />
							<p>ยืนยัน</p>
						</button>
						<button
							className="rounded-xl bg-DarkRed font-line-seed-sans p-1.5 w-24 text-base text-white gap-2 flex flex-row justify-center"
							onClick={() => {
								setCurrentDate(null);
								setBirthDate(null);
								setGender('');
								setMeasureDate(null);
								setWeight('');
								setHeight('');
								setHeadCircum('');
							}}
						>
							<RefreshIcon className="w-5" />
							<p>ล้างค่า</p>
						</button>
					</div>
				</div>
			</LocalizationProvider>
			<div className="flex justify-center items-center text-center relative z-0 flex-col p-12 px-0 pb-0 pt-4 lg:pb-24 bg-Bg w-full">
				<p className="text-3xl text-Yellow font-bold mb-6 mt-8">
					กราฟแสดงการเติบโต
				</p>
				<GrowthChart gender={gender} childData={tempChildData} />
			</div>
		</div>
	);
}
