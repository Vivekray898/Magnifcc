// /workspaces/codespaces-blank/magnific/sanity.config.ts
import sanity from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemaTypes';

// Use import.meta.env instead of process.env for Astro
const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'your-project-id';
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';

export default sanity.defineConfig({
  name: 'default',
  title: 'Magnific Health CMS',

  projectId: projectId,
  dataset: dataset,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});