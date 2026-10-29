import type { APIRoute } from 'astro';
import { pages, site } from '../data/site';

export const GET: APIRoute = () => new Response(
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.map(({ href }) => `<url><loc>${new URL(href, site.url).href}</loc></url>`).join('')}</urlset>`,
  { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
);
