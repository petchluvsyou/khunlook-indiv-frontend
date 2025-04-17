import UserService from "@/libs/UserService/UserService";
import axios from "axios";
import { AuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface ExtendedUser extends User {
  id: string;
  username: string;
  email: string;
  PID: string;
  CID: string;
  accessToken: string;
  refreshToken: string;
  accessTokenExpires: number;
  refreshTokenExpires: number;
}

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        try {
          const { username, password } = credentials;
          const userService = new UserService();
          const data = await userService.userLogin({
            USERNAME: username,
            PASSWORD: password,
          });

          const user: ExtendedUser = {
            id: data.data.data.user.ID,
            username: data.data.data.user.username,
            email: data.data.data.user.email,
            PID: data.data.data.user.PID,
            CID: data.data.data.user.CID,
            accessToken: data.data.data.tokens.accessToken,
            refreshToken: data.data.data.tokens.refreshToken,
            accessTokenExpires: Date.now() + 3600 * 1000,
            refreshTokenExpires: Date.now() + 12 * 3600 * 1000,
          };

          return user;
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const extendedUser = user as ExtendedUser;
        token.id = extendedUser.id;
        token.username = extendedUser.username;
        token.email = extendedUser.email;
        token.pid = extendedUser.PID;
        token.cid = extendedUser.CID;
        token.accessToken = extendedUser.accessToken;
        token.refreshToken = extendedUser.refreshToken;
        token.accessTokenExpires = extendedUser.accessTokenExpires;
        token.refreshTokenExpires = extendedUser.refreshTokenExpires;
      }

      if (
        typeof token.refreshTokenExpires === "number" &&
        Date.now() > token.refreshTokenExpires
      ) {
        console.log("Refresh token expired. User needs to log in again.");
        return {};
      }

      if (
        typeof token.accessTokenExpires === "number" &&
        Date.now() > token.accessTokenExpires
      ) {
        try {
          const response = await axios.post(
            `${process.env.API_URL}auth/refresh`,
            {
              refreshToken: token.refreshToken,
            }
          );

          token.accessToken = response.data.tokens.accessToken;
          token.accessTokenExpires = Date.now() + 3600 * 10000000;
        } catch (error) {
          console.error("Token refresh error:", error);
          return {};
        }
      }

      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id as string;
      session.user.username = token.username as string;
      session.user.pid = token.pid as string;
      session.user.cid = token.cid as string;
      session.user.email = token.email as string;
      session.accessToken = token.accessToken as string;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
