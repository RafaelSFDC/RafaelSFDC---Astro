import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const srcDir = fileURLToPath(new URL('./src', import.meta.url));

// https://astro.build/config
// Portfolio Rafael SFDC — migrado de Next.js 15
// Deploy: Cloudflare Workers/Pages (static por padrão = 100% compatível + grátis)
export default defineConfig({
  site: process.env.PUBLIC_APP_URL || 'https://rafaelsfcarvalho.vercel.app',
  output: 'static',
  adapter: cloudflare(),
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    mdx(),
    sitemap(),
  ],
  vite: {
    resolve: {
      alias: {
        '@': srcDir,
      },
    },
  },
});
