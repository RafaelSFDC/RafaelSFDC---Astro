import type { ProjectDetails } from "@/types/project"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Code, Calendar, Tag, Lightbulb, Award } from "lucide-react"

interface ProjectDetailsModalProps {
  project: ProjectDetails
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProjectDetailsModal({ project, open, onOpenChange }: ProjectDetailsModalProps) {
  const isPrivate = project.status === "private"
  const isDemoOnly = project.status === "demo-only"
  const isPublic = project.status === "public"

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-zinc-900 border-zinc-800 text-white max-w-3xl max-h-[90vh] overflow-y-auto custom-scrollbar">
        <DialogHeader>
          <div className="flex items-center gap-3 flex-wrap">
            <DialogTitle className="text-2xl">{project.title}</DialogTitle>
            {isPrivate && <Badge className="bg-zinc-700 text-zinc-300">Privado</Badge>}
            {isDemoOnly && <Badge className="bg-amber-600/20 text-amber-400 border-amber-500/30">Demo</Badge>}
          </div>
          <DialogDescription className="text-zinc-400">{project.description}</DialogDescription>
        </DialogHeader>

        <div className="relative h-64 md:h-80 w-full my-4 rounded-lg overflow-hidden">
          <img
            src={project.image || "/placeholder.svg"}
            alt={`${project.title} Project`}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium flex items-center gap-2 mb-2">
              <Lightbulb className="h-5 w-5 text-orange-400" />
              Sobre o Projeto
            </h3>
            <p className="text-zinc-300">{project.longDescription}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.features && (
              <div>
                <h3 className="text-lg font-medium flex items-center gap-2 mb-2">
                  <Award className="h-5 w-5 text-orange-400" />
                  Funcionalidades
                </h3>
                <ul className="list-disc list-inside text-zinc-300 space-y-1">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.challenges && (
              <div>
                <h3 className="text-lg font-medium flex items-center gap-2 mb-2">
                  <Lightbulb className="h-5 w-5 text-orange-400" />
                  Desafios
                </h3>
                <ul className="list-disc list-inside text-zinc-300 space-y-1">
                  {project.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2 items-center">
            <div className="flex items-center gap-1 text-zinc-400">
              <Calendar className="h-4 w-4" />
              <span>{project.year}</span>
            </div>

            <div className="flex items-center gap-1 text-zinc-400">
              <Tag className="h-4 w-4" />
              <span>{project.category}</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Tecnologias</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech.name} variant="outline" className="bg-transparent border-orange-500 text-orange-400">
                  {tech.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <DialogFooter className="flex flex-wrap gap-3 sm:justify-end">
          {isPrivate ? (
            <Button
              variant="outline"
              className="bg-zinc-800 text-zinc-400 border-zinc-700 hover:bg-zinc-700 cursor-not-allowed opacity-70"
              disabled
            >
              Acesso Restrito
            </Button>
          ) : (
            <>
              {project.demoUrl && (
                <Button
                  variant="outline"
                  className="bg-orange-500/10 text-orange-400 border-orange-500/20 hover:bg-orange-500/20"
                  asChild
                >
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Ver Online
                  </a>
                </Button>
              )}

              {/* Só mostra o código fonte se for público (não demo-only) */}
              {project.codeUrl && isPublic && (
                <Button
                  variant="outline"
                  className="bg-orange-500/10 text-orange-400 border-orange-500/20 hover:bg-orange-500/20"
                  asChild
                >
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                    <Code className="mr-2 h-4 w-4" /> Código Fonte
                  </a>
                </Button>
              )}
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}


