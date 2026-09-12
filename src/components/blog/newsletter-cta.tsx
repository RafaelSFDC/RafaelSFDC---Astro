"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export function NewsletterCTA() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-primary/5 border py-16 px-6 md:px-12 md:py-24 my-16 lg:my-24">
       {/* Decorative circles */}
       <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
       <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center justify-center p-3 mb-6 rounded-2xl bg-primary/10 text-primary">
            <Mail className="h-6 w-6" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Receba dicas exclusivas de e-commerce e vendas
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
          Junte-se a mais de 5.000 empreendedores que recebem nossas newsletters semanais com estratégias práticas para vender mais.
        </p>
        
        <form className="mx-auto max-w-md flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
          <Input 
            type="email" 
            placeholder="Seu melhor e-mail" 
            className="bg-background h-12 text-base shadow-sm"
          />
          <Button type="submit" size="lg" className="h-12 px-8 font-semibold shadow-md shrink-0">
            Inscrever-se
          </Button>
        </form>
        <p className="mt-4 text-xs text-muted-foreground">
            Livre de spam. Cancele a inscrição quando quiser.
        </p>
      </div>
    </section>
  );
}
