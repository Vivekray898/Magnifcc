// /workspaces/codespaces-blank/magnific/sanity.config.ts
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemaTypes';

// Use import.meta.env instead of process.env for Astro
const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'your-project-id';
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';

// Use type assertion to bypass the complex type checking
export default defineConfig({
  name: 'default',
  title: 'Magnific Health CMS',
  projectId: projectId,
  dataset: dataset,
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes as any, // Temporary fix for type issues
  },
} as any); // Temporary fix for the excessive stack depth error