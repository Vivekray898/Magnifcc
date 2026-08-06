// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';
import react from '@astrojs/react';

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID || 'your-project-id';
const dataset = process.env.PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  // Remove 'hybrid' - use default 'static' or set to 'server'
  // For ISR with Vercel, you can use 'static' (default) or 'server'
  output: 'server', // Use 'server' for SSR/ISR, or remove for static
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
  // Add adapter for Vercel if using server output
  adapter: process.env.VERCEL ? (await import('@astrojs/vercel')).default() : undefined,
});