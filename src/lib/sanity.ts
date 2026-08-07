// src/lib/sanity.ts
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.PUBLIC_SANITY_PROJECT_ID || 'jfu4zeql',
  dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
});

// Types
export interface SluggedDocument {
  slug: { current: string };
  _updatedAt: string;
  _createdAt: string;
  _id: string;
}

export interface SitemapUrl {
  loc: string;
  lastmod: string;
  priority?: number;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
}

export interface PortfolioImage {
  asset: {
    url: string;
    metadata?: {
      lqip?: string;
      dimensions?: {
        width: number;
        height: number;
      };
    };
  };
  alt?: string;
}

export interface PortfolioItem extends SluggedDocument {
  title: string;
  slug: { current: string };
  category: string;
  description: string;
  client?: string;
  timeframe?: string;
  websiteLink?: string;
  image: PortfolioImage;
  gallery?: PortfolioImage[];
  content?: any[];
  _updatedAt: string;
  _createdAt: string;
}

export interface PortfolioDetail extends PortfolioItem {
  client: string;
  timeframe: string;
  websiteLink: string;
  gallery: PortfolioImage[];
  content: any[];
}

export interface SocialLinks {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  youtube?: string;
}