import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
// import { Zhi_Mang_Xing } from 'next/font/google';
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
// const handwriting = Zhi_Mang_Xing({ subsets: ['latin'], weight: '400' });

const notoSansTcFont = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "超可愛的香乃網站 🐰",
  description: "香乃超可愛超可愛 💕"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap" rel="stylesheet"></link>
      </head> */}
      <body className={`${notoSansTcFont.className}`}>
        {children}
      </body>
    </html>
  );
}
