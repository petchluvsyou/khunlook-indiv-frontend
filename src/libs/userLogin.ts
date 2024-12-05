// utils/userLogin.ts
import axios from "axios";

interface LoginData {
  USERNAME: string;
  PASSWORD: string;
}

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export default async function userLogin(data: LoginData): Promise<LoginResponse> {
  try {
    const response = await axios.post<LoginResponse>("http://localhost:4000/auth", data, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response && error.response.data) {
      const errorMessage = error.response.data || "Failed to log in. Please check your credentials.";
      throw new Error(errorMessage);
    } else {
      throw new Error("An error occurred during login.");
    }
  }
}
