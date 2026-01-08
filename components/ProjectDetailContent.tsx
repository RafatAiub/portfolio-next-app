/**
 * Project Detail Content Component (Client Component)
 * Contains the animated content for individual project pages
 */

"use client";

import Link from "next/link";
import { Project } from "@/data/portfolio";
import Section from "@/components/Section";
import { motion } from "framer-motion";

interface ProjectDetailContentProps {
  project: Project;
}

export default function ProjectDetailContent({ project }: ProjectDetailContentProps) {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 pt-16">
      <Section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              href="/projects"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
              ← Back to Projects
            </Link>
          </motion.div>

          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              {project.period}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-lg text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Project Overview
            </h2>
            <ul className="space-y-4">
              {project.description.map((desc, idx) => (
                <li
                  key={idx}
                  className="text-lg text-gray-700 dark:text-gray-300 flex items-start"
                >
                  <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1 text-xl">
                    ▸
                  </span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Project Links */}
          {Object.keys(project.links).length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Project Links
              </h2>
              <div className="flex flex-wrap gap-4">
                {project.links.live && (
                  <Link
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    View Live Demo
                  </Link>
                )}
                {project.links.admin && (
                  <Link
                    href={project.links.admin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors font-medium"
                  >
                    Admin Portal
                  </Link>
                )}
                {project.links.vendor && (
                  <Link
                    href={project.links.vendor}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors font-medium"
                  >
                    Vendor Portal
                  </Link>
                )}
                {project.links.tpl && (
                  <Link
                    href={project.links.tpl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors font-medium"
                  >
                    TPL Portal
                  </Link>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </Section>
    </main>
  );
}

