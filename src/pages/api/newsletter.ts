import type { APIRoute } from 'astro';
import { newsletterSubscriptionSchema } from '@/schemas/newsletter';

// POST /api/newsletter — pronto pra Cloudflare (mock por enquanto)
export const POST: APIRoute = async ({ request }) => {
  try {
    const data = newsletterSubscriptionSchema.parse(await request.json());
    console.log('Newsletter subscription:', data);
    return Response.json({ success: true, message: 'Inscrição realizada com sucesso! Aproveite o conteúdo.' });
  } catch (e: any) {
    return Response.json({ success: false, message: e?.errors?.[0]?.message || 'Dados inválidos' }, { status: 400 });
  }
};
