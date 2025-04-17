// utils/userLogin.ts
import axios from "axios";

interface LoginData {
  USERNAME: string;
  PASSWORD: string;
}

interface User {
  PID: string;
  ID: string;
  username: string;
  email: string;
  phone_number: string;
}

interface Tokens {
  accessToken: string;
  refreshToken: string;
}

interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
    tokens: Tokens;
  };
}

export default async function userLogin(
  data: LoginData
): Promise<LoginResponse> {
  try {
    const response = await axios.post<LoginResponse>(
      // `${process.env.API_URL}auth`,
      "http://localhost:3002/api/v1/auth",
      // "http://52.221.239.141:3000/api/v1/auth",
      data,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response && error.response.data) {
      const errorMessage =
        error.response.data ||
        "Failed to log in. Please check your credentials.";
      throw new Error(errorMessage);
    } else {
      throw new Error("An error occurred during login.");
    }
  }
}
