/**
 * Projects Page
 * Displays all projects with links and technologies used
 * Uses SSG for optimal performance
 */

import { Metadata } from "next";
import ProjectsContent from "@/components/ProjectsContent";

export const metadata: Metadata = {
  title: "Projects - Tanvir Mahtab Rafat",
  description: "Explore my portfolio of web development projects built with React, Next.js, and modern technologies",
};

export default function Projects() {
  return <ProjectsContent />;
}

