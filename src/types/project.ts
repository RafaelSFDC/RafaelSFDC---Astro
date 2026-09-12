import type { LucideIcon } from "lucide-react"

export type ProjectStatus = "public" | "demo-only" | "private"

export type ProjectType = "saas" | "client" | "whitelabel"

export interface Technology {
  name: string
  icon?: LucideIcon
}

export interface ProjectResult {
  label: string
  value: string
}

export interface ProjectHighlight {
  title: string
  description: string
  icon?: string
}

export interface ProjectTestimonial {
  author: string
  role?: string
  text: string
}

export interface ProjectStep {
  step: number
  title: string
  description: string
}

export interface ProjectDetails {
  id: string
  title: string
  tagline?: string
  description: string
  longDescription: string
  image: string
  images?: string[]
  status: ProjectStatus
  type: ProjectType
  technologies: Technology[]
  demoUrl?: string
  codeUrl?: string
  contactUrl?: string
  landingPageUrl?: string
  features?: string[]
  challenges?: string[]
  results?: ProjectResult[]
  highlights?: ProjectHighlight[]
  testimonial?: ProjectTestimonial
  targetAudience?: string
  steps?: ProjectStep[]
  year: number
  category: string
  client?: string
}
