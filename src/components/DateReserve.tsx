'use client'

import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Dayjs} from "dayjs"
import { useState } from "react"



export default function DateReserve({onDateChange}:{onDateChange:Function}) {

  const [reserveDate, setreserveDate] = useState<Dayjs|null>(null)
  return (
    <div className="">
     <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
          value={reserveDate}
          onChange={(value)=>{setreserveDate(value); onDateChange(value)}}/>
     </LocalizationProvider>
    </div>
  )
}

