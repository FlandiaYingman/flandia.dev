import { IBM_Plex_Mono, Inter } from "next/font/google";
import React from "react";

import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const ibm_plex_mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(inter.className, ibm_plex_mono.variable)}>
      <body>{children}</body>
    </html>
  );
}
