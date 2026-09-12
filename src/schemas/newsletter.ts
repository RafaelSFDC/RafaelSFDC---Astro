import { z } from "zod";

/**
 * Schema de validação para inscrição na newsletter
 */
export const newsletterSubscriptionSchema = z.object({
  name: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100, "Nome muito longo"),
  email: z.string().email("Email inválido"),
  source: z.string().optional(), // Ex: "blog-post-slug"
});

export type NewsletterSubscription = z.infer<
  typeof newsletterSubscriptionSchema
>;
