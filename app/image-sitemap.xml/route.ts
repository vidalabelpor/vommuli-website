import { NextResponse } from 'next/server';

// Define image data with SEO-optimized information
const images = [
  // Homepage images
  {
    loc: '/og-homepage.jpg',
    caption: 'Vommuli Ventures - Series A Funding Advisory & Startup Fundraising Consultant',
    title: 'Expert Series A Funding Advisory Services',
    geo_location: 'New York, NY, USA',
    license: 'https://vommuli.com/terms'
  },
  {
    loc: '/icon-512x512.png',
    caption: 'Vommuli Ventures Logo - Venture Capital Advisory Services',
    title: 'Vommuli Ventures Brand Identity',
    geo_location: 'New York, NY, USA',
    license: 'https://vommuli.com/terms'
  },
  
  // Service-specific Open Graph images
  {
    loc: '/og-series-a.jpg',
    caption: 'Series A Funding Advisory - Expert preparation and investor introductions',
    title: 'Series A Funding Advisory Services',
    geo_location: 'New York, NY, USA',
    license: 'https://vommuli.com/terms'
  },
  {
    loc: '/og-pitch-deck.jpg',
    caption: 'Pitch Deck Review & Optimization Services for Series A Funding',
    title: 'Professional Pitch Deck Optimization',
    geo_location: 'New York, NY, USA',
    license: 'https://vommuli.com/terms'
  },
  {
    loc: '/og-vc-advisor.jpg',
    caption: 'Venture Capital Advisor & VC Introduction Services',
    title: 'Expert VC Advisory and Introductions',
    geo_location: 'New York, NY, USA',
    license: 'https://vommuli.com/terms'
  },
  {
    loc: '/og-assessment.jpg',
    caption: 'Investment Readiness Assessment Tool - Free startup evaluation',
    title: 'Free Investment Readiness Assessment',
    geo_location: 'New York, NY, USA',
    license: 'https://vommuli.com/terms'
  },
  {
    loc: '/og-fundraising-guide.jpg',
    caption: 'Complete Startup Fundraising Guide 2024 - Series A funding process',
    title: 'Comprehensive Startup Fundraising Guide',
    geo_location: 'New York, NY, USA',
    license: 'https://vommuli.com/terms'
  },
  
  // Resource guide images
  {
    loc: '/og-vc-guide.jpg',
    caption: 'Complete Venture Capital Guide - VC types, funding stages, investment criteria',
    title: 'The Complete Venture Capital Guide',
    geo_location: 'New York, NY, USA',
    license: 'https://vommuli.com/terms'
  },
  {
    loc: '/og-series-a-checklist.jpg',
    caption: 'Series A Funding Checklist 2024 - Complete preparation requirements',
    title: 'Series A Funding Preparation Checklist',
    geo_location: 'New York, NY, USA',
    license: 'https://vommuli.com/terms'
  },
  {
    loc: '/og-pitch-deck-guide.jpg',
    caption: 'Startup Pitch Deck Guide 2024 - How to create winning investor presentations',
    title: 'Complete Startup Pitch Deck Guide',
    geo_location: 'New York, NY, USA',
    license: 'https://vommuli.com/terms'
  },

  // Location-specific images (if they exist)
  {
    loc: '/og-nyc.jpg',
    caption: 'NYC Venture Capital Advisors - New York startup funding services',
    title: 'New York Venture Capital Advisory',
    geo_location: 'New York, NY, USA',
    license: 'https://vommuli.com/terms'
  },
  {
    loc: '/og-austin.jpg',
    caption: 'Austin Venture Capital Consultants - Texas startup funding expertise',
    title: 'Austin Venture Capital Consulting',
    geo_location: 'Austin, TX, USA',
    license: 'https://vommuli.com/terms'
  },
  {
    loc: '/og-denver.jpg',
    caption: 'Denver Venture Capital Advisory - Colorado startup funding services',
    title: 'Denver Venture Capital Advisory',
    geo_location: 'Denver, CO, USA',
    license: 'https://vommuli.com/terms'
  },
  {
    loc: '/og-miami.jpg',
    caption: 'Miami Venture Capital Services - Florida startup funding advisory',
    title: 'Miami Venture Capital Services',
    geo_location: 'Miami, FL, USA',
    license: 'https://vommuli.com/terms'
  },

  // Favicon variations
  {
    loc: '/apple-touch-icon.png',
    caption: 'Vommuli Ventures Apple Touch Icon - Mobile app icon',
    title: 'Vommuli Ventures Mobile Icon',
    geo_location: 'New York, NY, USA',
    license: 'https://vommuli.com/terms'
  },
  {
    loc: '/favicon-32x32.png',
    caption: 'Vommuli Ventures Favicon - Website icon',
    title: 'Vommuli Ventures Website Icon',
    geo_location: 'New York, NY, USA',
    license: 'https://vommuli.com/terms'
  },
  {
    loc: '/favicon-16x16.png',
    caption: 'Vommuli Ventures Small Favicon - Website icon',
    title: 'Vommuli Ventures Small Website Icon',
    geo_location: 'New York, NY, USA',
    license: 'https://vommuli.com/terms'
  },

  // Default/fallback image
  {
    loc: '/og-default.jpg',
    caption: 'Vommuli Ventures - Premier venture capital advisory and startup fundraising services',
    title: 'Vommuli Ventures Default Social Image',
    geo_location: 'New York, NY, USA',
    license: 'https://vommuli.com/terms'
  }
];

export async function GET() {
  const baseUrl = 'https://vommuli.com';
  
  const imageSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${images
    .map((image) => {
      return `
    <url>
      <loc>${baseUrl}${image.loc}</loc>
      <image:image>
        <image:loc>${baseUrl}${image.loc}</image:loc>
        <image:caption>${image.caption}</image:caption>
        <image:title>${image.title}</image:title>
        <image:geo_location>${image.geo_location}</image:geo_location>
        <image:license>${image.license}</image:license>
      </image:image>
    </url>`;
    })
    .join('')}
</urlset>`;

  return new NextResponse(imageSitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}