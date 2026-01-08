import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Tanvir Mahtab Rafat - Senior Software Engineer | Frontend Specialist",
    template: "%s | Tanvir Mahtab Rafat",
  },
  description:
    "Performance-driven Software Engineer with 3+ years of expertise in architecting scalable, user-centric web applications. Specialized in React, Next.js, and TypeScript.",
  keywords: [
    "Software Engineer",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Developer",
    "Bangladesh",
    "Tanvir Mahtab Rafat",
  ],
  authors: [{ name: "Tanvir Mahtab Rafat" }],
  creator: "Tanvir Mahtab Rafat",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tanvir-mahtab-rafat.vercel.app",
    title: "Tanvir Mahtab Rafat - Senior Software Engineer",
    description:
      "Performance-driven Software Engineer with 3+ years of expertise in React, Next.js, and TypeScript",
    siteName: "Tanvir Mahtab Rafat Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanvir Mahtab Rafat - Senior Software Engineer",
    description:
      "Performance-driven Software Engineer with 3+ years of expertise in React, Next.js, and TypeScript",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
