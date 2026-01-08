/**
 * Contact Page Layout
 * Adds metadata for the contact page since the page component is a client component
 */

import { Metadata } from "next";
import { portfolioData } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Contact - Tanvir Mahtab Rafat",
  description: `Get in touch with ${portfolioData.personal.name}. Have a project in mind or want to collaborate? Let's connect!`,
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

