import type { ProjectDetails } from "@/types/project";

export const projects: ProjectDetails[] = [
  {
    id: "kataly",
    type: "saas",
    title: "Kataly",
    tagline: "O Sistema Operacional para Negócios Digitais",
    description:
      "Plataforma SaaS all-in-one que unifica CRM, Vendas, Page Builder e IA em um único ecossistema — do zero à escala.",
    longDescription:
      "Kataly é o ecossistema completo para microempreendedores que precisam de potência enterprise sem a complexidade. A plataforma integra dashboard de gestão (Mission Control), editor visual de páginas drag-and-drop (Puck), assistente de IA nativo (Gemini) e automação de workflows — tudo em um só lugar. Com arquitetura SaaS multitenant em Next.js e Appwrite, escala do primeiro cliente até milhares.",
    image: "/optimized-app.webp",
    images: ["/optimized-app.webp"],
    status: "public",
    technologies: [
      { name: "Next.js" },
      { name: "Appwrite" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Gemini AI" },
      { name: "Stripe" },
    ],
    demoUrl: "https://kataly.com.br",
    codeUrl: "https://github.com/RafaelSFDC/kataly",
    features: [
      "Arquitetura SaaS Multitenant avançada",
      "Page Builder proprietário (Puck) drag-and-drop",
      "Assistente IA (Gemini) com 50+ skills especializadas",
      "Editor visual de automação de workflows",
      "CRM com pipeline de vendas e gestão de clientes",
      "Integrações com Mercado Pago, Stripe e Bling ERP",
      "Gestão de produtos físicos e digitais",
      "Dashboard Mission Control com 29+ módulos",
    ],
    results: [
      { label: "Módulos integrados", value: "29+" },
      { label: "Skills de IA", value: "50+" },
      { label: "Gateways de pagamento", value: "3" },
      { label: "Arquitetura", value: "Multitenant" },
    ],
    highlights: [
      {
        title: "IA Native First",
        description: "Assistente Gemini embutido com 50+ skills especializadas para automação e insights em tempo real.",
        icon: "brain",
      },
      {
        title: "Page Builder Visual",
        description: "Editor drag-and-drop proprietário (Puck) para criar landing pages e storefronts sem código.",
        icon: "layout",
      },
      {
        title: "All-in-one SaaS",
        description: "CRM, E-commerce, Automação e Dashboard em um único produto — elimina a necessidade de 5+ ferramentas.",
        icon: "layers",
      },
    ],
    challenges: [
      "Implementação de sistema de cache Local-First",
      "Desenvolvimento de motor de renderização dinâmico",
      "Integração de múltiplos gateways e APIs de ERP",
      "Criação de assistente IA com contexto em tempo real",
    ],
    year: 2024,
    category: "SaaS / E-commerce",
  },
  {
    id: "unilink",
    type: "saas",
    title: "UniLink",
    tagline: "Gestão Acadêmica Completa para Instituições de Ensino",
    description:
      "Dashboard universitário completo para gestão acadêmica, com controle de alunos, disciplinas e relatórios inteligentes.",
    longDescription:
      "UniLink simplifica a administração acadêmica de ponta a ponta — do cadastro de alunos à emissão de relatórios de desempenho. A plataforma oferece gestão de turmas, controle de frequência, notas e um painel intuitivo para coordenadores e professores. Construído com Laravel + React para máxima performance em grandes volumes de dados.",
    image: "/unilink-home.png",
    images: ["/unilink-home.png"],
    status: "public",
    technologies: [
      { name: "Laravel" },
      { name: "React" },
      { name: "MySQL" },
      { name: "Tailwind CSS" },
      { name: "TypeScript" },
    ],
    codeUrl: "https://github.com/RafaelSFDC/unilink",
    features: [
      "Gestão completa de alunos e professores",
      "Controle de disciplinas e turmas",
      "Relatórios de desempenho acadêmico",
      "Interface responsiva e moderna",
      "Autenticação e controle de acesso granular",
    ],
    results: [
      { label: "Módulos", value: "8+" },
      { label: "Stack", value: "Full-Stack" },
      { label: "Performance", value: "Alta" },
      { label: "Acesso", value: "Open Source" },
    ],
    highlights: [
      {
        title: "Full-Stack Laravel + React",
        description: "Arquitetura robusta com backend Laravel e frontend React para máxima performance e escalabilidade.",
        icon: "code",
      },
      {
        title: "Gestão Centralizada",
        description: "Todos os dados acadêmicos em um painel — alunos, professores, notas, turmas e relatórios.",
        icon: "database",
      },
      {
        title: "Open Source",
        description: "Código aberto para referência, estudo e colaboração da comunidade.",
        icon: "github",
      },
    ],
    challenges: [
      "Modelagem de banco de dados relacional complexo",
      "Integração de múltiplos módulos acadêmicos",
      "Performance em consultas de grande volume",
    ],
    year: 2024,
    category: "Sistema de Gestão",
  },
];
