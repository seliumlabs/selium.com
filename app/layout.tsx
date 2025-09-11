import type { Metadata } from "next";
import { Geist_Mono, Inter_Tight } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Selium - The cloud, reimagined.",
  description: "A channel‑native software-defined cloud that's brand new, yet completely familiar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.className} ${geistMono.variable} antialiased scroll-smooth`}>
        {children}
      </body>
    </html>
  );
}
