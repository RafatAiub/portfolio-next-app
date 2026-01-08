/**
 * Home Page
 * Main landing page featuring hero section, skills, and key technologies
 * Demonstrates Next.js SSG capabilities and modern UI patterns
 */

import { Metadata } from "next";
import { portfolioData } from "@/data/portfolio";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "Tanvir Mahtab Rafat - Senior Software Engineer | Frontend Specialist",
  description: portfolioData.summary,
  keywords: [
    "Software Engineer",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Developer",
    "Bangladesh",
  ],
};

export default function Home() {
  return <HomeContent />;
}
