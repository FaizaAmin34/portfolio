import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-text"
      >
        Faiza
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-lg sm:text-xl md:text-2xl mt-3 sm:mt-4 font-medium text-gray-300"
      >
        Front-End Developer
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="mt-4 sm:mt-6 max-w-xs sm:max-w-md md:max-w-xl text-gray-400 text-sm sm:text-base"
      >
        Crafting modern, responsive & elegant web experiences.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
      >
        <a
          href="#about"
          className="px-5 sm:px-6 py-2 sm:py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition text-sm sm:text-base"
        >
          View Resume
        </a>
        <a
          href="#contact"
          className="px-5 sm:px-6 py-2 sm:py-3 rounded-lg border border-indigo-400 text-indigo-400 hover:bg-indigo-400/10 transition text-sm sm:text-base"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
