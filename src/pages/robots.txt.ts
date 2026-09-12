export function GET(): Response {
  const site = import.meta.env.PUBLIC_APP_URL || 'https://rafaelsfcarvalho.vercel.app';
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${site}/sitemap-index.xml\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
