"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Code2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { projects } from "@/data/projects"

// Projects are now imported from @/data/projects

export function Projects() {
  return (
    <section id="projects" className="py-32 bg-bg-main relative">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        <div className="text-center space-y-4">
          <h2 className="font-sans text-4xl md:text-5xl font-extrabold text-text-main">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="font-body text-lg text-text-main/70 max-w-2xl mx-auto">
            A selection of my recent work demonstrating my ability to build complex, scalable applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:shadow-xl transition-shadow border-primary/20 bg-bg-surface overflow-hidden group">
                {project.image && (
                  <div className="relative w-full h-48 overflow-hidden bg-bg-surface border-b border-primary/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-sans">{project.title}</CardTitle>
                  <CardDescription className="font-body">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t border-primary/10 pt-6">
                  <div className="flex gap-2">
                    {project.clientRepo && project.clientRepo !== "#" && (
                      <a href={project.clientRepo} target="_blank" rel="noreferrer">
                        <Button variant="ghost" size="sm" className="gap-2">
                          <Code2 className="w-4 h-4" /> Code
                        </Button>
                      </a>
                    )}
                  </div>
                  <Link href={`/project/${project.slug}`}>
                    <Button size="sm" className="gap-2 group">
                      View Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
