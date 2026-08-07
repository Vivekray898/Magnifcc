// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; // ✅ Use Vite plugin
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

const siteUrl = process.env.PUBLIC_SITE_URL || 'https://your-domain.com';

export default defineConfig({
  site: siteUrl,
  output: 'server',
  adapter: vercel({
    isr: {
      expiration: 60,
    },
  }),
  vite: {
    plugins: [tailwindcss()] // ✅ This works with Astro 7
  },
  integrations: [
    sanity({
      projectId: process.env.PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
      dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
      useCdn: false,
      studioBasePath: '/admin',
    }),
    react(),
  ],
});