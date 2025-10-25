"use client"

import { Card } from "@/components/ui/card"

export default function Skills() {
  const skillCategories = [
    {
      category: "Backend Development",
      skills: ["PHP 8+", "Laravel 10", "REST API", "SOLID Principles", "MVC Architecture", "Filament Admin"],
    },
    {
      category: "Database & Caching",
      skills: ["MySQL", "Redis", "Query Optimization", "Database Design", "Caching Strategies"],
    },
    {
      category: "DevOps & Deployment",
      skills: ["Linux", "Nginx", "Docker", "GitHub Actions", "Horizon Queues", "CI/CD Pipelines"],
    },
    {
      category: "Frontend Fundamentals",
      skills: ["JavaScript", "Vue.js", "TailwindCSS", "HTML5", "CSS3", "Responsive Design"],
    },
    {
      category: "Tools & Documentation",
      skills: ["Swagger", "Postman", "Git", "GitHub", "VS Code", "Terminal"],
    },
    {
      category: "Soft Skills",
      skills: ["Problem Solving", "Team Leadership", "Code Review", "Mentoring", "Communication"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">Skills & Expertise</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card
              key={category.category}
              className="p-6 border-border hover:border-sky-400 transition-all duration-300 bg-background/50 backdrop-blur-sm"
            >
              <h3 className="text-lg font-bold mb-4 text-sky-400">{category.category}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-sky-400 rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
