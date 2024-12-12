'use client'
import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Dayjs } from "dayjs"

export default function BasicTimePicker({ onTimeChange }: { onTimeChange: Function }) {

  const [time, setTime] = useState<Dayjs | null>(null)
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          label="Basic time picker"
          value={time}
          onChange={(value) => { setTime(value); onTimeChange(value) }} />
      </LocalizationProvider>
    </div>
  );
}