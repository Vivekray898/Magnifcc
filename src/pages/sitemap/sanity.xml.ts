// src/pages/sitemap/sanity.xml.ts
import type { APIRoute } from "astro";
import { client, type SitemapUrl } from "../../lib/sanity";

export const GET: APIRoute = async ({ site }) => {
  try {
    const baseUrl = site?.href.replace(/\/$/, '') || 'https://your-domain.com';

    // Fetch all content types with slugs
    const [services, blogPosts, categories] = await Promise.all([
      client.fetch(`
        *[_type == "servicesDetails" && defined(slug.current)] {
          slug,
          _updatedAt
        }
      `),
      client.fetch(`
        *[_type == "blogPost" && defined(slug.current)] {
          slug,
          _updatedAt
        }
      `),
      client.fetch(`
        *[_type == "category" && defined(slug.current)] {
          slug,
          _updatedAt
        }
      `)
    ]);

    // Build URLs
    const urls: SitemapUrl[] = [];

    // Services
    services.forEach((item: any) => {
      urls.push({
        loc: `${baseUrl}/services/${item.slug.current}`,
        lastmod: item._updatedAt,
        priority: 0.8,
        changefreq: 'weekly'
      });
    });

    // Blog posts
    blogPosts.forEach((item: any) => {
      urls.push({
        loc: `${baseUrl}/blog/${item.slug.current}`,
        lastmod: item._updatedAt,
        priority: 0.7,
        changefreq: 'weekly'
      });
    });

    // Categories (if you have them)
    categories.forEach((item: any) => {
      urls.push({
        loc: `${baseUrl}/category/${item.slug.current}`,
        lastmod: item._updatedAt,
        priority: 0.6,
        changefreq: 'weekly'
      });
    });

    // Handle empty sitemap
    if (urls.length === 0) {
      return new Response(
        `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- No content found with slugs -->
</urlset>`,
        {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        }
      );
    }

    // Generate XML
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${new Date(url.lastmod).toISOString()}</lastmod>
    <priority>${url.priority || 0.7}</priority>
    <changefreq>${url.changefreq || 'weekly'}</changefreq>
  </url>`).join('')}
</urlset>`;

    return new Response(xml, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600"
      }
    });

  } catch (error) {
    console.error('Error generating Sanity sitemap:', error);
    return new Response(
      `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Error generating sitemap -->
</urlset>`,
      {
        headers: {
          "Content-Type": "application/xml",
          "Cache-Control": "public, max-age=60"
        },
        status: 500
      }
    );
  }
};