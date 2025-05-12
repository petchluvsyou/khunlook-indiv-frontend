"use client";

import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";

export default function DateReserve({
  onDateChange,
  initialDate,
}: {
  onDateChange: Function;
  initialDate?: Dayjs; // Add this to accept an initial value
}) {
  useEffect(() => {
    if (initialDate) {
      setreserveDate(initialDate);
    }
  }, [initialDate]);
  const [reserveDate, setreserveDate] = useState<Dayjs>(dayjs());
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={reserveDate}
          defaultValue={reserveDate}
          onChange={(value) => {
            setreserveDate(value ?? dayjs());
            onDateChange(value);
          }}
          maxDate={dayjs()}
        />
      </LocalizationProvider>
    </div>
  );
}
