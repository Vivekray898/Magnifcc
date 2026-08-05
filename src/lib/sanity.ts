// src/lib/sanity.ts
import { createClient, type ClientConfig } from '@sanity/client';

const config: ClientConfig = {
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID!,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: import.meta.env.PROD,
};

export const client = createClient(config);