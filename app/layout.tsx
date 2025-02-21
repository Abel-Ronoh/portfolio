import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {Playball} from "next/font/google";
import {Yeseva_One} from "next/font/google";
import {Black_And_White_Picture} from "next/font/google";
import {Arbutus} from "next/font/google";
import {Playfair_Display} from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap'
});
const playball = Playball({ 
  subsets: ["latin"],
  weight:'400',
  variable: '--font-playball'
});
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight:'400',
  variable: '--font-playfair'
});
const yatra = Yeseva_One({ 
  subsets: ["latin"],
  weight:'400',
  variable: '--font-yatra'
});
const splash = Black_And_White_Picture({ 
  subsets: ["latin"],
  weight:'400',
  variable: '--font-splash'
});
const uncial = Arbutus({ 
  subsets: ["latin"],
  weight:'400',
  variable: '--font-unical'
});

export const metadata: Metadata = {
  title: "Abel Ronoh",
  description: "Officia3l portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playball.variable} ${splash.variable} ${playfair.variable} ${uncial.variable} ${yatra.variable} ${inter.className}`}>{children}</body>
    </html>
  );
}
