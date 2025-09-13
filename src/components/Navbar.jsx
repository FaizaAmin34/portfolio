import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 dark:bg-black/50 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-indigo-400">
          Faiza.dev
        </a>

        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li><a href="#about" className="hover:text-indigo-400">About</a></li>
          <li><a href="#projects" className="hover:text-indigo-400">Projects</a></li>
          <li><a href="#skills" className="hover:text-indigo-400">Skills</a></li>
          <li><a href="#contact" className="hover:text-indigo-400">Contact</a></li>
        </ul>

    
        <button
          className="md:hidden p-2 rounded-md text-gray-300 hover:text-indigo-400"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md">
          <ul className="flex flex-col gap-4 py-4 text-center">
            <li><a href="#about" className="block hover:text-indigo-400" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#projects" className="block hover:text-indigo-400" onClick={() => setIsOpen(false)}>Projects</a></li>
            <li><a href="#skills" className="block hover:text-indigo-400" onClick={() => setIsOpen(false)}>Skills</a></li>
            <li><a href="#contact" className="block hover:text-indigo-400" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
