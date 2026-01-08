/**
 * Footer Component
 * Displays contact information and social links
 */

import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const { email, linkedin, github } = portfolioData.personal;

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {new Date().getFullYear()} Tanvir Mahtab Rafat. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link
              href={`mailto:${email}`}
              className="text-sm hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              Email
            </Link>
            <Link
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </Link>
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

