import { projects } from "@/data/projects"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Code2, Database, ShieldCheck, Server } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Fallback image if a project doesn't have a specific image
import fallback_image from "@/app/asset/banner.png"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  // Use the specific project image if we had one, otherwise fallback to the banner
  const displayImage = project.detailsImage || project.image || fallback_image;
  const isStaticImage = typeof displayImage !== 'string';

  return (
    <main className="min-h-screen bg-bg-main pt-40 pb-24">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        
        {/* Back Navigation */}
        <Link href="/#projects">
          <Button variant="ghost" className="gap-2 -ml-4 text-text-main/70 hover:text-primary">
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Button>
        </Link>
 
        {/* Header */}
        <div className="space-y-6">
          <h1 className="font-sans text-4xl md:text-6xl font-extrabold text-text-main">
            {project.title}
          </h1>
          <p className="font-body text-xl text-text-main/80 leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map(tag => (
              <Badge key={tag} variant="secondary" className="text-sm py-1.5 px-3">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            {project.liveLink && project.liveLink !== "#" && (
              <a href={project.liveLink} target="_blank" rel="noreferrer">
                <Button size="lg" className="gap-2 rounded-lg">
                  <ExternalLink className="w-5 h-5" /> Live Website
                </Button>
              </a>
            )}
            {project.clientRepo && project.clientRepo !== "#" && (
              <a href={project.clientRepo} target="_blank" rel="noreferrer">
                <Button variant="outline" size="lg" className="gap-2 rounded-lg border-primary/20">
                  <Code2 className="w-5 h-5" /> Client Code
                </Button>
              </a>
            )}
            {project.serverRepo && project.serverRepo !== "#" && (
              <a href={project.serverRepo} target="_blank" rel="noreferrer">
                <Button variant="outline" size="lg" className="gap-2 rounded-lg border-primary/20">
                  <Server className="w-5 h-5" /> Server Code
                </Button>
              </a>
            )}
          </div>
        </div>

        <div className="relative w-full h-[250px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-primary/10 shadow-2xl bg-bg-surface">
          <Image 
            src={displayImage} 
            alt={`${project.title} preview`}
            fill
            className="object-contain"
            placeholder={isStaticImage ? "blur" : undefined}
          />
        </div>

        {/* Dynamic Content Sections */}
        <div className="space-y-16 pt-8">
          
          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className="space-y-6">
              <h2 className="font-sans text-3xl font-bold text-text-main border-b border-primary/10 pb-4">
                🔥 Key Features
              </h2>
              <ul className="space-y-4">
                {project.features.map((feature, idx) => {
                  // Split the title and description if it follows the "Title: Description" format
                  const parts = feature.split(':');
                  const title = parts.length > 1 ? parts[0] + ':' : '';
                  const desc = parts.length > 1 ? parts.slice(1).join(':') : feature;
                  
                  return (
                    <li key={idx} className="flex gap-4 items-start">
                      <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <p className="font-body text-lg text-text-main/80">
                        {title && <strong className="text-text-main">{title}</strong>}
                        {desc}
                      </p>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}

          {/* Behind the Scenes / Learnings */}
          {project.behindTheScenes && (
            <div className="space-y-6">
              <h2 className="font-sans text-3xl font-bold text-text-main border-b border-primary/10 pb-4">
                🎯 Behind the Scenes & Learnings
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none font-body text-text-main/80 leading-relaxed bg-bg-surface p-8 rounded-2xl border border-primary/10">
                <p>{project.behindTheScenes}</p>
              </div>
            </div>
          )}

        </div>
      </div>
    </main>
  )
}
