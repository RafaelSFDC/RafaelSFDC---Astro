import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath } from 'node:url';

const srcDir = fileURLToPath(new URL('./src', import.meta.url));

// https://astro.build/config
// Portfolio Rafael SFDC — Site 100% Estático (SSG)
export default defineConfig({
  site: process.env.PUBLIC_APP_URL || 'https://rafaelsfcarvalho.com',
  output: 'static',
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
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
