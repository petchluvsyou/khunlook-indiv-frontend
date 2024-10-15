import CredentialsProvider from "next-auth/providers/credentials";
import { AuthOptions } from "next-auth";
import userLogin from "@/libs/userLogin";

export const authOptions: AuthOptions = {
     providers: [
          CredentialsProvider({
               name: "Credentials",
               credentials: {
                    username: { label: "Username", type: "text", placeholder: "username" },
                    password: { label: "Password", type: "password" }
               },
               async authorize(credentials, req) {

                    if(!credentials) return null;
                    const user = await userLogin(credentials.username,credentials.password);

                    if (user && user.token) {
                         return user
                    } else {
                         return null
                    }
               }
          })
     ],
     session: {strategy: "jwt"},
     callbacks: {
          async jwt({token,user}) {
               if (user) {
                    const typedUser = user as unknown as { token: string };  
                    token.jwt = typedUser.token; 
                  }
                  return token;
          },
          async session({ session, token, user}) {
               session.user.token = token.jwt as string;
               return session;
          },
     },
}
