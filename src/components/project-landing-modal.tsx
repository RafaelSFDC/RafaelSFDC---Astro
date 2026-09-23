"use client"

import { useState, useCallback } from "react"
import type { ProjectDetails } from "@/types/project"
import { Dialog, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import {
  ExternalLink,
  Code,
  ChevronLeft,
  ChevronRight,
  Brain,
  Layout,
  Layers,
  Tag,
  Smartphone,
  FileText,
  Database,
  Github,
  MessageCircle,
  CheckCircle2,
  X,
  ArrowRight,
  Sparkles,
  Users,
  Zap,
} from "lucide-react"

// ─── Icon map for highlights ────────────────────────────────────────────────
const ICON_MAP: Record<string, React.ElementType> = {
  brain: Brain,
  layout: Layout,
  layers: Layers,
  tag: Tag,
  smartphone: Smartphone,
  "file-text": FileText,
  database: Database,
  github: Github,
  code: Code,
  users: Users,
  zap: Zap,
  sparkles: Sparkles,
}

// ─── WhatsApp URL Helper ──────────────────────────────────────────────────────
const getWhatsAppUrl = (projectTitle: string, type: "like_this" | "demo" | "acquire") => {
  const phone = "5521979674045"
  let text = ""
  if (type === "like_this") {
    text = `Olá Rafael! Vi o seu projeto "${projectTitle}" no seu portfólio e gostaria de desenvolver algo parecido para o meu negócio.`
  } else if (type === "demo") {
    text = `Olá Rafael! Vi o seu sistema white-label "${projectTitle}" no seu portfólio e gostaria de solicitar uma demonstração funcional.`
  } else if (type === "acquire") {
    text = `Olá Rafael! Tenho interesse em adquirir uma licença do seu sistema white-label "${projectTitle}" e gostaria de receber uma proposta personalizada.`
  }
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
}

// ─── Image Carousel ───────────────────────────────────────────────────────────
function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0)
  const hasMultiple = images.length > 1

  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length])

  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-black/40" style={{ aspectRatio: "16/9" }}>
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={i} className="relative h-full w-full flex-shrink-0">
            <img src={src || "/placeholder.svg"} alt={`${title} screenshot ${i + 1}`} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

      {hasMultiple && (
        <>
          <button
            onClick={prev}
            aria-label="Imagem anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 border border-white/10 flex items-center justify-center hover:bg-black/80 transition-all backdrop-blur-sm z-10"
          >
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>
          <button
            onClick={next}
            aria-label="Próxima imagem"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 border border-white/10 flex items-center justify-center hover:bg-black/80 transition-all backdrop-blur-sm z-10"
          >
            <ChevronRight className="w-4 h-4 text-white" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Ver imagem ${i + 1} de ${title}`}
                className={`h-1.5 rounded-full transition-all ${i === current ? "w-6 bg-[#FD4E27]" : "w-1.5 bg-white/40"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

// ─── Tech Stack Badges ─────────────────────────────────────────────────────────
function TechStack({ technologies }: { technologies: ProjectDetails["technologies"] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <Badge
          key={tech.name}
          className="rounded-full bg-[#FD4E27]/10 text-[#FD4E27] border border-[#FD4E27]/20 px-3 py-1 text-xs font-medium hover:bg-[#FD4E27]/20 transition-colors"
        >
          {tech.name}
        </Badge>
      ))}
    </div>
  )
}

// ─── Highlights Grid ──────────────────────────────────────────────────────────
function HighlightsGrid({ highlights }: { highlights: NonNullable<ProjectDetails["highlights"]> }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {highlights.map((h, i) => {
        const Icon = (h.icon && ICON_MAP[h.icon]) || Sparkles
        return (
          <div key={i} className="rounded-xl border border-white/8 bg-white/3 p-5 flex flex-col gap-3 hover:border-[#FD4E27]/30 transition-colors group">
            <div className="w-10 h-10 rounded-lg bg-[#FD4E27]/10 flex items-center justify-center group-hover:bg-[#FD4E27]/20 transition-colors">
              <Icon className="w-5 h-5 text-[#FD4E27]" />
            </div>
            <h4 className="font-semibold text-white text-sm">{h.title}</h4>
            <p className="text-white/50 text-xs leading-relaxed">{h.description}</p>
          </div>
        )
      })}
    </div>
  )
}

