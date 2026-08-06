// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID || 'your-project-id';
const dataset = process.env.PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  output: 'server', // Server-side rendering
  adapter: vercel({
    isr: {
      expiration: 60, // Optional: 60 second cache
    },
  }),
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    sanity({
      projectId: projectId,
      dataset: dataset,
      useCdn: false, // Disable CDN for fresh data
      studioBasePath: '/admin',
    }),
    react(),
  ],
});