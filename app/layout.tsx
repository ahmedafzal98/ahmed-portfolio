import type { Metadata } from "next";
import { Inter, Roboto, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ahmedafzal.dev"), // Replace with your actual domain
  title: {
    default: "Ahmed Afzal | Full Stack & AI Engineer | Building Scalable Engines for Agencies",
    template: "%s | Ahmed Afzal",
  },
  description:
    "Full Stack Engineer specializing in React, Node.js, and AI automation. Available for remote work with UK, Gulf, and European clients. Building scalable engines for agencies.",
  keywords: [
    "Full Stack Developer",
    "AI Engineer",
    "React Developer",
    "Node.js Developer",
    "Remote Developer",
    "Freelance Developer",
    "Software Engineer",
    "Next.js Developer",
    "TypeScript Developer",
    "AI Automation",
    "Web Development",
    "Backend Development",
  ],
  authors: [{ name: "Ahmed Afzal", url: "https://linkedin.com/in/ahmedafzal-dev" }],
  creator: "Ahmed Afzal",
  publisher: "Ahmed Afzal",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahmedafzal.dev", // Replace with your actual domain
    siteName: "Ahmed Afzal - Portfolio",
    title: "Ahmed Afzal | Full Stack & AI Engineer | Building Scalable Engines for Agencies",
    description:
      "Full Stack Engineer specializing in React, Node.js, and AI automation. Available for remote work with UK, Gulf, and European clients. Building scalable engines for agencies.",
    images: [
      {
        url: "/og-image.png", // OG image (1200x630px) - Place in /public folder
        width: 1200,
        height: 630,
        alt: "Ahmed Afzal - Full Stack & AI Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Afzal | Full Stack & AI Engineer",
    description:
      "Full Stack Engineer specializing in React, Node.js, and AI automation. Building scalable engines for agencies.",
    creator: "@ahmedafzal_dev", // Replace with your actual Twitter handle
    images: ["/og-image.png"], // Same OG image
  },
  alternates: {
    canonical: "https://ahmedafzal.dev", // Replace with your actual domain
  },
  category: "Technology",
  classification: "Portfolio",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
      </head>
      <body
        className={`${inter.variable} ${roboto.variable} ${firaCode.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

