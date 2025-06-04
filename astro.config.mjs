// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import db from '@astrojs/db';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [db(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'server', // Necesario para las API routes y middleware
});
