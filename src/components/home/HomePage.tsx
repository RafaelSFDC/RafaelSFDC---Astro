"use client"

import { useEffect, useRef, useState } from "react"
import { SiteCard } from "@/components/site-card"
import { projects } from "@/data/projects"
import { sites } from "@/data/sites"
import { sistemas } from "@/data/sistemas"
import Hero5 from "@/components/hero"
import HeroHeader from "@/components/header"
import DownloadResume from "@/components/download-resume"
import {
  FolderKanban,
  Briefcase,
  Code2,
  Search,
  CheckCircle,
  ExternalLink,
  Eye,
  Mail,
  Smartphone,
  Kanban,
} from "lucide-react"
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiVuedotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiGit,
  SiFigma,
} from "react-icons/si"
import { TbApi, TbSeo } from "react-icons/tb"
import { ProjectLandingModal } from "@/components/project-landing-modal"
import type { ProjectDetails } from "@/types/project"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML / CSS", icon: SiHtml5 },
      { name: "JAVASCRIPT / TYPESCRIPT", icon: SiJavascript },
      { name: "REACT / NEXT.JS", icon: SiReact },
      { name: "VUE.JS", icon: SiVuedotjs },
      { name: "TAILWIND CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "NODE.JS / EXPRESS", icon: SiNodedotjs },
      { name: "PHP / LARAVEL", icon: SiPhp },
      { name: "POSTGRESQL / MONGODB", icon: SiPostgresql },
      { name: "REDIS / FIREBASE", icon: SiRedis },
      { name: "RESTful APIs", icon: TbApi },
    ],
  },
  {
    title: "Workflow",
    skills: [
      { name: "DOCKER / CI-CD", icon: SiDocker },
      { name: "GIT / GITHUB", icon: SiGit },
      { name: "UI/UX DESIGN (FIGMA)", icon: SiFigma },
      { name: "AGILE / SCRUM", icon: Kanban },
      { name: "SEO OPTIMIZATION", icon: TbSeo },
    ],
  },
]

