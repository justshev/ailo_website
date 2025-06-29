import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AILO - Artificial Intelligence Learning and Optimization",
  description:
    "AILO adalah pusat penelitian dan pengembangan AI dari Telkom University yang berfokus pada inovasi dan solusi berbasis kecerdasan buatan.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${rubik.className} antialiased`}>
        <Navbar />
        <div className="">{children}</div>
      </body>
    </html>
  );
}
