"use client";

import { ArrowRight, Rocket } from "lucide-react";

export function BlogCTA() {
  return (
    <div className="my-16 relative overflow-hidden rounded-2xl bg-linear-to-r from-orange-500 to-amber-500 shadow-xl">
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative px-8 py-12 md:px-12 md:py-16 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-sm font-medium mb-4 backdrop-blur-sm">
            <Rocket className="w-4 h-4" />
            <span>Comece grátis hoje mesmo</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Transforme seu WhatsApp em uma máquina de vendas
          </h2>
          <p className="text-orange-50 text-lg leading-relaxed">
            Crie sua estratégia profissional em minutos. Sem complicações.
            Junte-se a quem confia na nossa expertise.
          </p>
        </div>

        <div className="shrink-0">
          <a
            href="/register"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 rounded-full font-bold text-lg shadow-lg hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Criar Estratégia Grátis
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="mt-4 text-center text-white/80 text-sm">
            Não requer cartão de crédito
          </div>
        </div>
      </div>
    </div>
  );
}

