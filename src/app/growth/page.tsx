'use client'

import { MobileDatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MenuItem, Select, TextField } from '@mui/material';
import { useState } from "react";
import { Dayjs } from "dayjs";

export default function Growth() {

    const [currentDate, setCurrentDate] = useState<Dayjs|null>(null);
    const [birthDate, setBirthDate] = useState<Dayjs|null>(null);
    const [gender, setGender] = useState('');
    const [measureDate, setMeasureDate] = useState<Dayjs|null>(null);
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [headCircum, setHeadCircum] = useState('');

    return (
        <div className="bg-Bg">
            <div className='flex justify-center items-center text-center relative z-0 flex-col p-12 pb-16 lg:pb-24 bg-Bg gap-1 top-16 lg:top-24 w-full'>
                <h1 className="font-bold text-2xl lg:text-5xl text-Dark pb-1 mt-5 lg:pb-3">การเจริญเติบโตของ</h1>
                <p className="text-2xl lg:text-5xl font-bold text-Yellow mb-6">คุณลูก</p>
                <p className="text-2xl text-Dark font-bold mb-6 mt-8">กรอกข้อมูลดูการเจริญเติบโตเลย!</p>
            </div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div className='flex flex-col w-3/5 justify-self-center items-start lg:items-center relative z-0 p-8 pb-16 lg:pb-24 gap-4'>
                    <div className='flex flex-row justify-center gap-4'>
                        <p className="self-center">วันที่ปัจจุบัน:</p>
                        <MobileDatePicker
                            value={currentDate}
                            onChange={(value)=>{setCurrentDate(value);}}
                            disableOpenPicker
                            slotProps={{
                                textField: {
                                    InputProps: {
                                      className: 'bg-transparent border rounded-xl p-0 focus:border-gray-500 focus:ring-0 focus:outline-none bg-Bg',
                                    },
                                    inputProps: {
                                      className: 'text-center p-1.5 bg-Bg',
                                    },
                                  },
                            }}
                            className="w-32"
                        />
                    </div>
                    <div className='flex flex-row justify-center gap-4'>
                        <p className="self-center">วันเกิด:</p>
                        <MobileDatePicker
                            value={birthDate}
                            onChange={(value)=>{setBirthDate(value);}}
                            disableOpenPicker
                            slotProps={{
                                textField: {
                                    InputProps: {
                                      className: 'bg-transparent border rounded-xl p-0 focus:border-gray-500 focus:ring-0 focus:outline-none bg-Bg',
                                    },
                                    inputProps: {
                                      className: 'text-center p-1.5 bg-Bg',
                                    },
                                  },
                            }}
                            className="w-32"
                        />
                    </div>
                    <div className='flex flex-row justify-center gap-4'>
                        <p className="self-center">เพศ:</p>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={gender}
                            label="gender"
                            onChange={(e)=>{setGender(e.target.value);}}
                            className="w-24 bg-transparent shadow-none text-center font-line-seed-sans p-1.5 rounded-xl border [&_.MuiOutlinedInput-notchedOutline]:border [&_.MuiInputBase-input]:p-0 "
                            >
                            <MenuItem value={'ชาย'}>ชาย</MenuItem>
                            <MenuItem value={'หญิง'}>หญิง</MenuItem>
                        </Select>
                    </div>
                    <div className='flex flex-row justify-center gap-4'>
                        <p className="self-center">วันที่ชั่งน้ำหนัก วัดส่วนสูง รอบศรีษะ:</p>
                        <MobileDatePicker
                            value={measureDate}
                            onChange={(value)=>{setMeasureDate(value);}}
                            disableOpenPicker
                            slotProps={{
                                textField: {
                                    InputProps: {
                                      className: 'bg-transparent border rounded-xl p-0 focus:border-gray-500 focus:ring-0 focus:outline-none bg-Bg',
                                    },
                                    inputProps: {
                                      className: 'text-center p-1.5 bg-Bg',
                                    },
                                  },
                            }}
                            className="w-32"
                        />
                    </div>
                    <div className='flex flex-col lg:flex-row justify-center gap-6 items-start lg:items-center'>
                        <div className='flex flex-row justify-center gap-1'>
                            <p className="self-center pr-3">น้ำหนัก:</p>
                            <TextField
                            variant="outlined"
                            placeholder="0-80"
                            value={weight}
                            onChange={(e)=>{setWeight(e.target.value);}}
                            className="w-24 [&_.MuiOutlinedInput-root]:bg-transparent [&_.MuiOutlinedInput-root]:shadow-none [&_.MuiOutlinedInput-root]:rounded-xl [&_.MuiOutlinedInput-notchedOutline]:border [&_.MuiInputBase-input]:p-1.5 [&_.MuiInputBase-input]:text-inherit [&_.MuiInputBase-input]:text-center [&_.MuiInputBase-input]:bg-transparent [&_.MuiInputLabel-root]:hidden "
                            />
                            <p className="self-center">กก.</p>
                        </div>
                        <div className='flex flex-row justify-center gap-1'>
                            <p className="self-center pr-3">ส่วนสูง:</p>
                            <TextField
                            variant="outlined"
                            placeholder="0-180"
                            value={height}
                            onChange={(e)=>{setHeight(e.target.value);}}
                            className="w-24 [&_.MuiOutlinedInput-root]:bg-transparent [&_.MuiOutlinedInput-root]:shadow-none [&_.MuiOutlinedInput-root]:rounded-xl [&_.MuiOutlinedInput-notchedOutline]:border [&_.MuiInputBase-input]:p-1.5 [&_.MuiInputBase-input]:text-inherit [&_.MuiInputBase-input]:text-center [&_.MuiInputBase-input]:bg-transparent [&_.MuiInputLabel-root]:hidden "
                            />
                            <p className="self-center">ซม.</p>
                        </div>
                        <div className='flex flex-row justify-center gap-1'>
                            <p className="self-center pr-3">รอบศรีษะ:</p>
                            <TextField
                            variant="outlined"
                            placeholder="20-55"
                            value={headCircum}
                            onChange={(e)=>{setHeadCircum(e.target.value);}}
                            className="w-24 [&_.MuiOutlinedInput-root]:bg-transparent [&_.MuiOutlinedInput-root]:shadow-none [&_.MuiOutlinedInput-root]:rounded-xl [&_.MuiOutlinedInput-notchedOutline]:border [&_.MuiInputBase-input]:p-1.5 [&_.MuiInputBase-input]:text-inherit [&_.MuiInputBase-input]:text-center [&_.MuiInputBase-input]:bg-transparent [&_.MuiInputLabel-root]:hidden "
                            />
                            <p className="self-center">ซม.</p>
                        </div>
                    </div>
                </div>
            </LocalizationProvider>
        </div>
    );
}