/**
 * Portfolio Data
 * Centralized data structure containing all portfolio information
 * Extracted from professional CV/resume
 */

export interface Experience {
  company: string;
  position: string;
  period: string;
  achievements: string[];
}

export interface Project {
  id: string;
  title: string;
  period: string;
  technologies: string[];
  description: string[];
  links: {
    live?: string;
    github?: string;
    admin?: string;
    vendor?: string;
    tpl?: string;
  };
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export const portfolioData = {
  personal: {
    name: "Tanvir Mahtab Rafat",
    title: "Senior Software Engineer | Frontend Specialist",
    location: "Dhaka, Bangladesh",
    email: "tanvirmahtab1996@gmail.com",
    phone: "+8801606588348",
    linkedin: "https://www.linkedin.com/in/tanvir-mahtab-rafat/",
    github: "https://github.com/RafatAiub",
    profilePicture: "/profile_picture.png",
  },
  summary:
    "Performance-driven Software Engineer with 3+ years of expertise in architecting scalable, user-centric web applications. Highly proficient in the React ecosystem (Next.js, TypeScript, Redux) with a proven track record of optimizing Core Web Vitals and engineering modular UI systems. Adept at bridging the gap between complex backend requirements and seamless, accessible frontend experiences.",
  experience: [
    {
      company: "BacBon Limited",
      position: "Frontend Developer (React/Next)",
      period: "Aug 2025 - Present",
      achievements: [
        "Architected a high-traffic e-commerce ecosystem using Next.js, prioritizing Server-Side Rendering (SSR) for superior SEO and performance.",
        "Engineered a custom, type-safe component library in TypeScript, accelerating feature delivery cycles by 40%.",
        "Optimized data-fetching patterns and state management, resulting in a 25% reduction in TTFB (Time to First Byte).",
        "Audited and refactored UI components to ensure strict compliance with WCAG AA accessibility standards.",
      ],
    },
    {
      company: "Ethics Advance Technology Limited",
      position: "Software Engineer",
      period: "Dec 2022 - Aug 2025",
      achievements: [
        "Spearheaded the migration of legacy systems to a modern Next.js/TypeScript stack, increasing deployment velocity by 30%.",
        "Orchestrated API optimization strategies that reduced client-side latency by 40% through strategic caching and memoization.",
        "Modernized the design system using Tailwind CSS, achieving a 30% improvement in mobile responsiveness and user engagement metrics.",
        "Facilitated technical mentorship and code reviews for junior engineers, improving overall codebase maintainability and reducing bug reports by 50%.",
      ],
    },
    {
      company: "NTRCA",
      position: "Frontend Developer (Contract)",
      period: "Mar 2022 - Nov 2022",
      achievements: [
        "Developed a mission-critical, secure administrative dashboard serving a user base of 10,000+ personnel.",
        "Implemented robust client-side validation logic using Formik and Yup, reducing data entry errors by 60%.",
        "Optimized application routing and lazy-loading strategies, contributing to a 35% decrease in user bounce rates.",
      ],
    },
  ] as Experience[],
  projects: [
    {
      id: "vitamin-ae",
      title: "Vitamin.ae E-commerce Ecosystem",
      period: "Aug 2025 - Present",
      technologies: ["Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
      description: [
        "Developed a multi-tenant architecture featuring integrated Admin, Vendor, and Template portals with shared business logic.",
        "Optimized the checkout flow and payment gateway integrations to maximize conversion rates.",
        "Implementation using reusable, modular architecture across all portals.",
      ],
      links: {
        live: "https://vitamins.clmsbd.com/",
        admin: "https://admin-vitamins.clmsbd.com/",
        vendor: "https://vendor-vitamins.clmsbd.com/welcome",
        tpl: "https://tpl-vitamins.clmsbd.com/",
      },
    },
    {
      id: "amar-bin",
      title: "AmarBin - Smart Waste Management",
      period: "July 2022",
      technologies: ["React.js", "Node.js", "MongoDB", "Google Maps API"],
      description: [
        "Designed an end-to-end SaaS solution for urban waste logistics featuring real-time GPS tracking and scheduling.",
        "Developed a secure RESTful API with JWT authentication and comprehensive error-handling middleware.",
      ],
      links: {
        live: "https://amarbin.com/",
      },
    },
    {
      id: "fair-cotton-bd",
      title: "Fair Cotton BD - Digital Transformation",
      period: "2024",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "SEO Optimization"],
      description: [
        "Led the full-cycle redesign and migration to Next.js, focusing on high-speed performance and search engine visibility.",
        "Implemented advanced UI animations and a mobile-first responsive layout to enhance brand authority.",
      ],
      links: {
        live: "https://fair-cotton-bd-2025.vercel.app/",
      },
    },
  ] as Project[],
  skills: [
    {
      category: "Frontend Ecosystem",
      items: [
        "React.js",
        "Next.js (App/Pages Router)",
        "TypeScript",
        "Redux Toolkit",
        "Context API",
        "Tailwind CSS",
        "Styled Components",
        "SASS",
        "Material UI",
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "Performance Optimization",
      ],
    },
    {
      category: "Tools & Methodology",
      items: [
        "Git",
        "GitHub",
        "GitLab",
        "Figma",
        "Adobe XD",
        "Agile/Scrum",
        "CI/CD Pipelines",
        "Unit Testing",
        "RESTful API Integration",
      ],
    },
    {
      category: "Backend & Database",
      items: ["Node.js", "Express.js", "MongoDB", "Firebase Authentication"],
    },
  ] as SkillCategory[],
  education: {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "American International University-Bangladesh (AIUB)",
    year: "2022",
    cgpa: "3.65 / 4.00",
  },
};

export type PortfolioData = typeof portfolioData;

