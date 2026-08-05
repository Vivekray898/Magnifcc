// /workspaces/codespaces-blank/magnific/sanity.cli.ts
import { defineCliConfig } from 'sanity/cli';

// CLI runs in Node.js, so process.env works here
const projectId = process.env.PUBLIC_SANITY_PROJECT_ID || 'your-project-id';
const dataset = process.env.PUBLIC_SANITY_DATASET || 'production';

export default defineCliConfig({
  api: {
    projectId: projectId,
    dataset: dataset,
  },
});