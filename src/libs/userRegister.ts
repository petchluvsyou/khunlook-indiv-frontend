import axios from "axios";

export interface RegisterData {
  NAME: string;
  USERNAME: string;
  PASSWORD: string;
  EMAIL: string;
  PHONE_NUMBER: string;
}

export default async function userRegister(data: RegisterData): Promise<void> {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}user`,
      data,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response && error.response.data) {
      const errorMessage =
        error.response.data.error ||
        error.response.data.message ||
        "Failed to register.";
      throw new Error(errorMessage);
    } else {
      throw new Error("An unexpected error occurred during registration.");
    }
  }
}