export default function Home() {
  const revealRefs = useRef<(HTMLElement | null)[]>([])
  const [detailsProject, setDetailsProject] = useState<ProjectDetails | null>(null)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  const handleOpenDetails = (project: ProjectDetails) => {
    setDetailsProject(project)
    setIsDetailsOpen(true)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
          }
        })
      },
      { threshold: 0.1 }
    )

    revealRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }

  const SectionHeading = ({
    icon: Icon,
    children,
  }: {
    icon: React.ElementType
    children: string
  }) => (
    <div className="flex items-center gap-4 mb-12">
      <div className="text-surface-tint">
        <Icon size={32} />
      </div>
      <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg">
        {children}
      </h2>
    </div>
  )

  const FeaturedCard = ({ project }: { project: ProjectDetails }) => (
    <div className="glass-card rounded-2xl overflow-hidden group">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative overflow-hidden aspect-video lg:aspect-auto">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={800}
            height={600}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
        </div>
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech.name}
                className="px-3 py-1 bg-white/5 border border-white/10 rounded-full font-label-sm text-label-sm"
              >
                {tech.name}
              </span>
            ))}
          </div>
          <h3 className="font-headline-md text-headline-md mb-4">{project.title}</h3>
          <p className="text-on-surface-variant mb-8 leading-relaxed">
            {project.description}
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => handleOpenDetails(project)}
              aria-label={`Ver detalhes de ${project.title}`}
              className="px-6 py-3 bg-primary-container text-on-primary-container font-bold rounded-xl flex items-center gap-2 hover:brightness-110 transition-all text-sm"
            >
              <Eye className="size-4" /> Detalhes
            </button>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-white/20 hover:border-surface-tint/50 text-white font-bold rounded-xl flex items-center gap-2 transition-all text-sm"
              >
                <ExternalLink className="size-4" /> Online
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-background text-on-surface overflow-x-hidden selection:bg-surface-tint/30">
      <HeroHeader />

      <main className="relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1024px] glow-bg -z-10 pointer-events-none" />
        <div className="absolute top-[1536px] right-0 w-full h-[1024px] glow-bg -z-10 pointer-events-none opacity-50" />

        <Hero5 />

        {/* Projetos */}
        <section
          id="projetos"
          className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap"
        >
          <SectionHeading icon={FolderKanban}>Produtos SaaS</SectionHeading>

          <div className="grid grid-cols-1 gap-stack-lg" ref={addToRefs}>
            {projects.map((project) => (
              <FeaturedCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Trabalhos */}
        <section
          id="trabalhos"
          className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap"
        >
          <SectionHeading icon={Briefcase}>Trabalhos</SectionHeading>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter"
            ref={addToRefs}
          >
            {sites.map((site) => (
              <SiteCard
                key={site.id}
                project={site}
                badge="Cliente"
                onOpenDetails={() => handleOpenDetails(site)}
              />
            ))}
            {sistemas.map((sistema) => (
              <SiteCard
                key={sistema.id}
                project={sistema}
                badge="White Label"
                onOpenDetails={() => handleOpenDetails(sistema)}
              />
            ))}
          </div>
        </section>

        {/* Habilidades */}
        <section
          id="habilidades"
          className="py-section-gap bg-surface-container-lowest/50"
        >
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <SectionHeading icon={Code2}>Habilidades Técnicas</SectionHeading>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {skillCategories.map((category) => (
                <div
                  key={category.title}
                  className="glass-card p-10 rounded-2xl border-l-4 border-l-surface-tint"
                >
                  <h3 className="font-headline-md text-headline-md mb-8">{category.title}</h3>
                  <ul className="space-y-4 font-label-sm text-label-sm">
                    {category.skills.map((skill) => {
                      const Icon = skill.icon
                      return (
                        <li
                          key={skill.name}
                          className="flex items-center gap-3 text-on-surface hover:text-white transition-colors group"
                        >
                          <span className="size-5 flex items-center justify-center text-surface-tint shrink-0 group-hover:scale-110 transition-transform">
                            <Icon className="size-4" />
                          </span>
                          <span>{skill.name}</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section
          id="sobre"
          className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap"
        >
          <SectionHeading icon={Search}>Sobre</SectionHeading>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg">
            <div className="glass-card p-10 rounded-2xl">
              <h3 className="font-headline-md text-headline-md mb-6">Quem sou eu</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                Meu nome é{" "}
                <span className="text-white font-bold">Rafael</span> e sou
                Desenvolvedor Full-Stack com 6 anos de experiência como freelancer.
                Minha jornada começou pelo Front-End, onde descobri minha paixão por
                criar interfaces intuitivas e responsivas.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                Com o tempo, expandi para o Back-End, tornando-me capaz de construir
                aplicações completas e soluções robustas que realmente resolvem
                problemas de negócio e escalam conforme a necessidade.
              </p>
            </div>

            <div className="glass-card p-10 rounded-2xl">
              <h3 className="font-headline-md text-headline-md mb-6">Expertise &amp; Foco</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <CheckCircle className="size-6 text-surface-tint shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-1">Dashboards &amp; SaaS</h4>
                    <p className="text-on-surface-variant text-sm">
                      Criação de ecossistemas complexos com foco em UX e performance de dados.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <CheckCircle className="size-6 text-surface-tint shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-1">E-commerce de Alta Conversão</h4>
                    <p className="text-on-surface-variant text-sm">
                      Lojas online otimizadas para carregamento rápido e máxima conversão.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <CheckCircle className="size-6 text-surface-tint shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-1">Performance Web &amp; SEO</h4>
                    <p className="text-on-surface-variant text-sm">
                      Garanto que sua aplicação não seja apenas bonita, mas rápida e visível.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section
          id="contato"
          className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap mb-section-gap"
        >
          <div className="glass-card p-12 md:p-20 rounded-2xl text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full glow-bg opacity-30 pointer-events-none" />
            <h2 className="font-display-xl-mobile md:font-headline-lg text-display-xl-mobile md:text-headline-lg mb-8">
              Vamos Conversar?
            </h2>
            <p className="text-on-surface-variant max-w-xl mx-auto mb-12">
              Conte com quem já entregou 30+ projetos: SaaS, sistemas e sites
              que performam. Chama no email, no telefone ou no LinkedIn.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-12">
              <a
                href="mailto:rafaelsfcarvalho@outlook.com"
                className="flex flex-col items-center group"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:border-surface-tint/50 transition-colors">
                  <Mail className="size-8 text-surface-tint" />
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-1">
                  Email
                </span>
                <span className="font-headline-md text-2xl md:text-headline-md break-all group-hover:text-surface-tint transition-colors">
                  rafaelsfcarvalho@outlook.com
                </span>
              </a>

              <a
                href="tel:+5521979674045"
                className="flex flex-col items-center group"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:border-surface-tint/50 transition-colors">
                  <Smartphone className="size-8 text-surface-tint" />
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-1">
                  Telefone
                </span>
                <span className="font-headline-md text-headline-md group-hover:text-surface-tint transition-colors">
                  +55 (21) 97967-4045
                </span>
              </a>
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-6">
              <a
                href="https://github.com/RafaelSFDC"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white text-black font-bold rounded-xl flex items-center gap-2 hover:scale-105 transition-all"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/rafael-silva-ferreira-de-carvalho"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-white/20 font-bold rounded-xl flex items-center gap-2 hover:bg-white/5 transition-all"
              >
                LinkedIn
              </a>
              <DownloadResume />
            </div>
          </div>
        </section>
      </main>

      {detailsProject && (
        <ProjectLandingModal
          project={detailsProject}
          open={isDetailsOpen}
          onOpenChange={setIsDetailsOpen}
        />
      )}
    </div>
  )
}

