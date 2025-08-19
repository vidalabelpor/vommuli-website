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
  // Flagship Service Pages (Phase 4)
  {
    url: '/series-a-funding-advisory',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 1.0,
  },
  {
    url: '/pitch-deck-review-consulting',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.95,
  },
  {
    url: '/tools/investment-readiness-assessment',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  },
  // High-Intent Keyword Landing Pages (SEO Optimization)
  {
    url: '/startup-fundraising-guide',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.95,
  },
  {
    url: '/venture-capital-advisor',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  },
  // Content Cluster Resources (Topical Authority)
  {
    url: '/resources/venture-capital-guide',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  },
  {
    url: '/resources/series-a-funding-checklist',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  },
  {
    url: '/resources/startup-pitch-deck-guide',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  },
  // Competitive Differentiation Content
  {
    url: '/about/competitive-advantages',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  },
  {
    url: '/insights/human-vs-ai-fundraising',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
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
  {
    url: '/locations/denver',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  },
  {
    url: '/locations/miami',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  },
  {
    url: '/locations/boston',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  },
  {
    url: '/locations/chicago',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  },
  {
    url: '/locations/san-francisco',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  },
  // Blog Section (Phase 4 Content Marketing)
  {
    url: '/blog',
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  },
  // Phase 4: High-value blog content targeting Phase 1 research keywords
  {
    url: '/blog/vc-deal-sourcing-services-complete-guide-2025',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.95, // Quick-win keyword (170 searches, 35 difficulty)
  },
  {
    url: '/blog/investment-readiness-assessment-guide-series-a-funding',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.95, // High-value keyword (300 searches, 40 difficulty)
  },
  {
    url: '/blog/series-a-preparation-checklist-startup-funding-2025',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9, // Quick-win keyword (140 searches, 32 difficulty)
  },
  {
    url: '/blog/complete-guide-series-a-fundraising-2024',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  },
  {
    url: '/blog/pitch-deck-mistakes-that-kill-series-a-deals',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  },
  {
    url: '/downloads/series-a-pitch-deck-template',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  },
  {
    url: '/downloads/series-a-financial-model',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  },
  {
    url: '/resources',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  },
  {
    url: '/insights',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
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