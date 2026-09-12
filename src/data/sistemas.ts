import type { ProjectDetails } from "@/types/project";

export const sistemas: ProjectDetails[] = [
  {
    id: "pedefacil",
    type: "whitelabel",
    title: "PedeFácil",
    tagline: "Cardápio digital e pedidos via WhatsApp para restaurantes — pronto para sua marca",
    description:
      "Sistema white label para restaurantes: cardápio digital, pedidos via WhatsApp, painel administrativo completo — tudo sob sua marca.",
    longDescription:
      "PedeFácil é um sistema completo e moderno para restaurantes que desejam digitalizar sua operação de pedidos — disponível para licenciamento sob a sua marca. A plataforma oferece um cardápio digital mobile-first, checkout integrado com WhatsApp, gestão de menu, categorias, produtos, variações, adicionais, preços, disponibilidade, importação/exportação CSV, cupons de desconto, zonas de entrega por bairro, relatórios operacionais e um painel administrativo completo com autenticação segura. Construído com TanStack Start, React 19, Drizzle ORM e Cloudflare D1/R2 para máxima performance e escalabilidade.",
    image: "/placeholder.svg",
    images: ["/placeholder.svg"],
    status: "private",
    technologies: [
      { name: "TanStack Start" },
      { name: "React 19" },
      { name: "TypeScript" },
      { name: "Drizzle ORM" },
      { name: "Tailwind CSS" },
      { name: "Cloudflare D1/R2" },
      { name: "Better Auth" },
    ],
    contactUrl: "#contato",
    landingPageUrl: "/pedefacil",
    targetAudience: "Restaurantes, delivery, lanchonetes e negócios de alimentação que precisam digitalizar seus pedidos, modernizar o cardápio e profissionalizar a operação via WhatsApp.",
    features: [
      "Cardápio digital mobile-first com categorias e produtos",
      "Variações e adicionais personalizáveis por produto",
      "Checkout integrado com WhatsApp estruturado",
      "Gestão completa de menu, preços e disponibilidade",
      "Importação e exportação de cardápio em CSV",
      "Cupons de desconto com validação server-side",
      "Zonas de entrega por bairro com taxas específicas",
      "Painel administrativo com autenticação segura",
      "Relatórios operacionais e exportação de dados",
      "Gestão de pedidos com status em tempo real",
      "Rastreamento público de pedidos com código de acesso",
      "Reuso de dados de cliente e endereço para pedidos recorrentes",
    ],
    highlights: [
      {
        title: "100% White Label",
        description: "Sua logo, suas cores, seu domínio. O sistema é entregue completamente personalizado para seu restaurante.",
        icon: "tag",
      },
      {
        title: "Mobile-First",
        description: "Interface projetada para dispositivos móveis —/cardápio e checkout otimizados para smartphone.",
        icon: "smartphone",
      },
      {
        title: "Integração WhatsApp",
        description: "Pedidos estruturados são enviados diretamente via WhatsApp com mensagem formatada pronta para envio.",
        icon: "message-circle",
      },
    ],
    steps: [
      {
        step: 1,
        title: "Entre em contato",
        description: "Agende uma demonstração e entenda como o sistema atende sua operação.",
      },
      {
        step: 2,
        title: "Personalização",
        description: "Adaptamos o sistema com sua identidade visual, cardápio e configurações de entrega.",
      },
      {
        step: 3,
        title: "Implantação",
        description: "Deploy na infraestrutura Cloudflare com domínio próprio e treinamento da equipe.",
      },
      {
        step: 4,
        title: "Suporte contínuo",
        description: "Suporte técnico dedicado e atualizações contínuas incluídos no plano.",
      },
    ],
    challenges: [
      "Implementação de cardápio digital com variações e adicionais complexos",
      "Integração estruturada com WhatsApp para pedidos",
      "Cálculo server-side de totais com zonas de entrega e cupons",
      "Arquitetura SaaS multi-tenant com Cloudflare D1/R2",
    ],
    year: 2025,
    category: "Sistema de Delivery",
  },
  {
    id: "aguia-help",
    type: "whitelabel",
    title: "Águia Help",
    tagline: "Sistema completo de gestão para serviços de guincho — pronto para sua marca",
    description:
      "Sistema white label para empresas de guincho e assistência veicular: checklist digital, fotos, assinaturas, geolocalização e relatórios em PDF — tudo sob sua marca.",
    longDescription:
      "Águia Help é um sistema robusto e completo para gerenciar serviços de guincho e assistência veicular — disponível para licenciamento sob a sua marca. A plataforma digitaliza todo o processo operacional: do registro do chamado com checklist multi-etapas, upload de fotos do veículo, assinatura digital do cliente, até a geração automática de relatórios em PDF. Tudo em tempo real, com painel administrativo completo.",
    image: "/placeholder.svg",
    images: ["/placeholder.svg"],
    status: "private",
    technologies: [
      { name: "Laravel" },
      { name: "React" },
      { name: "Inertia.js" },
      { name: "MySQL" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
    ],
    contactUrl: "#contato",
    targetAudience: "Empresas de guincho, assistências veiculares, frotas e seguradoras que precisam digitalizar e profissionalizar a gestão dos seus serviços de campo.",
    features: [
      "Checklist digital multi-etapas para serviços de guincho",
      "Upload e compressão automática de imagens (WebP)",
      "Assinatura digital do cliente e destinatário",
      "Geolocalização de origem e destino",
      "Relatórios em PDF com fotos e assinaturas",
      "Auto-salvamento do formulário",
      "Painel administrativo com CRUD completo",
      "Controle de acesso por permissões e papéis",
    ],
    highlights: [
      {
        title: "100% White Label",
        description: "Sua logo, suas cores, seu domínio. O sistema é entregue completamente personalizado para sua empresa.",
        icon: "tag",
      },
      {
        title: "Operação em Campo",
        description: "Interface mobile-first projetada para uso em campo — funciona em qualquer dispositivo, mesmo com sinal fraco.",
        icon: "smartphone",
      },
      {
        title: "Relatórios Profissionais",
        description: "Geração automática de relatórios em PDF com fotos, assinaturas e dados completos do serviço.",
        icon: "file-text",
      },
    ],
    steps: [
      {
        step: 1,
        title: "Entre em contato",
        description: "Agende uma demonstração e entenda como o sistema atende sua operação.",
      },
      {
        step: 2,
        title: "Personalização",
        description: "Adaptamos o sistema com sua identidade visual, fluxos e necessidades específicas.",
      },
      {
        step: 3,
        title: "Implantação",
        description: "Deploy completo na sua infraestrutura ou em cloud, com treinamento da equipe.",
      },
      {
        step: 4,
        title: "Suporte contínuo",
        description: "Suporte técnico dedicado e atualizações contínuas incluídos no plano.",
      },
    ],
    challenges: [
      "Implementação de upload otimizado com compressão WebP",
      "Formulário multi-etapas com auto-save",
      "Geração de PDF com dados dinâmicos e imagens",
      "Sincronização de dados em tempo real",
    ],
    year: 2025,
    category: "Sistema de Campo",
  },
  {
    id: "trevio",
    type: "whitelabel",
    title: "Trevio",
    tagline: "Plataforma de agência de viagens com operação completa, reservas e portal do fornecedor",
    description:
      "Sistema white label para agências de turismo e marketplaces de viagens: descoberta de destinos, reservas por data, checkout com Stripe, portal do cliente e do fornecedor.",
    longDescription:
      "Trevio é uma plataforma moderna e de alta performance para agências de viagens e marketplaces de turismo operarem de ponta a ponta. O sistema oferece calendário de disponibilidade dinâmico, precificação por data, checkout com Stripe, além de painéis especializados para Cliente (gerenciamento de itinerário e favoritos), Fornecedor (controle de produtos, reservas recebidas e repasses) e Administrador (auditoria financeira e governança). Construído com foco em cloud serverless utilizando TanStack Start, Better Auth, Drizzle ORM e Cloudflare D1/R2.",
    image: "/placeholder.svg",
    images: ["/placeholder.svg"],
    status: "private",
    technologies: [
      { name: "TanStack Start" },
      { name: "TanStack Router" },
      { name: "TypeScript" },
      { name: "Drizzle ORM" },
      { name: "Cloudflare D1/R2" },
      { name: "Better Auth" },
      { name: "Stripe Billing" },
    ],
    contactUrl: "#contato",
    targetAudience:
      "Agências de viagem, operadoras de turismo locais, marketplaces de passeios e profissionais do setor de viagens que necessitam de uma plataforma proprietária completa.",
    features: [
      "Busca de destinos e catálogo interativo de passeios/produtos",
      "Calendário de disponibilidade e precificação dinâmica por data",
      "Fluxo de reservas integrado com checkout seguro via Stripe",
      "Portal do Cliente: Itinerários personalizados dia a dia e favoritos",
      "Portal do Fornecedor: Gestão de catálogo, reservas recebidas e repasses",
      "Painel de Administração central para auditoria e governança de conteúdo",
      "Módulo de inteligência: alertas de preço de destinos e recomendações",
      "Autenticação robusta multitenant com Better Auth",
    ],
    highlights: [
      {
        title: "Arquitetura Marketplace",
        description:
          "Painéis independentes para clientes, fornecedores locais e administradores do sistema em um só lugar.",
        icon: "users",
      },
      {
        title: "TanStack Start & Router",
        description:
          "Desenvolvido sobre a stack mais moderna de React, oferecendo renderização SSR de alta velocidade e type-safety absoluto.",
        icon: "code",
      },
      {
        title: "Checkout Stripe Nativo",
        description:
          "Processamento de reservas, controle de reembolsos e relatórios de faturamento nativamente integrados.",
        icon: "zap",
      },
    ],
    steps: [
      {
        step: 1,
        title: "Entre em contato",
        description: "Agende uma conversa para avaliarmos seu modelo de negócio de viagens.",
      },
      {
        step: 2,
        title: "Identidade Visual & Configuração",
        description: "Personalizamos o sistema com a sua marca, logo, regras de repasse e moedas suportadas.",
      },
      {
        step: 3,
        title: "Setup & Integrações",
        description: "Realizamos o deploy na Cloudflare e conectamos sua conta Stripe e provedor de e-mail (Resend).",
      },
      {
        step: 4,
        title: "Operação Ativa",
        description: "A agência entra no ar com suporte dedicado para onboarding de fornecedores e controle operacional.",
      },
    ],
    challenges: [
      "Controle complexo de disponibilidade e inventário diário por produto",
      "Fluxo de repasse financeiro de reservas para múltiplos fornecedores",
      "Desenvolvimento de planejador de itinerários de viagem dia a dia colaborativo",
      "Estrutura Cloudflare Serverless compatível com processamento assíncrono",
    ],
    year: 2026,
    category: "Marketplace de Turismo",
  },
  {
    id: "lumina",
    type: "whitelabel",
    title: "Lumina",
    tagline: "CMS editorial moderno e open source construído sobre TanStack Start e Cloudflare",
    description:
      "CMS editorial completo para publicações e blogs: editor rich-text Tiptap, agendamento de posts, painel admin, comentários, assinantes e Stripe.",
    longDescription:
      "Lumina é um CMS editorial de alta performance, projetado para servir como base moderna de publicações e blogs corporativos. A plataforma vai muito além de um blog tradicional: conta com editor de conteúdo rich-text (Tiptap), fluxo editorial completo (rascunhos, agendamento via Cron e publicação), comentários com moderação, gestão de menus e redirects, além de integração inicial com Stripe para assinaturas de conteúdo premium e telemetria avançada com PostHog. Construído sobre TanStack Start, React 19, Better Auth, Drizzle ORM e otimizado para deploy serverless na Cloudflare (Workers, D1, R2).",
    image: "/placeholder.svg",
    images: ["/placeholder.svg"],
    status: "public",
    technologies: [
      { name: "TanStack Start" },
      { name: "React 19" },
      { name: "Better Auth" },
      { name: "Drizzle ORM" },
      { name: "Cloudflare D1/R2" },
      { name: "Tailwind CSS v4" },
      { name: "Stripe Billing" },
    ],
    contactUrl: "#contato",
    codeUrl: "https://github.com/RafaelSFDC/lumina",
    targetAudience:
      "Desenvolvedores, editoras de conteúdo, blogs corporativos e criadores de conteúdo que necessitam de uma base de publicação autohospedada, rápida e extensível.",
    features: [
      "CMS completo com gestão de posts, páginas, categorias e tags",
      "Editor de texto rico (Tiptap) com renderização em Markdown",
      "Moderação nativa de comentários e caixa de mensagens de contato",
      "Suporte a conteúdo premium com paywall integrado via Stripe",
      "Fluxo editorial avançado com publicação agendada via Cloudflare Crons",
      "Telemetria de uso e analytics comportamental integrado com PostHog",
      "SEO completo global e por página, com geração automática de sitemaps e RSS",
      "Gerenciamento dinâmico de menus de navegação e redirecionamentos",
    ],
    highlights: [
      {
        title: "Editor Visual & Tiptap",
        description:
          "Interface de escrita moderna com suporte a blocos ricos, embeds do YouTube, links e atalhos Markdown.",
        icon: "layout",
      },
      {
        title: "Cloudflare Serverless",
        description:
          "Banco D1, armazenamento R2 e Workers otimizados para custo operacional zero no plano gratuito da Cloudflare.",
        icon: "zap",
      },
      {
        title: "Autenticação e Funções",
        description:
          "Controle de acessos granular com Better Auth, cobrindo papéis de leitores, autores, moderadores e administradores.",
        icon: "users",
      },
    ],
    steps: [
      {
        step: 1,
        title: "Bifurcar o Repositório",
        description: "Faça o fork ou clone do repositório oficial no GitHub para iniciar sua customização.",
      },
      {
        step: 2,
        title: "Configuração de Variáveis",
        description: "Defina suas chaves locais e de produção para Better Auth, Stripe e Cloudflare em .env.local.",
      },
      {
        step: 3,
        title: "Implantação Automatizada",
        description: "Execute o comando de deploy para rodar as migrações no D1 e publicar seu Worker de forma imediata.",
      },
      {
        step: 4,
        title: "Painel & Produção",
        description: "Acesse o painel do seu CMS, configure o domínio próprio e gerencie suas publicações com liberdade.",
      },
    ],
    challenges: [
      "Integração do editor rich-text Tiptap com o pipeline de renderização SSR do TanStack Start",
      "Sincronização assíncrona de assinaturas Stripe com webhooks persistidos em Worker",
      "Processamento serverless compatível com o controle de compatibilidade nativa da Cloudflare",
    ],
    year: 2026,
    category: "CMS Editorial",
  },
];
