// src/lib/portfolio.ts
import { client } from './sanity';
import type { PortfolioDetail, PortfolioItem } from './sanity';

export async function getPortfolioSlugs() {
  const query = '*[_type == "portfolio"]{ slug }';
  return client.fetch(query);
}

export async function getPortfolioItems(start: number, end: number): Promise<PortfolioItem[]> {
  const query = `
    *[_type == "portfolio"] | order(_createdAt desc) [${start}...${end}] {
      _id,
      title,
      slug,
      category,
      description,
      client,
      timeframe,
      websiteLink,
      image {
        asset-> {
          url,
          metadata {
            lqip
          }
        }
      },
      bannerImage {
        asset-> {
          url,
          metadata {
            lqip
          }
        }
      },
      gallery[] {
        asset-> {
          url
        }
      },
      content,
      _updatedAt,
      _createdAt
    }
  `;
  return client.fetch(query);
}

export async function getTotalPortfolioItems(): Promise<number> {
  return client.fetch('count(*[_type == "portfolio"])');
}

export async function getPortfolioBySlug(slug: string): Promise<PortfolioDetail | null> {
  const query = `
    *[_type == "portfolio" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      category,
      description,
      client,
      timeframe,
      websiteLink,
      image {
        asset-> {
          url,
          metadata {
            lqip,
            dimensions {
              width,
              height
            }
          }
        }
      },
      bannerImage {
        asset-> {
          url,
          metadata {
            lqip,
            dimensions {
              width,
              height
            }
          }
        }
      },
      gallery[] {
        asset-> {
          url,
          metadata {
            lqip,
            dimensions {
              width,
              height
            }
          }
        }
      },
      content[] {
        ...,
        _type == "image" => {
          asset-> {
            url,
            metadata {
              lqip,
              dimensions {
                width,
                height
              }
            }
          }
        },
        _type == "block" => {
          ...,
          children[] {
            ...,
            _type == "span" => {
              text,
              marks
            }
          }
        }
      },
      _updatedAt,
      _createdAt
    }
  `;
  return client.fetch(query, { slug });
}

export async function getPortfolioPageData(page: number = 1, itemsPerPage: number = 12) {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  
  const [items, total] = await Promise.all([
    getPortfolioItems(start, end),
    getTotalPortfolioItems()
  ]);
  
  return {
    items,
    total,
    totalPages: Math.ceil(total / itemsPerPage),
    currentPage: page
  };
}