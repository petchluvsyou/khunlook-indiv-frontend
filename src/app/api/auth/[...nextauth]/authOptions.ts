import CredentialsProvider from "next-auth/providers/credentials";
import { AuthOptions, User } from "next-auth";
import userLogin from "@/libs/userLogin";
import axios from "axios";

interface ExtendedUser extends User {
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
          const data = await userLogin({ USERNAME : username, PASSWORD: password });
          const user: ExtendedUser = {
            id: username,
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
            accessTokenExpires: Date.now() + 3600 * 1000, // 1 hour
            refreshTokenExpires: Date.now() + 12 * 3600 * 1000, // 12 hours
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
        token.accessToken = extendedUser.accessToken;
        token.refreshToken = extendedUser.refreshToken;
        token.accessTokenExpires = extendedUser.accessTokenExpires;
        token.refreshTokenExpires = extendedUser.refreshTokenExpires;
      }

      if (typeof token.refreshTokenExpires === 'number' && Date.now() > token.refreshTokenExpires) {
        console.log("Refresh token expired. User needs to log in again.");
        return {}; 
      }

      if (typeof token.accessTokenExpires === 'number' && Date.now() > token.accessTokenExpires) {
        try {
          const response = await axios.post('http://localhost:4000/auth/refresh', {
            refreshToken: token.refreshToken,
          });

          token.accessToken = response.data.accessToken;
          token.accessTokenExpires = Date.now() + 60 * 60 * 1000; // 1 hour
        } catch (error) {
          console.error("Token refresh error:", error);
          return {}; // Triggers logout
        }
      }

      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET, // Ensure this is in your environment variables
};
