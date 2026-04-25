import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Orbitron, Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

/** Display / headings: geometric, technical — pairs with Poppins (hero) and Inter (UI). */
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
  display: "swap",
});

/** Sci‑fi / robotic display — Works section. */
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "unboundedraj — Dhruv Raj Singh",
  description: "Portfolio of Dhruv Raj Singh (unboundedraj): full-stack developer, software engineer, and builder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable} ${orbitron.variable} h-full`}
    >
      <body className="min-h-full bg-[#101010] font-sans text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
