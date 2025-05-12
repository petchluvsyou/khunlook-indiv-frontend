import axios from "axios";
import "dotenv/config";

class ApiServiceBase {
  protected API;

  constructor(accessToken: string, timeout: number = 60000) {
    this.API = axios.create({
      baseURL:
        process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3002/api/v1/",
      timeout: timeout,
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  }
}

export default ApiServiceBase;
