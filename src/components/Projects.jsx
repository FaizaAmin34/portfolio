import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A professional portfolio showcasing front-end skills, React & Tailwind CSS expertise, and creative UI designs.",
    },
    {
      title: "Generative AI Assistant",
      description:
        "An AI-powered tool that generates content, code snippets, and creative solutions using modern AI techniques.",
    },
    {
      title: "Presentation Design Templates",
      description:
        "Stylish MS PowerPoint templates and designs for professional presentations and reports.",
    },
    {
      title: "Web App Concepts",
      description:
        "Innovative project ideas and prototypes combining React, Tailwind CSS, and modern web technologies.",
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 bg-gray-900/50">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-indigo-400"
      >
        Projects
      </motion.h2>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 rounded-2xl p-4 sm:p-6 shadow-lg backdrop-blur-lg border border-gray-700/50 hover:scale-105 transition-transform"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm sm:text-base">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
