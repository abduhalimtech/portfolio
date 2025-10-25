"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            Abduhalim<br />
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Abdulhamidov
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground font-light">PHP Backend Developer</p>
        </div>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Building scalable, real-time APIs with Laravel, Redis and CI/CD — backed
          <br /> by 4 years of experience designing clean, production-grade architectures.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button asChild className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-6 text-lg">
            <a
              href="/cv.pdf"
              download
              aria-label="Download CV (PDF)"
            >
              Download CV
            </a>
          </Button>

          <Button
            onClick={scrollToContact}
            variant="outline"
            className="px-8 py-6 text-lg border-sky-500 text-sky-400 hover:bg-sky-500/10"
          >
            Contact Me
          </Button>
        </div>

        <div className="pt-12 animate-bounce">
          <ArrowDown className="mx-auto text-sky-400" size={24} />
        </div>
      </div>
    </section>
  )
}
