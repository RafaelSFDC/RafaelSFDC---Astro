"use client";

import { ArrowRight } from "lucide-react";

const stats = [
  { value: "6+", label: "Anos de Experiência" },
  { value: "30+", label: "Projetos Entregues" },
  { value: "Full-Stack", label: "React · Next.js · Laravel" },
];

const Hero5 = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-margin-mobile pt-32 pb-section-gap relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1024px] glow-bg -z-10 pointer-events-none" />

      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-surface-tint/30 bg-surface-tint/5 text-surface-tint mb-8 font-label-sm text-label-sm">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-surface-tint opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-surface-tint" />
        </span>
        Disponível para projetos
      </div>

      <h1 className="font-body text-display-xl-mobile md:text-display-xl mb-6 max-w-4xl mx-auto">
        Desenvolvo aplicações <br />
        de alta performance
        <span className="text-surface-tint animate-blink">_</span>
      </h1>

      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
        Sou Rafael, Desenvolvedor Full-Stack especializado em criar produtos digitais
        velozes, otimizados para SEO e focados em conversão. Transformo ideias
        complexas em código limpo e escalável.
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
    </section>
  );
};

export default Hero5;

