"use client"

import { useState } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"

interface HeaderProps {
  isDark: boolean
  toggleTheme: () => void
}

export default function Header({ isDark, toggleTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="text-xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
          AA
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("about")} className="text-sm hover:text-sky-400 transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection("projects")} className="text-sm hover:text-sky-400 transition-colors">
            Projects
          </button>
          <button onClick={() => scrollToSection("skills")} className="text-sm hover:text-sky-400 transition-colors">
            Skills
          </button>
          <button onClick={() => scrollToSection("contact")} className="text-sm hover:text-sky-400 transition-colors">
            Contact
          </button>
        </div>

        {/* Theme Toggle and Mobile Menu */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2 hover:text-sky-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left py-2 hover:text-sky-400 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="block w-full text-left py-2 hover:text-sky-400 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left py-2 hover:text-sky-400 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
