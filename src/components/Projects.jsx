import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A professional portfolio showcasing front-end skills, React & Tailwind CSS expertise, and creative UI designs.",
      live: "https://portfolio-zeta-lilac-97.vercel.app/",
      github: "https://github.com/FaizaAmin34/portfolio",
    },
    {
      title: "Login Form",
      description:
        "A stylish and responsive login form built with React & Tailwind CSS, designed for modern authentication flows.",
   
      github: "https://github.com/FaizaAmin34/login-page",
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
    <SectionWrapper id="projects" className="bg-gray-900/50">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-indigo-400"
      >
        Projects
      </motion.h2>

      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 rounded-2xl p-4 sm:p-6 shadow-lg backdrop-blur-lg border border-gray-700/50 hover:scale-105 transition-transform flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-100">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base mb-4">
                {project.description}
              </p>
            </div>

            <div className="flex gap-3 mt-auto">
              {project.live && project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-2 text-sm rounded-lg bg-indigo-500/20 text-indigo-400 hover:bg-indigo-500/30 transition"
                >
                  <ExternalLink size={16} /> Live
                </a>
              )}
              {project.github && project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-2 text-sm rounded-lg bg-gray-700/40 text-gray-300 hover:bg-gray-700/60 transition"
                >
                  <Github size={16} /> Code
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
