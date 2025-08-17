import { NextResponse } from 'next/server';

// Define all routes with their priorities and update frequencies
const routes = [
  // Homepage
  {
    url: '',
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1.0,
  },
  // Main pages
  {
    url: '/about',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  },
  {
    url: '/services',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  },
  {
    url: '/contact',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  },
  {
    url: '/insights',
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  },
  {
    url: '/schedule-consultation',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  },
  {
    url: '/ma-advisory',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  },
  // Legal pages
  {
    url: '/privacy',
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  },
  {
    url: '/terms',
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  },
  {
    url: '/compliance',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  },
  // Service pages (both /app/ and /app/services/ routes)
  {
    url: '/venture-capital-introduction',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  },
  {
    url: '/services/venture-capital-introduction',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  },
  {
    url: '/private-equity-fundraising',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  },
  {
    url: '/services/private-equity-fundraising',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  },
  {
    url: '/growth-capital-advisory',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  },
  {
    url: '/services/growth-capital-advisory',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  },
  {
    url: '/ai-tech-funding-advisory',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  },
  {
    url: '/services/ai-tech-funding',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  },
  {
    url: '/climate-tech-renewable-energy-funding',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  },
  {
    url: '/services/climate-tech-renewable-energy-funding',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  },
  {
    url: '/services/healthcare-medtech-funding',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  },
  {
    url: '/services/digital-infrastructure-funding',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  },
  // Location pages
  {
    url: '/locations/new-york',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  },
  {
    url: '/locations/austin',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  },
];

export async function GET() {
  const baseUrl = 'https://vommuli.com';
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map((route) => {
      return `
    <url>
      <loc>${baseUrl}${route.url}</loc>
      <lastmod>${route.lastModified.toISOString()}</lastmod>
      <changefreq>${route.changeFrequency}</changefreq>
      <priority>${route.priority}</priority>
    </url>`;
    })
    .join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}