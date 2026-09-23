"use client"

import { ExternalLink, Lock, Code, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { ProjectDetails } from "@/types/project"
import { useState } from "react"
import { ProjectLandingModal } from "@/components/project-landing-modal"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  project: ProjectDetails
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [showDetails, setShowDetails] = useState(false)

  const isPrivate = project.status === "private"
  const isDemoOnly = project.status === "demo-only"
  const isPublic = project.status === "public"

  return (
    <>
      <Card className="project-card group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-900/40 backdrop-blur-sm transition-all duration-350">
        {/* Project Image Wrapper */}
        <div className="relative h-[240px] w-full overflow-hidden lg:h-[280px]">
          {isPrivate && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/60 backdrop-blur-[2px]">
              <Lock className="h-10 w-10 text-orange-400/60 transition-transform duration-300 group-hover:scale-110" />
              <span className="mt-2 text-xs font-medium uppercase tracking-widest text-zinc-400">Acesso Restrito</span>
            </div>
          )}
          
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60" />
          
          <img
            src={project.image || "/placeholder.svg"}
            alt={`${project.title} Project`}
            width={600}
            height={400}
            className={cn(
              "project-image h-full w-full object-cover grayscale-[0.2] transition-all duration-700 group-hover:grayscale-0",
              isPrivate && "opacity-40"
            )}
          />
          
          {/* Hover Overlay Gradient */}
          <div className="absolute inset-0 z-10 bg-orange-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        <CardHeader className="relative z-20 space-y-1.5 pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CardTitle className="font-display text-xl font-bold tracking-tight text-zinc-100 md:text-2xl">{project.title}</CardTitle>
            </div>
            <div className="flex gap-1.5">
              {isPrivate && <Badge className="rounded-full bg-zinc-800 text-[10px] uppercase tracking-wider text-zinc-400 border-none">Privado</Badge>}
              {isDemoOnly && <Badge className="rounded-full bg-amber-500/10 text-[10px] uppercase tracking-wider text-amber-500 border border-amber-500/20">Demo</Badge>}
            </div>
          </div>
          <CardDescription className="line-clamp-2 text-sm leading-relaxed text-zinc-400">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="relative z-20 flex-grow">
          <div className="space-y-3">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 4).map((tech) => (
                <Badge 
                  key={tech.name} 
                  variant="outline" 
                  className="rounded-full bg-orange-500/5 px-2.5 py-0.5 text-[10px] font-medium text-orange-400/80 border-orange-500/20"
                >
                  {tech.name}
                </Badge>
              ))}
              {project.technologies.length > 4 && (
                <Badge variant="outline" className="rounded-full bg-zinc-800/50 px-2.5 py-0.5 text-[10px] font-medium text-zinc-300 border-zinc-700">
                  +{project.technologies.length - 4}
                </Badge>
              )}
            </div>
          </div>
        </CardContent>

        <CardFooter className="relative z-20 flex gap-2 pt-2 border-t border-zinc-800/50 mt-auto bg-zinc-950/20">
          <Button
            variant="ghost"
            size="sm"
            className="h-9 flex-1 rounded-full text-xs font-medium text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors"
            onClick={() => setShowDetails(true)}
          >
            <Info className="mr-1.5 h-3.5 w-3.5" /> Detalhes
          </Button>

          {isPrivate ? (
            <div className="flex h-9 flex-1 items-center justify-center rounded-full bg-zinc-800/40 text-[10px] font-medium uppercase tracking-wider text-zinc-300">
              <Lock className="mr-1.5 h-3 w-3" /> Privado
            </div>
          ) : (
            <div className="flex flex-1 gap-2">
              {project.demoUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  className="h-9 flex-1 rounded-full border-orange-500/20 bg-orange-500/5 text-xs font-semibold text-orange-400 transition-all hover:bg-orange-500 hover:text-zinc-950 hover:border-orange-500"
                  asChild
                >
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-1.5 h-3.5 w-3.5" /> Online
                  </a>
                </Button>
              )}

              {project.codeUrl && isPublic && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-9 flex-1 rounded-full text-xs font-medium text-zinc-400 hover:bg-zinc-800 hover:text-white"
                  asChild
                >
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                    <Code className="mr-1.5 h-3.5 w-3.5" /> Código
                  </a>
                </Button>
              )}
            </div>
          )}
        </CardFooter>
      </Card>

      <ProjectLandingModal project={project} open={showDetails} onOpenChange={setShowDetails} />
    </>
  )
}


