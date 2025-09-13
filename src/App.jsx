import React, { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  return (
    <div className="font-sans bg-gray-950 text-gray-100 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300">
    
      <Navbar theme={theme} setTheme={setTheme} />

 
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
