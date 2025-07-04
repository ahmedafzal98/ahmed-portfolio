import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Anton,
  Poppins,
  Space_Grotesk,
  VT323,
  Work_Sans,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-spaceGrotesk",
});
const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-vt323",
});
const work_sans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-workSans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} ${poppins.variable} ${spaceGrotesk.variable} ${vt323.variable} ${work_sans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
