"use client";

import { ArrowRight, Quote } from "lucide-react";

const stats = [
  { value: "6+", label: "Anos de Experiência" },
  { value: "30+", label: "Projetos Entregues" },
  { value: "2", label: "SaaS Próprios" },
];

const Hero5 = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-margin-mobile pt-32 pb-section-gap relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1024px] glow-bg -z-10 pointer-events-none" />

      <h1 className="font-body text-display-xl-mobile md:text-display-xl mb-6 max-w-4xl mx-auto text-balance">
        SaaS e sites que carregam rápido e convertem
        <span className="text-surface-tint animate-blink">_</span>
      </h1>

      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
        Sou Rafael, desenvolvedor full-stack há 6+ anos. Construo SaaS,
        sistemas e sites com performance, SEO técnico e foco em conversão —
        do MVP à escala.
      </p>

      <div className="flex flex-col sm:flex-row gap-stack-md">
        <a
          href="#contato"
          className="px-8 py-4 bg-primary-container text-on-primary-container font-bold rounded-xl flex items-center gap-2 hover:brightness-110 transition-all"
        >
          Entre em contato
          <ArrowRight className="size-5" />
        </a>
        <a
          href="#projetos"
          className="px-8 py-4 border border-white/20 hover:border-surface-tint/50 text-white font-bold rounded-xl transition-all"
        >
          Ver meus projetos
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mt-section-gap w-full max-w-4xl">
        {stats.map((stat) => (
          <div key={stat.label} className="glass-card p-8 rounded-2xl">
            <div className="font-headline-md text-headline-md text-surface-tint mb-2">
              {stat.value}
            </div>
            <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <figure className="mt-12 w-full max-w-3xl glass-card rounded-2xl px-8 py-7 text-center">
        <Quote className="size-6 text-surface-tint mx-auto mb-3" aria-hidden="true" />
        <blockquote className="font-body-lg text-body-lg text-on-surface leading-relaxed">
          “O site passou a imagem que precisávamos para fechar negócios maiores.”
        </blockquote>
        <figcaption className="mt-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
          Diretoria Promind · site corporativo —{" "}
          <a
            href="#trabalhos"
            className="text-surface-tint font-semibold normal-case tracking-normal hover:underline underline-offset-4"
          >
            ver cases de clientes
          </a>
        </figcaption>
      </figure>
    </section>
  );
};

export default Hero5;

