// src/lib/sanity.ts
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Sanity client configuration
export const client = createClient({
  projectId: process.env.PUBLIC_SANITY_PROJECT_ID || 'jfu4zeql',
  dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
});

// Image URL builder
const builder = imageUrlBuilder(client);

// Export urlFor function for generating image URLs
export const urlFor = (source: any) => builder.image(source);

// Helper function to get image URL with fallback
export const getImageUrl = (image: any, fallback: string = '', width?: number, height?: number) => {
  if (!image) return fallback;
  
  try {
    if (image?.asset?._ref || image?.asset?._id) {
      let builder = urlFor(image);
      if (width) builder = builder.width(width);
      if (height) builder = builder.height(height);
      return builder.url();
    }
    if (image?.asset?.url) {
      return image.asset.url;
    }
    if (typeof image === 'string') {
      return image;
    }
  } catch (error) {
    console.error('Error generating image URL:', error);
  }
  
  return fallback;
};

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
  bannerImage?: PortfolioImage;
  gallery?: PortfolioImage[];
  content?: any[];
  _updatedAt: string;
  _createdAt: string;
}

export interface PortfolioDetail extends PortfolioItem {
  client: string;
  timeframe: string;
  websiteLink: string;
  bannerImage?: PortfolioImage;
  gallery: PortfolioImage[];
  content: any[];
}

export interface SocialLinks {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  youtube?: string;
}