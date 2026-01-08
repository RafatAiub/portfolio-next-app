/**
 * About Page
 * Detailed professional information, experience, and education
 * Uses SSG for optimal performance
 */

import { Metadata } from "next";
import { portfolioData } from "@/data/portfolio";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About - Tanvir Mahtab Rafat",
  description: `Learn more about ${portfolioData.personal.name}, ${portfolioData.personal.title}`,
};

export default function About() {
  return <AboutContent />;
}

