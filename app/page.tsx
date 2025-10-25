"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check system preference and localStorage
    const isDarkMode =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)
    setIsDark(isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    localStorage.setItem("theme", newIsDark ? "dark" : "light")
    if (newIsDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
