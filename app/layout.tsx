import type { Metadata } from "next";
import { Geist_Mono, Inter_Tight } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

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
  description: "A software framework and runtime for building scalable, connected applications.",
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
        <Analytics />
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="SvJu9dX3kQGEyPNmEXCNNw"
          async
        ></script>
      </body>
    </html>
  );
}
