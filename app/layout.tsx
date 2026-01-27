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
  metadataBase: new URL("https://www.ahmedafzal.dev"),
  title: {
    default: "Ahmed Afzal | Full Stack Developer & AI Engineer | Remote Software Engineer for UK, Europe & Gulf",
    template: "%s | Ahmed Afzal - Full Stack Developer",
  },
  description:
    "Professional Full Stack Developer & AI Engineer specializing in React, Next.js, Node.js, and AI automation. Available for remote work with clients in UK, Europe, Gulf, and worldwide. Expert in building scalable web applications, AI-powered solutions, and enterprise software.",
  keywords: [
    // Core Skills
    "Full Stack Developer",
    "Full Stack Engineer",
    "AI Engineer",
    "AI Automation Specialist",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "MERN Stack Developer",
    "Software Engineer",
    "Web Developer",
    "Backend Developer",
    "Frontend Developer",
    // Technologies
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "TypeScript",
    "Python",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
    "AWS",
    "Docker",
    "LangChain",
    "OpenAI",
    "Google Document AI",
    // Services
    "Web Development Services",
    "AI Automation Solutions",
    "Custom Software Development",
    "E-commerce Development",
    "Mobile App Development",
    "React Native Developer",
    "API Development",
    "Cloud Solutions",
    "DevOps Engineer",
    // Location & Remote
    "Remote Developer",
    "Remote Software Engineer",
    "Freelance Developer",
    "Freelance Full Stack Developer",
    "UK Developer",
    "Europe Developer",
    "Gulf Developer",
    "International Developer",
    "Remote Work",
    "Offshore Developer",
    // Industry Terms
    "SaaS Development",
    "Enterprise Software",
    "Startup Developer",
    "Agency Developer",
    "Contract Developer",
    "Full-time Developer",
    "Part-time Developer",
    // Specializations
    "AI Integration",
    "Machine Learning Developer",
    "Document Processing",
    "OCR Solutions",
    "Automation Engineer",
    "Business Process Automation",
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
    url: "https://www.ahmedafzal.dev",
    siteName: "Ahmed Afzal - Full Stack Developer & AI Engineer",
    title: "Ahmed Afzal | Full Stack Developer & AI Engineer | Remote Work for UK, Europe & Gulf",
    description:
      "Professional Full Stack Developer & AI Engineer specializing in React, Next.js, Node.js, and AI automation. Available for remote work with clients in UK, Europe, Gulf, and worldwide. Expert in scalable web applications and AI-powered solutions.",
    images: [
      {
        url: "https://ahmedafzal.dev/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Ahmed Afzal - Full Stack Developer & AI Engineer Portfolio | Remote Developer for UK, Europe & Gulf",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Afzal | Full Stack Developer & AI Engineer | Remote Developer",
    description:
      "Professional Full Stack Developer & AI Engineer. Specializing in React, Next.js, Node.js, and AI automation. Available for remote work with UK, Europe, and Gulf clients.",
    creator: "@ahmedafzal_dev",
    images: ["https://ahmedafzal.dev/og-image.webp"],
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
        <meta name="geo.region" content="PK" />
        <meta name="geo.placename" content="Pakistan" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <link rel="canonical" href="https://ahmedafzal.dev" />
        {/* Performance: Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${roboto.variable} ${firaCode.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

