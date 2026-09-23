"use client"

import { ExternalLink, Info, Globe } from "lucide-react"
import type { ProjectDetails } from "@/types/project"
import { useState } from "react"
import { ProjectLandingModal } from "@/components/project-landing-modal"

interface SiteCardProps {
  project: ProjectDetails
  badge?: "Cliente" | "White Label"
  onOpenDetails?: () => void
}

export function SiteCard({ project, badge, onOpenDetails }: SiteCardProps) {
  const [showDetails, setShowDetails] = useState(false)

  const handleOpen = () => {
    if (onOpenDetails) {
      onOpenDetails()
    } else {
      setShowDetails(true)
    }
  }

  return (
    <>
      <div className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={600}
            height={340}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
        </div>
        <div className="p-8 flex flex-col flex-grow">
          {badge && (
            <span
              className={`self-start mb-3 px-2.5 py-1 rounded-full border font-label-sm text-label-sm uppercase tracking-widest ${
                badge === "White Label"
                  ? "bg-surface-tint/10 border-surface-tint/25 text-surface-tint"
                  : "bg-white/5 border-white/10 text-on-surface-variant"
              }`}
            >
              {badge}
            </span>
          )}
          <h3 className="font-headline-md text-headline-md mb-2">{project.title}</h3>
          <p className="text-on-surface-variant mb-6 line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech.name}
                className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] font-label-sm uppercase tracking-wider"
              >
                {tech.name}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] font-label-sm uppercase tracking-wider text-zinc-300">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
          <div className="flex gap-3 mt-auto">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2.5 bg-primary-container text-on-primary-container font-bold rounded-xl flex items-center justify-center gap-2 hover:brightness-110 transition-all text-xs whitespace-nowrap"
              >
                <ExternalLink className="size-4" /> Visitar Site
              </a>
            )}
            {project.landingPageUrl && project.type !== "whitelabel" && (
              <a
                href={project.landingPageUrl}
                className="flex-1 px-4 py-2.5 bg-surface-tint text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:brightness-110 transition-all text-xs whitespace-nowrap"
              >
                <Globe className="size-4" /> Landing Page
              </a>
            )}
            <button
              onClick={handleOpen}
              aria-label={`Ver detalhes de ${project.title}`}
              className="flex-1 px-4 py-2.5 border border-white/20 hover:border-surface-tint/50 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all text-xs whitespace-nowrap"
            >
              <Info className="size-4" /> Detalhes
            </button>
          </div>
        </div>
      </div>

      {!onOpenDetails && (
        <ProjectLandingModal project={project} open={showDetails} onOpenChange={setShowDetails} />
      )}
    </>
  )
}