// ─── Section Title ─────────────────────────────────────────────────────────────
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xs font-semibold uppercase tracking-widest text-[#FD4E27]/70 mb-4 flex items-center gap-2">
      <span className="w-4 h-px bg-[#FD4E27]/50" />
      {children}
    </h3>
  )
}

// ─── CTA Button ───────────────────────────────────────────────────────────────
function CTAPrimary({ href, children, icon: Icon }: { href: string; children: React.ReactNode; icon?: React.ElementType }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#FD4E27] text-black font-bold text-sm rounded-xl hover:bg-[#FD4E27] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg"
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </a>
  )
}

function CTASecondary({ href, children, icon: Icon }: { href: string; children: React.ReactNode; icon?: React.ElementType }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2.5 px-6 py-3.5 border border-white/15 text-white font-medium text-sm rounded-xl hover:border-[#FD4E27]/40 hover:bg-[#FD4E27]/5 transition-all"
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </a>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// CONTENT: SaaS
// ═══════════════════════════════════════════════════════════════════════════════
function SaaSContent({ project }: { project: ProjectDetails }) {
  const isPublic = project.status === "public"
  const isDemoOnly = project.status === "demo-only"

  return (
    <div className="flex flex-col gap-10">
      {/* Carousel */}
      <ImageCarousel images={project.images?.length ? project.images : [project.image]} title={project.title} />

      {/* About */}
      <div>
        <SectionTitle>Sobre o Produto</SectionTitle>
        <p className="text-white/65 leading-relaxed text-sm md:text-base">{project.longDescription}</p>
      </div>

      {/* Highlights */}
      {project.highlights && project.highlights.length > 0 && (
        <div>
          <SectionTitle>Diferenciais</SectionTitle>
          <HighlightsGrid highlights={project.highlights} />
        </div>
      )}

      {/* Features */}
      {project.features && project.features.length > 0 && (
        <div>
          <SectionTitle>Funcionalidades</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {project.features.map((f, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#FD4E27] mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Stack */}
      <div>
        <SectionTitle>Stack Técnica</SectionTitle>
        <TechStack technologies={project.technologies} />
      </div>

      {/* CTA */}
      <div className="pt-2 border-t border-white/8 flex flex-wrap gap-3">
        {project.demoUrl && (
          <CTAPrimary href={project.demoUrl} icon={ExternalLink}>
            Ver Demo Online
          </CTAPrimary>
        )}
        {project.codeUrl && isPublic && (
          <CTASecondary href={project.codeUrl} icon={Code}>
            Ver Código Fonte
          </CTASecondary>
        )}
        {!project.demoUrl && !project.codeUrl && (
          <CTASecondary href={getWhatsAppUrl(project.title, "demo")} icon={MessageCircle}>
            Solicitar Demonstração
          </CTASecondary>
        )}
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// CONTENT: Client Project
// ═══════════════════════════════════════════════════════════════════════════════
function ClientContent({ project }: { project: ProjectDetails }) {
  return (
    <div className="flex flex-col gap-10">
      {/* Carousel */}
      <ImageCarousel images={project.images?.length ? project.images : [project.image]} title={project.title} />

      {/* Challenge / Context */}
      <div>
        <SectionTitle>O Desafio</SectionTitle>
        <p className="text-white/65 leading-relaxed text-sm md:text-base">{project.longDescription}</p>
      </div>

      {/* Deliverables */}
      {project.features && project.features.length > 0 && (
        <div>
          <SectionTitle>O que foi Entregue</SectionTitle>
          <div className="flex flex-col gap-2.5">
            {project.features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-3.5 rounded-lg border border-white/6 bg-white/2 hover:border-[#FD4E27]/20 transition-colors">
                <ArrowRight className="w-4 h-4 text-[#FD4E27] mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Testimonial */}
      {project.testimonial && (
        <div>
          <SectionTitle>Depoimento do Cliente</SectionTitle>
          <blockquote className="rounded-xl border border-[#FD4E27]/20 bg-[#FD4E27]/5 p-6 relative">
            <div className="absolute top-4 left-5 text-[#FD4E27]/30 text-5xl font-serif leading-none select-none">"</div>
            <p className="text-white/75 text-sm leading-relaxed italic pt-4 pl-4">{project.testimonial.text}</p>
            <footer className="mt-4 pl-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#FD4E27]/20 flex items-center justify-center text-[#FD4E27] text-xs font-bold">
                {project.testimonial.author.charAt(0)}
              </div>
              <div>
                <span className="text-white font-medium text-sm block">{project.testimonial.author}</span>
                {project.testimonial.role && (
                  <span className="text-white/40 text-xs">{project.testimonial.role}</span>
                )}
              </div>
            </footer>
          </blockquote>
        </div>
      )}

      {/* Stack */}
      <div>
        <SectionTitle>Tecnologias Utilizadas</SectionTitle>
        <TechStack technologies={project.technologies} />
      </div>

      {/* CTA */}
      <div className="pt-2 border-t border-white/8 flex flex-wrap gap-3">
        {project.demoUrl && (
          <CTAPrimary href={project.demoUrl} icon={ExternalLink}>
            Ver Projeto Online
          </CTAPrimary>
        )}
        <CTAPrimary href={getWhatsAppUrl(project.title, "like_this")} icon={MessageCircle}>
          Quero algo assim
        </CTAPrimary>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// CONTENT: White Label System
// ═══════════════════════════════════════════════════════════════════════════════
function WhiteLabelContent({ project }: { project: ProjectDetails }) {
  return (
    <div className="flex flex-col gap-10">
      {/* Carousel */}
      <ImageCarousel images={project.images?.length ? project.images : [project.image]} title={project.title} />

      {/* Target Audience */}
      {project.targetAudience && (
        <div>
          <SectionTitle>Para quem é</SectionTitle>
          <div className="flex items-start gap-4 p-5 rounded-xl border border-white/8 bg-white/3">
            <Users className="w-5 h-5 text-[#FD4E27] mt-0.5 flex-shrink-0" />
            <p className="text-white/70 text-sm leading-relaxed">{project.targetAudience}</p>
          </div>
        </div>
      )}

      {/* About */}
      <div>
        <SectionTitle>Sobre o Sistema</SectionTitle>
        <p className="text-white/65 leading-relaxed text-sm md:text-base">{project.longDescription}</p>
      </div>

      {/* Highlights */}
      {project.highlights && project.highlights.length > 0 && (
        <div>
          <SectionTitle>Por que escolher</SectionTitle>
          <HighlightsGrid highlights={project.highlights} />
        </div>
      )}

      {/* Incluso */}
      {project.features && project.features.length > 0 && (
        <div>
          <SectionTitle>O que está incluso</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {project.features.map((f, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#FD4E27] mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* How it works */}
      {project.steps && project.steps.length > 0 && (
        <div>
          <SectionTitle>Como funciona</SectionTitle>
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-[1.625rem] top-[18px] bottom-[18px] w-px bg-[#FD4E27]/20 hidden md:block" />
            <div className="flex flex-col gap-4">
              {project.steps.map((s) => (
                <div key={s.step} className="flex items-start gap-5 pl-0 md:pl-2">
                  <div className="w-9 h-9 rounded-full bg-[#0a1525] border border-[#FD4E27]/30 flex items-center justify-center text-[#FD4E27] font-bold text-sm flex-shrink-0 relative z-10">
                    {s.step}
                  </div>
                  <div className="pt-1.5">
                    <h4 className="font-semibold text-white text-sm mb-1">{s.title}</h4>
                    <p className="text-white/50 text-xs leading-relaxed">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Stack */}
      <div>
        <SectionTitle>Stack Técnica</SectionTitle>
        <TechStack technologies={project.technologies} />
      </div>

      {/* Landing Page Promotion Banner */}
      {project.landingPageUrl && (
        <div className="relative overflow-hidden rounded-xl border border-[#FD4E27]/30 bg-gradient-to-r from-[#FD4E27]/10 via-[#FD4E27]/5 to-transparent p-6 flex flex-col md:flex-row items-center justify-between gap-4 group">
          {/* Subtle background glow */}
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#FD4E27]/10 rounded-full blur-2xl group-hover:bg-[#FD4E27]/20 transition-all duration-500" />
          
          <div className="flex items-start gap-4 relative z-10">
            <div className="w-12 h-12 rounded-lg bg-[#FD4E27]/15 flex items-center justify-center flex-shrink-0 text-[#FD4E27]">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base mb-1">Página de Vendas & Demonstrador</h4>
              <p className="text-white/60 text-xs leading-relaxed max-w-md">
                Quer ver a página comercial com preços, comparativos completos e detalhes de licenciamento deste sistema?
              </p>
            </div>
          </div>
          
          <a
            href={project.landingPageUrl}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#FD4E27] text-black font-bold text-xs rounded-xl hover:bg-[#FD4E27] hover:scale-[1.03] active:scale-[0.97] transition-all relative z-10 whitespace-nowrap shadow-lg"
          >
            Acessar Landing Page <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      )}

      {/* CTA */}
      <div className="pt-2 border-t border-white/8 flex flex-col gap-4">
        <div className="rounded-xl border border-[#FD4E27]/20 bg-[#FD4E27]/5 p-5 text-center">
          <p className="text-white/60 text-sm mb-1">Sistema disponível para licenciamento white label</p>
          <p className="text-white font-semibold text-sm">Entre em contato para proposta personalizada</p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          <CTAPrimary href={getWhatsAppUrl(project.title, "demo")} icon={MessageCircle}>
            Solicitar Demonstração
          </CTAPrimary>
          <CTASecondary href={getWhatsAppUrl(project.title, "acquire")} icon={ArrowRight}>
            Quero Adquirir
          </CTASecondary>
          {project.codeUrl && project.status === "public" && (
            <CTASecondary href={project.codeUrl} icon={Code}>
              Ver Código Fonte
            </CTASecondary>
          )}
        </div>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN MODAL
// ═══════════════════════════════════════════════════════════════════════════════
interface ProjectLandingModalProps {
  project: ProjectDetails
  open: boolean
  onOpenChange: (open: boolean) => void
}

const TYPE_LABELS: Record<string, { label: string; color: string }> = {
  saas: { label: "Produto SaaS", color: "bg-violet-500/15 text-violet-300 border-violet-500/25" },
  client: { label: "Projeto de Cliente", color: "bg-emerald-500/15 text-emerald-300 border-emerald-500/25" },
  whitelabel: { label: "White Label", color: "bg-amber-500/15 text-amber-300 border-amber-500/25" },
}

const STATUS_LABELS: Record<string, { label: string; color: string }> = {
  public: { label: "Open Source", color: "bg-[#FD4E27]/10 text-[#FD4E27] border-[#FD4E27]/20" },
  "demo-only": { label: "Demo", color: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
  private: { label: "Privado", color: "bg-zinc-700/50 text-zinc-400 border-zinc-600/30" },
}

export function ProjectLandingModal({ project, open, onOpenChange }: ProjectLandingModalProps) {
  const typeLabel = TYPE_LABELS[project.type] || TYPE_LABELS.saas
  const statusLabel = STATUS_LABELS[project.status]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent hideCloseButton className="dialog-scroll bg-[#050505] border border-white/8 text-white w-full max-w-[calc(100vw-1.5rem)] sm:max-w-4xl max-h-[92vh] overflow-y-auto p-0 gap-0 rounded-2xl shadow-2xl shadow-black/80">
        {/* Hidden accessible title */}
        <DialogTitle className="sr-only">{project.title}</DialogTitle>

        {/* Header */}
        <div className="sticky top-0 z-20 px-6 py-4 border-b border-white/6 bg-[#050505]/95 backdrop-blur-xl flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            {/* Type + Status badges */}
            <div className="flex flex-wrap gap-2 mb-2">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider border ${typeLabel.color}`}>
                {typeLabel.label}
              </span>
              {project.status !== "private" && (
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider border ${statusLabel.color}`}>
                  {statusLabel.label}
                </span>
              )}
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-white leading-tight">{project.title}</h2>
            {project.tagline && (
              <p className="text-white/50 text-sm mt-1 leading-snug">{project.tagline}</p>
            )}
          </div>

          {/* Close button */}
          <DialogClose asChild>
            <button
              type="button"
              aria-label="Fechar modal"
              className="flex-shrink-0 w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/8 hover:border-white/20 transition-all"
            >
              <X className="w-4 h-4 text-white/60" />
            </button>
          </DialogClose>
        </div>

        {/* Body */}
        <div className="px-6 py-8">
          {project.type === "saas" && <SaaSContent project={project} />}
          {project.type === "client" && <ClientContent project={project} />}
          {project.type === "whitelabel" && <WhiteLabelContent project={project} />}
        </div>

        {/* Footer meta */}
        <div className="px-6 py-4 border-t border-white/6 flex items-center justify-between text-xs text-white/25">
          <span>{project.year} · {project.category}</span>
          {project.client && <span>Cliente: {project.client}</span>}
        </div>
      </DialogContent>
    </Dialog>
  )
}


