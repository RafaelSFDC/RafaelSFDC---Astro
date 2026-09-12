import { z } from "zod";
import { newsletterSubscriptionSchema, type NewsletterSubscription } from "@/schemas/newsletter";

export interface SubscribeResult {
  success: boolean;
  message: string;
  alreadySubscribed?: boolean;
}

// Mock client-safe (mesmo comportamento do Next)
// Para ativar envio real, chame POST /api/newsletter
export async function subscribeToNewsletter(data: NewsletterSubscription): Promise<SubscribeResult> {
  try {
    const validated = newsletterSubscriptionSchema.parse(data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Mock subscription:", validated);
    return { success: true, message: "Inscrição realizada com sucesso! Aproveite o conteúdo." };
  } catch (error: any) {
    console.error("Erro ao inscrever na newsletter:", error);
    if (error?.name === "ZodError") {
      return { success: false, message: error.errors?.[0]?.message || "Dados inválidos" };
    }
    return { success: false, message: "Erro ao processar inscrição. Tente novamente." };
  }
}

export async function checkNewsletterStatus(_email: string): Promise<boolean> {
  return false;
}

export { newsletterSubscriptionSchema };
export type { NewsletterSubscription };
