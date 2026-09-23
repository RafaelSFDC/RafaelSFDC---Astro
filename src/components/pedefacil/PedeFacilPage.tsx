"use client";

import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  MessageCircle,
  Smartphone,
  Zap,
  Shield,
  BarChart3,
  Tag,
  Truck,
  Bell,
  CreditCard,
  Store,
  Star,
  ChevronDown,
  ExternalLink,
  ArrowRight,
  Check,
  XCircle,
} from "lucide-react";

// ─── Data ──────────────────────────────────────────────────────────────────
const features = [
  {
    icon: <Store className="w-6 h-6" />,
    title: "Cardápio Mobile-First",
    desc: "Navegação ultra-rápida sem download ou PDFs pesados.",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Pedidos Estruturados",
    desc: "Receba mensagens prontas de pedidos direto no seu WhatsApp.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Painel de Controle",
    desc: "Gestão completa de estoque, categorias e produtos.",
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Frete por Bairro",
    desc: "Configure taxas e pedido mínimo por bairro de entrega.",
  },
  {
    icon: <Tag className="w-6 h-6" />,
    title: "Cupons de Desconto",
    desc: "Crie cupons com limite de uso direto no servidor.",
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: "Alerta Sonoro de Pedidos",
    desc: "Notificações instantâneas com som para novos pedidos.",
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "PIX com Baixa Automática",
    desc: "Integração nativa com Asaas e Mercado Pago para QR Code.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Código 100% Seu",
    desc: "Hospede gratuitamente na Cloudflare de forma independente.",
  },
];

const comparison = [
  { label: "Custo Mensal", saas: "R$ 150 a R$ 299/mês", pd: "R$ 0 (Hospedagem Grátis)" },
  { label: "Propriedade do Código", saas: "Nenhuma (Alugado)", pd: "100% Sua (Código Fonte Incluso)" },
  { label: "Banco de Dados", saas: "Trancado na plataforma", pd: "Seu e Exportável em CSV" },
  { label: "Taxa de Escala", saas: "Cobra mais quando vende mais", pd: "Zero taxas adicionais" },
  { label: "Branding e Logo", saas: "Logotipo da plataforma no rodapé", pd: "100% White Label e Personalizado" },
];

const faqs = [
  {
    q: "Como funciona o modelo de licenciamento do PedeFacil?",
    a: "Você faz um pagamento único para adquirir o código-fonte e a licença de uso comercial do sistema. Uma vez adquirido, o sistema é seu para usar no seu restaurante sem nenhuma mensalidade, taxa de adesão ou limite de tempo.",
  },
  {
    q: "Não entendo de programação. Como faço para instalar?",
    a: "Se você não tem conhecimentos técnicos, oferecemos o serviço de Setup Concierge. Nós cuidamos de toda a configuração da hospedagem na Cloudflare, apontamos o seu domínio próprio (ex: cardapio.seurestaurante.com.br) e te entregamos o painel pronto para uso em até 48 horas.",
  },
  {
    q: "Quais são os custos de hospedagem após a compra?",
    a: "Se você hospedar na Cloudflare (usando D1 para banco de dados e R2 para imagens), o custo operacional é praticamente R$ 0. A Cloudflare oferece um plano gratuito extremamente generoso que atende com folga o volume de pedidos de um restaurante de médio/grande porte.",
  },
  {
    q: "Como funciona a integração com o WhatsApp?",
    a: "O PedeFacil pode funcionar de duas formas: no modo link direto (gratuito, abre o WhatsApp do cliente com a mensagem do pedido formatada pronta para enviar) ou no modo automático (utilizando a API oficial do Twilio para disparar as mensagens diretamente para o cliente, sem necessidade de clicar no link).",
  },
  {
    q: "O sistema aceita pagamentos online?",
    a: "Sim. O sistema possui integração nativa com gateways de pagamento como Asaas e Mercado Pago. Você pode receber via PIX (com geração automática de QR Code e chave copia e cola no checkout) ou cartão de crédito. O dinheiro vai direto para a sua conta do gateway, sem intermediários.",
  },
  {
    q: "Posso alterar o visual do cardápio?",
    a: "Sim. Por ser uma solução 100% white label e com o código fonte em mãos, você tem total controle sobre o design. O painel administrativo permite subir sua logomarca, configurar horários de funcionamento, pausar o cardápio e gerenciar taxas de entrega por bairro de forma simples.",
  },
];

