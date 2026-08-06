// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID || 'your-project-id';
const dataset = process.env.PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  // Use 'static' output for ISR
  output: 'static',
  adapter: vercel({
    isr: {
      // Enable ISR for these routes
      expiration: 60, // Cache for 60 seconds
    },
    // Enable image optimization
    imageService: true,
  }),
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    sanity({
      projectId: projectId,
      dataset: dataset,
      useCdn: import.meta.env.PROD,
      studioBasePath: '/admin',
    }),
    react(),
  ],
});