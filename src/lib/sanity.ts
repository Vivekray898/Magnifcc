// src/lib/sanity.ts
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});

// Types
export interface SluggedDocument {
  slug: { current: string };
  _updatedAt: string;
}

export interface SitemapUrl {
  loc: string;
  lastmod: string;
  priority?: number;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
}