const showcaseImages = [
  {
    src: "/home-page.webp",
    alt: "Cardápio digital do PedeFacil - Página Inicial",
    label: "Cardápio Mobile-First",
  },
  {
    src: "/buscar-page.webp",
    alt: "Busca rápida de produtos",
    label: "Busca Dinâmica",
  },
  {
    src: "/filter-pizzas.webp",
    alt: "Filtros por categorias e tags",
    label: "Filtros Personalizados",
  },
  {
    src: "/after-add-to-cart.webp",
    alt: "Fluxo de checkout e carrinho estruturado",
    label: "Carrinho & Checkout",
  },
];

// ─── Sections ──────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#como-funciona", label: "Como Funciona" },
    { href: "#showcase", label: "Showcase" },
    { href: "#vantagens", label: "Vantagens" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface-bright border-b border-outline-variant/20 shadow-sm">
      <nav className="container-max mx-auto gutter h-20 flex items-center justify-between">
        <a href="#" className="font-headline-md font-bold text-primary">
          PedeFacil
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-on-surface-variant font-label-md hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#cta"
            className="btn btn-primary btn-md !rounded-lg"
          >
            Adquirir Sistema
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-on-surface p-2"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-surface-bright border-t border-outline-variant/30">
          <div className="container-max mx-auto gutter py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-on-surface-variant font-body-md py-2 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container-max mx-auto gutter grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-6 z-10">
          <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container font-label-md rounded-full w-fit text-sm">
            Licença Vitalícia • Sem Assinatura • Código Próprio
          </span>
          <h1 className="font-headline-xl text-primary leading-tight">
            O cardápio digital profissional que é{" "}
            <span className="text-secondary">seu para sempre.</span>
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-lg">
            Esqueça aluguel e comissões. Compre a licença do código-fonte do PedeFacil, hospede você mesmo gratuitamente ou deixe que cuidamos de toda a infraestrutura.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="#modelos"
              className="btn btn-primary btn-lg shadow-lg"
            >
              Adquirir Sistema
            </a>
            <a
              href="#como-funciona"
              className="btn btn-outline btn-lg"
            >
              Como Funciona
            </a>
          </div>
        </div>

        <div className="relative order-first lg:order-last flex justify-center">
          <div className="absolute -inset-8 bg-primary-fixed blur-3xl opacity-20 rounded-full" />
          <div className="relative z-10 w-72 md:w-80">
            <div className="bg-surface-container rounded-[2rem] p-3 shadow-2xl border border-outline-variant/20">
              <div className="bg-white rounded-[1.5rem] overflow-hidden">
                <div className="bg-primary px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                      <Store className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-headline-sm text-sm">
                        Pizzaria do João
                      </p>
                      <p className="text-on-primary-container text-xs">
                        Aberto agora
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-tertiary-fixed/20 rounded-lg flex items-center justify-center text-lg">
                        🍕
                      </div>
                      <div>
                        <p className="font-headline-sm text-sm">
                          Pizza Margherita
                        </p>
                        <p className="text-on-surface-variant text-xs">
                          Queijo, molhinho...
                        </p>
                      </div>
                    </div>
                    <p className="font-headline-sm text-secondary text-sm">
                      R$ 45
                    </p>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-tertiary-fixed/20 rounded-lg flex items-center justify-center text-lg">
                        🍔
                      </div>
                      <div>
                        <p className="font-headline-sm text-sm">
                          Smash Burger
                        </p>
                        <p className="text-on-surface-variant text-xs">
                          Blend, queijo...
                        </p>
                      </div>
                    </div>
                    <p className="font-headline-sm text-secondary text-sm">
                      R$ 38
                    </p>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-tertiary-fixed/20 rounded-lg flex items-center justify-center text-lg">
                        🍟
                      </div>
                      <div>
                        <p className="font-headline-sm text-sm">
                          Batata Frita
                        </p>
                        <p className="text-on-surface-variant text-xs">
                          Porção grande...
                        </p>
                      </div>
                    </div>
                    <p className="font-headline-sm text-secondary text-sm">
                      R$ 22
                    </p>
                  </div>
                  <button className="w-full bg-whatsapp text-white py-3 rounded-xl font-headline-sm flex items-center justify-center gap-2 hover:bg-whatsapp-hover transition-all">
                    <MessageCircle className="w-4 h-4" />
                    Pedir via WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PainSection() {
  const pains = [
    {
      icon: <span className="material-symbols-outlined text-3xl">money_off</span>,
      title: "Mensalidades que nunca acabam",
      desc: "Sistemas tradicionais cobram aluguel eterno. Se você parar de pagar, perde o cardápio e todos os seus clientes cadastrados. Com o PedeFacil, você compra o sistema uma única vez.",
      color: "bg-error-container/20 text-error",
    },
    {
      icon: (
        <span className="material-symbols-outlined text-3xl">lock_open</span>
      ),
      title: "Dados trancados e dependência",
      desc: "No iFood ou plataformas alugadas, você não é dono dos dados. Aqui, o banco de dados é seu. Exporte seus clientes, pedidos e relatórios a qualquer momento com total liberdade.",
      color: "bg-tertiary-fixed/20 text-tertiary-fixed-dim",
    },
    {
      icon: (
        <span className="material-symbols-outlined text-3xl">
          bar_chart
        </span>
      ),
      title: "Limitações e taxas de escala",
      desc: "À medida que seu restaurante vende mais, plataformas cobram taxas por pedido ou te forçam a fazer upgrade de plano. Nosso sistema é ilimitado: o código roda no seu próprio servidor.",
      color: "bg-primary-fixed/20 text-primary-fixed",
    },
  ];

  return (
    <section className="bg-primary-container py-20">
      <div className="container-max mx-auto gutter">
        <div className="text-center mb-10">
          <h2 className="font-headline-lg text-surface-bright mb-2">
            Chega de pagar aluguel pelo seu cardápio
          </h2>
          <p className="font-body-md text-on-primary-container opacity-80">
            Por que o modelo de mensalidades (SaaS) não faz sentido para o seu delivery:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pains.map((p, i) => (
            <div
              key={i}
              className="bg-surface-container-lowest/5 p-6 rounded-xl border border-white/10 flex flex-col gap-3"
            >
              <div
                className={`w-12 h-12 rounded-full ${p.color} flex items-center justify-center`}
              >
                {p.icon}
              </div>
              <h3 className="font-headline-sm text-surface-bright">
                {p.title}
              </h3>
              <p className="font-body-sm text-on-primary-container">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      num: 1,
      title: "Adquira a Licença",
      desc: "Faça o pagamento único e receba acesso imediato ao código-fonte completo do sistema (TypeScript/Next.js/React).",
    },
    {
      num: 2,
      title: "Escolha a Instalação",
      desc: "Implante você mesmo na sua conta Cloudflare de forma gratuita, ou contrate nosso Setup Concierge para instalarmos em seu domínio próprio.",
    },
    {
      num: 3,
      title: "Venda sem limites",
      desc: "Cadastre seus produtos, configure suas taxas de entrega e comece a vender diretamente pelo WhatsApp, com PIX automático e sem comissão.",
    },
  ];

  return (
    <section className="py-20 bg-surface" id="como-funciona">
      <div className="container-max mx-auto gutter">
        <h2 className="font-headline-lg text-center text-primary mb-16">
          Como funciona o modelo de Código Próprio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-outline-variant/30 -z-0" />
          {steps.map((s) => (
            <div
              key={s.num}
              className="flex flex-col items-center text-center gap-3 relative z-10"
            >
              <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center text-secondary font-headline-md border-4 border-surface">
                {s.num}
              </div>
              <h3 className="font-headline-sm mt-2">{s.title}</h3>
              <p className="font-body-sm text-on-surface-variant max-w-xs">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % showcaseImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [active]);

  return (
    <section className="py-20 bg-surface-container-low" id="showcase">
      <div className="container-max mx-auto gutter">
        <div className="text-center mb-12">
          <h2 className="font-headline-lg text-primary mb-3">
            Veja o PedeFacil em ação
          </h2>
          <p className="font-body-md text-on-surface-variant max-w-xl mx-auto">
            Interface moderna, rápida e pensada para conversão. Seus clientes
            vão adorar pedir pelo celular.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg border border-outline-variant/20">
            <div className="relative aspect-video">
              <img
                src={showcaseImages[active].src}
                alt={showcaseImages[active].alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-white font-headline-sm">
                  {showcaseImages[active].label}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {showcaseImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === active
                    ? "bg-secondary w-8"
                    : "bg-outline-variant/40 hover:bg-outline-variant/60"
                }`}
              />
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
            {showcaseImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`relative aspect-video rounded-xl overflow-hidden border-2 transition-all ${
                  i === active
                    ? "border-secondary shadow-md"
                    : "border-outline-variant/20 opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesGrid() {
  return (
    <section className="py-20">
      <div className="container-max mx-auto gutter">
        <div className="text-center mb-12">
          <h2 className="font-headline-lg text-primary">
            Tudo o que você precisa para vender mais
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-sm border border-outline-variant/20 hover:border-secondary transition-all"
            >
              <div className="text-secondary mb-3">{f.icon}</div>
              <h4 className="font-headline-sm text-sm mb-1">{f.title}</h4>
              <p className="text-xs text-on-surface-variant leading-tight">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonTable() {
  return (
    <section className="py-20" id="vantagens">
      <div className="container-max mx-auto gutter">
        <h2 className="font-headline-lg text-center text-primary mb-16">
          PedeFacil vs Sistemas Alugados (SaaS)
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-surface-container-high">
                <th className="p-4 text-left font-headline-sm">Recurso</th>
                <th className="p-4 text-center font-headline-sm text-error">
                  Sistemas Alugados (SaaS)
                </th>
                <th className="p-4 text-center font-headline-sm text-secondary bg-secondary-container/20">
                  PedeFacil (Código Próprio)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/30">
              {comparison.map((row, i) => (
                <tr key={i}>
                  <td className="p-4 font-body-md font-bold">{row.label}</td>
                  <td className="p-4 text-center text-on-surface-variant">
                    {row.saas}
                  </td>
                  <td className="p-4 text-center text-secondary font-bold">
                    {row.pd}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function DeploymentOptions() {
  return (
    <section className="py-20 bg-surface-container" id="modelos">
      <div className="container-max mx-auto gutter">
        <h2 className="font-headline-lg text-center text-primary mb-3">
          Escolha como quer começar
        </h2>
        <p className="font-body-md text-center text-on-surface-variant max-w-xl mx-auto mb-16">
          Duas formas simples de ter o sistema rodando sob a sua própria marca, de acordo com o seu perfil.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Option 1: Self-Hosted */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant/20 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary-fixed/20 text-primary-fixed-dim flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-headline-md mb-3 text-primary">Autônomo (Self-Hosted)</h3>
              <p className="font-body-md text-on-surface-variant mb-6">
                Ideal para desenvolvedores, agências de tecnologia ou donos de restaurante com conhecimento em infraestrutura.
              </p>
              <ul className="space-y-3 font-body-sm text-on-surface-variant mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-secondary" /> Código-fonte completo (TypeScript/React)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-secondary" /> Manual de instalação detalhado passo a passo
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-secondary" /> Hospedagem grátis na Cloudflare (D1/R2)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-secondary" /> Independência total: sem taxas ou contratos
                </li>
              </ul>
            </div>
            <div>
              <hr className="border-outline-variant/30 my-6" />
              <div className="mb-6">
                <span className="text-sm text-on-surface-variant">Licença de Uso Comercial</span>
                <p className="font-headline-lg text-primary mt-1">Pagamento Único</p>
              </div>
              <a href="#cta" className="btn btn-outline btn-lg w-full">
                Adquirir Código Fonte
              </a>
            </div>
          </div>

          {/* Option 2: Setup Concierge */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border-2 border-secondary flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-secondary text-white text-xs px-4 py-1.5 rounded-bl-xl font-bold">
              MAIS POPULAR
            </div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-secondary-container/20 text-secondary-fixed flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-headline-md mb-3 text-primary">Setup Concierge</h3>
              <p className="font-body-md text-on-surface-variant mb-6">
                Ideal para donos de restaurante que desejam receber o sistema pronto para uso e com suporte completo de configuração.
              </p>
              <ul className="space-y-3 font-body-sm text-on-surface-variant mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-secondary" /> Tudo incluso na opção autônoma
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-secondary" /> Configuração da hospedagem Cloudflare por nós
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-secondary" /> Integração de domínio próprio e marca
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-secondary" /> Integração do WhatsApp e PIX automático
                </li>
              </ul>
            </div>
            <div>
              <hr className="border-outline-variant/30 my-6" />
              <div className="mb-6">
                <span className="text-sm text-on-surface-variant">Licença + Instalação Completa</span>
                <p className="font-headline-lg text-secondary mt-1">Taxa Única de Setup</p>
              </div>
              <a href="#cta" className="btn btn-primary btn-lg w-full">
                Solicitar Instalação
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AddonsSection() {
  const addons = [
    {
      title: "Módulo de WhatsApp Automatizado",
      desc: "Envio automático de status do pedido (Aprovado, Em Produção, Saiu para Entrega) direto no WhatsApp do cliente via API oficial, reduzindo o tempo de atendimento manual.",
      type: "Software & Automação",
    },
    {
      title: "Configuração de Analytics & Pixels",
      desc: "Instalação profissional de Meta Pixel, Google Analytics (GA4) e Google Tag Manager no seu checkout para registrar compras e otimizar campanhas de tráfego.",
      type: "Dados & Otimização",
    },
    {
      title: "Gestão de Tráfego Pago Local",
      desc: "Nossa equipe cria, gerencia e otimiza anúncios patrocinados no Instagram e Facebook direcionados a clientes em um raio de até 5km do seu restaurante, focando em vendas diárias.",
      type: "Serviço de Crescimento",
    },
  ];

  return (
    <section className="py-20 bg-white" id="addons">
      <div className="container-max mx-auto gutter">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-primary mb-3">
            Addons e Módulos de Expansão
          </h2>
          <p className="font-body-md text-on-surface-variant max-w-xl mx-auto">
            Eleve o nível do seu sistema de delivery com recursos de automação comercial e marketing prontos para integrar.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {addons.map((a, i) => (
            <div
              key={i}
              className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/30 flex flex-col justify-between hover:border-secondary transition-all"
            >
              <div>
                <span className="inline-block text-xs font-bold text-secondary bg-secondary-container/20 px-2.5 py-1 rounded-full mb-4">
                  {a.type}
                </span>
                <h4 className="font-headline-sm text-lg mb-2 text-primary">{a.title}</h4>
                <p className="font-body-sm text-on-surface-variant leading-relaxed">
                  {a.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
                <span className="text-xs text-on-surface-variant">Opcional sob consulta</span>
                <a href="#cta" className="text-xs font-bold text-secondary flex items-center gap-1 hover:opacity-85 transition-all">
                  Saber Mais <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-20" id="faq">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="font-headline-lg text-center text-primary mb-16">
          Dúvidas Frequentes
        </h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm border border-outline-variant/30 overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-headline-sm text-base">{f.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-on-surface-variant transition-transform ${
                    openIdx === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIdx === i && (
                <div className="px-5 pb-5 text-on-surface-variant font-body-md">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-20 bg-primary text-surface-bright" id="cta">
      <div className="container-max mx-auto gutter text-center flex flex-col items-center gap-6">
        <h2 className="font-headline-xl">
          Pronto para ter seu próprio sistema de delivery?
        </h2>
        <p className="font-body-lg opacity-80 max-w-2xl">
          Diga adeus às comissões abusivas e às assinaturas mensais. Adquira hoje mesmo a licença do PedeFacil e tenha o controle total do seu negócio.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
          <a
            href="#"
            className="btn btn-primary btn-lg shadow-xl"
          >
            Falar com Especialista
          </a>
          <a
            href="#modelos"
            className="btn btn-outline-light btn-lg"
          >
            Adquirir Licença do Código
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-surface-container-highest py-16">
      <div className="container-max mx-auto gutter flex flex-col md:flex-row justify-between items-center gap-6 border-b border-outline-variant/20 pb-8 mb-8">
        <div className="font-headline-sm font-bold text-on-surface">
          PedeFacil
        </div>
        <div className="flex gap-6">
          <a
            href="#"
            className="text-on-surface-variant font-label-md hover:text-primary transition-all"
          >
            Termos de Uso
          </a>
          <a
            href="#"
            className="text-on-surface-variant font-label-md hover:text-primary transition-all"
          >
            Privacidade
          </a>
          <a
            href="#"
            className="text-on-surface-variant font-label-md hover:text-primary transition-all"
          >
            Ajuda
          </a>
          <a
            href="#"
            className="text-on-surface-variant font-label-md hover:text-primary transition-all"
          >
            Contato
          </a>
        </div>
      </div>
      <div className="container-max mx-auto gutter flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-body-sm text-on-surface-variant">
          &copy; 2025 PedeFacil. Todos os direitos reservados.
        </p>
        <div className="flex gap-3">
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-on-surface/5 flex items-center justify-center text-on-surface-variant hover:text-primary transition-all"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-on-surface/5 flex items-center justify-center text-on-surface-variant hover:text-primary transition-all"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────
export default function PedeFacilPage() {
  return (
    <div className="min-h-screen bg-background text-on-surface overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <PainSection />
        <HowItWorks />
        <Showcase />
        <FeaturesGrid />
        <ComparisonTable />
        <DeploymentOptions />
        <AddonsSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
