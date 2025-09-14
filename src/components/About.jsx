import React from "react";
import { motion } from "framer-motion";
import { Code, FileText, Presentation, Camera, Video, Image } from "lucide-react";
import SectionWrapper from "./SectionWrapper"; 

export default function About() {
  const skills = [
    { name: "HTML", icon: <Code size={20} /> },
    { name: "CSS", icon: <Code size={20} /> },
    { name: "Tailwind CSS", icon: <Code size={20} /> },
    { name: "MS Word", icon: <FileText size={20} /> },
    { name: "PowerPoint", icon: <Presentation size={20} /> },
    { name: "Canva", icon: <Image size={20} /> },
    { name: "Figma", icon: <Image size={20} /> },
    { name: "CapCut", icon: <Video size={20} /> },
    { name: "Video Editing", icon: <Video size={20} /> },
    { name: "Photography", icon: <Camera size={20} /> },
  ];

  const timeline = [
    {
      year: "2025",
      title: "BS Computer Science",
      place: "Comsats University Islamabad, Sahiwal Campus",
    },
    {
      year: "2024",
      title: "Internship Experience",
      place: "Virtual Internship Programs",
    },
    {
      year: "2023",
      title: "Front-End Development Journey",
      place: "Self-Learning / Practice Projects",
    },
  ];

  return (
    <SectionWrapper id="about" className="bg-gray-900/50">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12 text-indigo-400"
      >
        About Me
      </motion.h2>

    
      <div className="max-w-3xl sm:max-w-4xl mx-auto text-center mb-10 sm:mb-12">
        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
          Hi, I’m <span className="text-indigo-400 font-semibold">Faiza</span>, a passionate Front-End Developer and creative designer.
          I enjoy crafting modern, responsive, and user-friendly websites, while also exploring design, video editing, and photography. My goal is to turn ideas into beautiful and interactive experiences.
        </p>
      </div>

     
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 mb-12 sm:mb-16">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-800/40 backdrop-blur-lg rounded-xl p-3 sm:p-4 flex flex-col items-center justify-center hover:scale-105 transition shadow-md"
          >
            <div className="text-indigo-400 mb-1 sm:mb-2">{skill.icon}</div>
            <span className="text-xs sm:text-sm md:text-sm font-medium text-gray-200 text-center">{skill.name}</span>
          </motion.div>
        ))}
      </div>

      
      <div className="max-w-xl sm:max-w-2xl mx-auto relative border-l border-gray-700 pl-4 sm:pl-6 space-y-6 sm:space-y-8">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-3 w-3 h-3 rounded-full bg-indigo-400 top-1 sm:top-2"></div>
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-100">{item.title}</h3>
            <span className="text-xs sm:text-sm text-gray-400 block">
              {item.place} • {item.year}
            </span>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
