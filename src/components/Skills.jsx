import React from "react";
import { motion } from "framer-motion";

export default function Skills() {

  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "Tailwind CSS", level: 85 },
    { name: "MS Word", level: 90 },
    { name: "PowerPoint", level: 88 },
    { name: "JavaScript", level: 70 },
    { name: "React", level: 65 },
    { name: "Leadership", level: 80 },
    { name: "Communication", level: 85 },
    { name: "Teamwork", level: 82 },
    { name: "Problem Solving", level: 78 },
    { name: "Creativity", level: 80 },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 bg-gray-900/40">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-indigo-400"
      >
        Skills
      </motion.h2>

      <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8 px-4 sm:px-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between mb-1 text-sm sm:text-base">
              <span className="font-medium">{skill.name}</span>
              <span className="text-indigo-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700/40 rounded-full h-3 sm:h-4">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="h-3 sm:h-4 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 shadow-lg"
              />
            </div>
          </motion.div>
        ))}
      </div>

   
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8 sm:mt-12 px-4 sm:px-6"
      >
        {[
          "React",
          "JavaScript",
          "GitHub",
          "Responsive Design",
          "Leadership",
          "Team Collaboration",
          "Creativity",
        ].map((tech, idx) => (
          <span
            key={idx}
            className="px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 hover:scale-105 transition"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
