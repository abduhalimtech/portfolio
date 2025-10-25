import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import StoreBadges from "@/components/store-badges"
import projects from "@/data/projects.json"

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">Featured Projects</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.slug}
              className="group overflow-hidden border-border hover:border-sky-400 transition-all duration-300 hover:shadow-lg hover:shadow-sky-400/10 bg-background/50 backdrop-blur-sm flex flex-col"
            >
              <div className="p-6 space-y-4 flex-1 flex flex-col">
                <h3 className="text-xl font-bold group-hover:text-sky-400 transition-colors">{project.name}</h3>

                <p className="text-muted-foreground text-sm leading-relaxed">{project.summary}</p>

                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.impact.map((m) => (
                      <Badge key={m} variant="outline" className="text-xs text-sky-400 border-sky-400/30">
                        {m}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3 pt-4 border-t border-border mt-auto">
                  <Link href={`/projects/${project.slug}`}>
                    {/* <Button
                      variant="outline"
                      className="w-full text-sky-400 border-sky-400/30 hover:bg-sky-400/10 bg-transparent"
                    >
                      Case Study
                    </Button> */}
                  </Link>
                  <StoreBadges android={project.links.android} ios={project.links.ios} variant="compact" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
