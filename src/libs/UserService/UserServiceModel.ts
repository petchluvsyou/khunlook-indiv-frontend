export interface IUserRegisterRequest {
  NAME: string;
  USERNAME: string;
  PASSWORD: string;
  EMAIL: string;
  CID: string;
  PHONE_NUMBER: string;
}
export interface IUserLoginRequest {
  USERNAME: string;
  PASSWORD: string;
}

export interface User {
  PID: string;
  ID: string;
  username: string;
  email: string;
  CID: string;
  phone_number: string;
}

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export interface IUserLoginResponse {
  data: {
    user: User;
    tokens: Tokens;
  };
  success: boolean;
  message: string;
}
