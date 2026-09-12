"use client";

import { useState } from "react";
import { Mail, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface NewsletterBoxProps {
  title?: string;
  description?: string;
  className?: string;
}

export function NewsletterBox({
  title = "Receba conteúdo exclusivo",
  description = "Cadastre-se para receber dicas de e-commerce, tutoriais e novidades direto no seu email.",
  className,
}: NewsletterBoxProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setLoading(false);
    setSuccess(true);
    setEmail("");

    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <div
      className={cn(
        "my-12 rounded-2xl bg-linear-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/20 p-8 shadow-lg",
        className
      )}
    >
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-2">
          <Mail className="h-8 w-8 text-primary" />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>

        {success ? (
          <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400 font-medium">
            <CheckCircle2 className="h-5 w-5" />
            <span>Inscrição realizada com sucesso!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
              disabled={loading}
            />
            <Button type="submit" disabled={loading} className="sm:w-auto">
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Cadastrando...
                </>
              ) : (
                "Cadastrar"
              )}
            </Button>
          </form>
        )}

        <p className="text-xs text-muted-foreground">
          Sem spam. Cancele quando quiser.
        </p>
      </div>
    </div>
  );
}
