/**
 * Dynamic Project Detail Page
 * Individual project page using Next.js dynamic routes
 * Uses SSG with generateStaticParams for optimal performance
 */

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { portfolioData } from "@/data/portfolio";
import ProjectDetailContent from "@/components/ProjectDetailContent";

// Generate static params for all projects at build time (SSG)
export async function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    id: project.id,
  }));
}

// Generate metadata for each project
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = portfolioData.projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Tanvir Mahtab Rafat`,
    description: project.description.join(" "),
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = portfolioData.projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailContent project={project} />;
}

