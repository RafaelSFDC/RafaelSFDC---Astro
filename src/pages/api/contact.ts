export const prerender = false;

import type { APIRoute } from 'astro';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

// POST /api/contact — pronto pra Cloudflare.
// Hoje: mock (valida + log). Para ativar Resend, sete RESEND_API_KEY e descomente abaixo.
export const POST: APIRoute = async ({ request }) => {
  try {
    const data = contactSchema.parse(await request.json());
    console.log('Contact submission:', data);
    // const { Resend } = await import('resend');
    // const resend = new Resend(import.meta.env.RESEND_API_KEY);
    // await resend.emails.send({ from: 'contato@seu-dominio.com', to: 'rafaelsfcarvalho@outlook.com', subject: `Contato: ${data.name}`, text: `${data.message}\n\n${data.email}` });
    return Response.json({ success: true });
  } catch (e: any) {
    return Response.json({ success: false, error: e?.errors?.[0]?.message || 'Dados inválidos' }, { status: 400 });
  }
};
