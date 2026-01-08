/**
 * Projects Content Component (Client Component)
 * Contains the animated content for the Projects page
 */

"use client";

import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import Section from "@/components/Section";
import { motion } from "framer-motion";

export default function ProjectsContent() {
  const { projects } = portfolioData;

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 pt-16">
      <Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A showcase of my recent work building scalable web applications and digital solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {project.period}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-6">
                    {project.description.map((desc, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-700 dark:text-gray-300 flex items-start"
                      >
                        <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">
                          ▸
                        </span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                    {project.links.live && (
                      <Link
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                      >
                        Live Demo
                      </Link>
                    )}
                    {project.links.admin && (
                      <Link
                        href={project.links.admin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm px-4 py-2 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors font-medium"
                      >
                        Admin
                      </Link>
                    )}
                    {project.links.vendor && (
                      <Link
                        href={project.links.vendor}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm px-4 py-2 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors font-medium"
                      >
                        Vendor
                      </Link>
                    )}
                    {project.links.tpl && (
                      <Link
                        href={project.links.tpl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm px-4 py-2 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors font-medium"
                      >
                        TPL
                      </Link>
                    )}
                    <Link
                      href={`/projects/${project.id}`}
                      className="text-sm px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}

