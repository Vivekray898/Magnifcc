// src/pages/sitemap/static.xml.ts
import type { APIRoute } from "astro";

interface StaticRoute {
  path: string;
  priority?: number;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
}

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site?.href.replace(/\/$/, '') || 'https://your-domain.com';
  const now = new Date().toISOString();

  // Define your static routes here
  const staticRoutes: StaticRoute[] = [
    { path: '/', priority: 1.0, changefreq: 'daily' },
    { path: '/about', priority: 0.8, changefreq: 'weekly' },
    { path: '/contact', priority: 0.8, changefreq: 'weekly' },
    { path: '/services', priority: 0.9, changefreq: 'weekly' },
    { path: '/blog', priority: 0.9, changefreq: 'weekly' },
    { path: '/faq', priority: 0.6, changefreq: 'monthly' },
    { path: '/privacy-policy', priority: 0.3, changefreq: 'yearly' },
    { path: '/terms-of-service', priority: 0.3, changefreq: 'yearly' },
    { path: '/imprint', priority: 0.3, changefreq: 'yearly' },
  ];

  const urls = staticRoutes.map(route => ({
    loc: `${baseUrl}${route.path}`,
    lastmod: now,
    priority: route.priority || 0.7,
    changefreq: route.changefreq || 'weekly'
  }));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <priority>${url.priority}</priority>
    <changefreq>${url.changefreq}</changefreq>
  </url>`).join('')}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600"
    }
  });
};