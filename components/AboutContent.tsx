/**
 * About Content Component (Client Component)
 * Contains the animated content for the About page
 */

"use client";

import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import Section from "@/components/Section";
import { motion } from "framer-motion";

export default function AboutContent() {
  const { personal, summary, experience, education } = portfolioData;

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 pt-16">
      {/* Header Section with Profile */}
      <Section className="pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={personal.profilePicture}
                  alt={personal.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            {/* Personal Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {personal.name}
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
                {personal.title}
              </p>
              <div className="space-y-3 text-gray-600 dark:text-gray-400">
                <p>
                  <span className="font-semibold">Location:</span> {personal.location}
                </p>
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {personal.email}
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Phone:</span> {personal.phone}
                </p>
                <div className="flex gap-4 pt-4">
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Professional Summary */}
      <Section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Professional Summary
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {summary}
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Professional Experience
            </h2>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-600"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {exp.company}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 mt-1">
                        {exp.position}
                      </p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                      {exp.period}
                    </p>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {exp.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="text-gray-700 dark:text-gray-300 flex items-start"
                      >
                        <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">
                          ▸
                        </span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Education Section */}
      <Section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Education
            </h2>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {education.degree}
              </h3>
              <p className="text-lg text-blue-600 dark:text-blue-400 mt-2">
                {education.institution}
              </p>
              <div className="mt-4 text-gray-700 dark:text-gray-300">
                <p>
                  <span className="font-semibold">Graduation Year:</span> {education.year}
                </p>
                <p>
                  <span className="font-semibold">CGPA:</span> {education.cgpa}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </main>
  );
}

