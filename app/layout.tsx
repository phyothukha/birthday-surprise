import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Happy Birthday, My Princess ❤️",
  description: "A surprise made with love, memories, and all my heart 💕",
  icons: {
    icon: "/image-removebg-preview.png",
  },

  openGraph: {
    title: "Happy Birthday My Love ❤️",
    description: "Click to open your special surprise 🎁",
    images: [
      {
        url: "/girl.jpg", // put your best couple photo in public folder
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
