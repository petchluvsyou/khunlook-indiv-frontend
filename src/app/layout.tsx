import type { Metadata } from "next";
import "./globals.css";
import TopMenu from "@/components/TopMenu";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";
import NextAuthProvider from "@/providers/NextAuthProvider";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Khunlook",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nextAuthSession = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className="font-line-seed-sans text-black bg-white">
        <NextAuthProvider session={nextAuthSession}>
          <TopMenu />
          {children}
          <Footer/>
        </NextAuthProvider>
      </body>
    </html>
  );
}
