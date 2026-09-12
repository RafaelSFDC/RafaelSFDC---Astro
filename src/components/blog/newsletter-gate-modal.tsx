"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Mail, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  newsletterSubscriptionSchema,
  type NewsletterSubscription,
} from "@/schemas/newsletter";
import { subscribeToNewsletter } from "@/lib/newsletter-actions";
import { setNewsletterCookie } from "@/lib/newsletter-cookie";

interface NewsletterGateModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
  source?: string;
  contentType?: "pdf" | "audio";
}

export function NewsletterGateModal({
  open,
  onOpenChange,
  onSuccess,
  source,
  contentType = "pdf",
}: NewsletterGateModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<NewsletterSubscription>({
    resolver: zodResolver(newsletterSubscriptionSchema),
    defaultValues: {
      name: "",
      email: "",
      source: source || "",
    },
  });

  const onSubmit = async (data: NewsletterSubscription) => {
    setIsSubmitting(true);

    try {
      const result = await subscribeToNewsletter({
        ...data,
        source: source || "blog-content-gate",
      });

      if (result.success) {
        // Definir cookie
        setNewsletterCookie();

        // Mostrar sucesso
        setIsSuccess(true);

        toast.success(result.message, {
          description: result.alreadySubscribed
            ? "Você já tem acesso ao conteúdo!"
            : "Agora você tem acesso a todos os conteúdos premium!",
        });

        // Aguardar um pouco para mostrar a mensagem de sucesso
        setTimeout(() => {
          onOpenChange(false);
          setIsSuccess(false);
          form.reset();

          // Chamar callback de sucesso
          if (onSuccess) {
            onSuccess();
          }
        }, 1500);
      } else {
        toast.error("Erro ao inscrever", {
          description: result.message,
        });
      }
    } catch (error) {
      console.error("Erro ao inscrever:", error);
      toast.error("Erro ao processar inscrição", {
        description: "Tente novamente em alguns instantes.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contentTypeText = contentType === "pdf" ? "o PDF" : "o áudio";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Inscrição Confirmada!</h3>
            <p className="text-muted-foreground">
              Liberando acesso ao conteúdo...
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <DialogTitle className="text-center">
                Inscreva-se para acessar {contentTypeText}
              </DialogTitle>
              <DialogDescription className="text-center">
                Receba conteúdos exclusivos, dicas e estratégias diretamente no
                seu email. É grátis!
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 mt-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Seu nome completo"
                          {...field}
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="seu@email.com"
                          {...field}
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Inscrevendo...
                    </>
                  ) : (
                    <>
                      <Mail className="mr-2 h-4 w-4" />
                      Inscrever e Acessar
                    </>
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Ao se inscrever, você concorda em receber nossos emails. Você
                  pode cancelar a qualquer momento.
                </p>
              </form>
            </Form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

