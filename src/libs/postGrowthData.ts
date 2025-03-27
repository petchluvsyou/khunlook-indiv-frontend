import axios from "axios";
import { Dayjs } from "dayjs";

export default async function postGrowthData(data: {
  currentDate: Dayjs | null;
  birthDate: Dayjs | null;
  gender: string;
  measureDate: Dayjs | null;
  weight: string;
  height: string;
  headCircum: string;
}) {
  try {
    const response = await axios.post(`${process.env.API_URL}growth`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error posting growth data:", error);
    throw new Error("Error posting growth data");
  }
}
