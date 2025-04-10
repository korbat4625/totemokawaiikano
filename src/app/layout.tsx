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
  metadataBase: new URL('https://totemokawaiikanoowatashiwasukidesuu.com'),
  title: '✨超可愛的香乃の網站💕',
  description: '✨送給我最愛的香乃，世界上怎麼有那麼可愛的人💕',
  openGraph: {
    title: '✨超可愛的香乃の網站💕',
    description: '✨💕送給我最愛的香乃 💕✨',
    url: 'https://totemokawaiikanoowatashiwasukidesuu.com/',
    siteName: '✨💕超可愛的香乃の網站💕✨',
    images: [
      {
        url: '/memory023.jpg', // 加了 metadataBase 就可以用相對路徑
      },
    ],
    locale: 'zh-TW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '✨超可愛的香乃の網站✨',
    description: '✨送給我最愛的香乃，世界上怎麼有那麼可愛的人💕',
    images: ['/memory023.jpg'],
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
