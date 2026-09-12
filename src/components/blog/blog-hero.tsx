"use client";

import { TextEffect } from "@/components/ui/text-effect";
import { Badge } from "@/components/ui/badge";

export function BlogHero() {
  return (
    <div className="relative overflow-hidden py-24 lg:py-32">
      <div
        aria-hidden
        className="absolute inset-0 isolate -z-10 opacity-30 contain-strict"
      >
        <div className="absolute left-[20%] top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]" />
        <div className="absolute right-[20%] bottom-0 h-[600px] w-[600px] translate-x-1/2 rounded-full bg-blue-500/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="flex justify-center mb-6">
            <Badge
              variant="outline"
              className="rounded-full px-4 py-1.5 text-sm"
            >
              Conteúdo Exclusivo
            </Badge>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">
            <TextEffect as="span" preset="fade-in-blur" speedSegment={0.3}>
              Blog
            </TextEffect>{" "}
            <span className="text-primary">
              <TextEffect
                as="span"
                preset="fade-in-blur"
                speedSegment={0.3}
                delay={0.5}
              >
                Estratégico
              </TextEffect>
            </span>
          </h1>
          <TextEffect
            as="p"
            preset="fade-in-blur"
            delay={0.5}
            speedSegment={0.3}
            className="text-lg leading-8 text-muted-foreground"
          >
            Crie sua estratégia profissional em minutos. Sem complicações.
            Junte-se a quem confia na nossa expertise. para escalar sua loja
            online.
          </TextEffect>
        </div>
      </div>
    </div>
  );
}
