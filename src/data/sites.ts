import type { ProjectDetails } from "@/types/project";

export const sites: ProjectDetails[] = [
  {
    id: "escola-criativa",
    type: "client",
    title: "Escola Criativa",
    tagline: "Site institucional que converte visitantes em alunos",
    description:
      "Site institucional com apresentação de cursos, metodologia de ensino e área de matrículas online — projetado para conversão.",
    longDescription:
      "A Escola Criativa precisava de uma presença digital que comunicasse com clareza sua proposta pedagógica diferenciada e convertesse visitantes em alunos matriculados. O projeto incluiu arquitetura de informação focada em conversão, galeria de cursos, depoimentos de alunos e sistema de matrículas online integrado.",
    image: "/placeholder.svg",
    images: ["/placeholder.svg"],
    status: "private",
    technologies: [
      { name: "WordPress" },
      { name: "PHP" },
      { name: "MySQL" },
    ],
    demoUrl: "https://escolacriativa.com/",
    contactUrl: "#contato",
    client: "Escola Criativa",
    features: [
      "Galeria de cursos com fichas detalhadas",
      "Sistema de matrículas online",
      "Depoimentos de alunos integrados",
      "SEO técnico para posicionamento local",
      "Design responsivo mobile-first",
      "Formulário de contato e WhatsApp integrado",
    ],
    testimonial: {
      author: "Coordenação Escola Criativa",
      role: "Gestão",
      text: "O site trouxe uma identidade digital que reflete exatamente nossa proposta pedagógica. As matrículas online simplificaram muito nosso processo.",
    },
    year: 2023,
    category: "Site Institucional",
  },
  {
    id: "promind-consultoria",
    type: "client",
    title: "Promind Consultoria",
    tagline: "Presença digital premium para consultoria empresarial",
    description:
      "Site corporativo que posiciona a Promind como referência em consultoria, com design profissional e geração de leads integrada.",
    longDescription:
      "A Promind precisava de um site que transmitisse autoridade e credibilidade no mercado de consultoria empresarial. O projeto entregou um site corporativo com páginas institucionais completas, blog para geração de conteúdo e formulário de contato integrado — tudo otimizado para conversão e SEO.",
    image: "/placeholder.svg",
    images: ["/placeholder.svg"],
    status: "private",
    technologies: [
      { name: "WordPress" },
      { name: "PHP" },
      { name: "MySQL" },
    ],
    demoUrl: "https://promindconsultoria.com.br/",
    contactUrl: "#contato",
    client: "Promind Consultoria",
    features: [
      "Páginas institucionais com estrutura de autoridade",
      "Blog para marketing de conteúdo",
      "Formulário de contato e geração de leads",
      "Otimização SEO técnica e de conteúdo",
      "Design responsivo e profissional",
    ],
    testimonial: {
      author: "Diretoria Promind",
      role: "Gestão Comercial",
      text: "Profissionalismo total. O site passou a imagem que precisávamos para fechar negócios maiores. Recomendo muito.",
    },
    year: 2023,
    category: "Site Corporativo",
  },
  {
    id: "alucamp-maquinas",
    type: "client",
    title: "Alucamp Máquinas",
    tagline: "Catálogo digital que gera orçamentos 24/7",
    description:
      "Site com catálogo completo de máquinas para locação e sistema de solicitação de orçamento online — gerando leads mesmo fora do horário comercial.",
    longDescription:
      "A Alucamp precisava digitalizar seu processo comercial e permitir que clientes da construção civil solicitassem orçamentos a qualquer hora. O projeto entregou um catálogo digital completo com fichas técnicas de equipamentos, fotos de qualidade e sistema de solicitação de orçamento integrado que notifica a equipe em tempo real.",
    image: "/placeholder.svg",
    images: ["/placeholder.svg"],
    status: "private",
    technologies: [
      { name: "WordPress" },
      { name: "PHP" },
      { name: "MySQL" },
    ],
    demoUrl: "https://www.alucampmaquinas.com.br/",
    contactUrl: "#contato",
    client: "Alucamp Máquinas",
    features: [
      "Catálogo de máquinas com fichas técnicas detalhadas",
      "Sistema de solicitação de orçamento online",
      "Notificação em tempo real para equipe comercial",
      "Galeria de fotos de equipamentos",
      "SEO local para construção civil",
      "Design responsivo e de fácil navegação",
    ],
    year: 2023,
    category: "Site Institucional",
  },
];
