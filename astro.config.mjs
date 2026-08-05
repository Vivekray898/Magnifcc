// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';
import react from '@astrojs/react';

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID || 'your-project-id';
const dataset = process.env.PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
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