import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      pid: string;
      username: string;
      email: string;
    };
    accessToken: string;
    refreshToken: string;
  }

  interface JWT {
    id: string;
    username: string;
    email: string;
    accessToken: string;
    refreshToken: string;
    accessTokenExpires: number;
    refreshTokenExpires: number;
  }
}
