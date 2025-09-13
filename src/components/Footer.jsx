import React from "react";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-6 sm:py-8 mt-20 border-t border-gray-700/40 bg-gray-900/30 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-center md:text-left">
        
      
        <p className="text-gray-400 text-xs sm:text-sm md:text-sm">
          © {new Date().getFullYear()} Faiza. All rights reserved.
        </p>

       
        <div className="flex gap-4 sm:gap-6 mt-2 md:mt-0">
          <a
            href="https://github.com/FaizaAmin34"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition"
          >
            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition"
          >
            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
