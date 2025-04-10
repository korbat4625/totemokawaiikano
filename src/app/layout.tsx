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

import memory023 from "@/assets/photos/memory023.jpg";

const notoSansTcFont = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: '✨超可愛的香乃の網站💕',
  description: '✨送給我最愛的香乃，世界上怎麼有那麼可愛的人💕',
  openGraph: {
    title: '✨超可愛的香乃の網站💕',
    description: '✨💕送給我最愛的香乃 💕✨',
    url: 'https://totemokawaiikanoowatashiwasukidesuu.com/',
    siteName: '✨💕超可愛的香乃の網站💕✨',
    images: [
      {
        url: 'https://totemokawaiikanoowatashiwasukidesuu.com/memory023.jpg', // 預覽圖網址
        width: 150,
        height: 150,
      },
    ],
    locale: 'zh-TW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '✨超可愛的香乃の網站✨',
    description: '✨送給我最愛的香乃，世界上怎麼有那麼可愛的人💕',
    images: ['https://totemokawaiikanoowatashiwasukidesuu.com/memory023.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
        
      </head> */}
      <body className={`${notoSansTcFont.className}`}>
        {children}
      </body>
    </html>
  );
}
