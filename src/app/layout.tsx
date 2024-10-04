import type { Metadata } from "next";
import "./globals.css";
import TopMenu from "@/components/TopMenu";

export const metadata: Metadata = {
  title: "Khunlook",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-line-seed-sans text-black bg-white">
        <TopMenu />
        {children}
      </body>
    </html>
  );
}
