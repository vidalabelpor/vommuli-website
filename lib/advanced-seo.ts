// Advanced SEO utilities for Phase 4 implementation
// Comprehensive SEO features for market dominance

import { Metadata } from 'next';

export interface AdvancedSEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  alternates?: Record<string, string>;
  schemaMarkup?: Record<string, any>[];
  breadcrumbs?: BreadcrumbItem[];
  openGraph?: OpenGraphConfig;
  twitter?: TwitterConfig;
  jsonLD?: Record<string, any>[];
  localSEO?: LocalSEOConfig;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
  position: number;
}

export interface OpenGraphConfig {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article' | 'service';
  section?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

export interface TwitterConfig {
  card?: 'summary' | 'summary_large_image' | 'app' | 'player';
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  creator?: string;
}

export interface LocalSEOConfig {
  businessName: string;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  coordinates: {
    latitude: number;
    longitude: number;
  };
  phone: string;
  openingHours: string[];
  priceRange: string;
  serviceArea?: string[];
}

// Generate comprehensive metadata with advanced SEO features
export function generateAdvancedMetadata(config: AdvancedSEOConfig): Metadata {
  const baseUrl = 'https://vommuli.com';
  
  return {
    title: {
      default: config.title,
      template: '%s | Vommuli Ventures'
    },
    description: config.description,
    keywords: config.keywords?.join(', '),
    metadataBase: new URL(baseUrl),
    
    // Canonical and alternate URLs
    alternates: {
      canonical: config.canonical || '/',
      languages: {
        'en-US': config.canonical ? `${baseUrl}${config.canonical}` : baseUrl,
        ...(config.alternates || {})
      }
    },
    
    // Enhanced OpenGraph
    openGraph: {
      type: config.openGraph?.type === 'service' ? 'website' : (config.openGraph?.type || 'website'),
      locale: 'en_US',
      url: config.canonical ? `${baseUrl}${config.canonical}` : baseUrl,
      title: config.openGraph?.title || config.title,
      description: config.openGraph?.description || config.description,
      siteName: 'Vommuli Ventures',
      images: [{
        url: config.openGraph?.image || '/og-default.jpg',
        width: 1200,
        height: 630,
        alt: config.openGraph?.imageAlt || config.openGraph?.title || config.title,
        type: 'image/jpeg'
      }],
      ...(config.openGraph?.type === 'article' && {
        publishedTime: config.openGraph.publishedTime,
        modifiedTime: config.openGraph.modifiedTime,
        authors: config.openGraph.author ? [config.openGraph.author] : undefined,
        section: config.openGraph.section,
        tags: config.keywords
      })
    },
    
    // Enhanced Twitter
    twitter: {
      card: config.twitter?.card || 'summary_large_image',
      title: config.twitter?.title || config.title,
      description: config.twitter?.description || config.description,
      images: [config.twitter?.image || '/og-default.jpg'],
      creator: config.twitter?.creator || '@vommuli'
    },
    
    // Enhanced robots
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    
    // Additional meta tags
    other: {
      'theme-color': '#0ea5e9',
      'msapplication-TileColor': '#0ea5e9',
      'msapplication-config': '/browserconfig.xml'
    }
  };
}

// Generate comprehensive schema markup for different page types
export const generatePageSchema = {
  // Organization schema with enhanced data
  organization: (data?: Record<string, any>) => ({
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'Vommuli Ventures',
    alternateName: 'Vommuli',
    description: 'Premium venture capital deal sourcing and Series A funding advisory services for mid-tier VC firms and growth-stage startups.',
    url: 'https://vommuli.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://vommuli.com/logo.png',
      width: 200,
      height: 60
    },
    image: 'https://vommuli.com/og-image.jpg',
    telephone: '+1-555-VOMMULI',
    email: 'contact@vommuli.com',
    foundingDate: '2020',
    founder: {
      '@type': 'Person',
      name: 'Vidal Porto',
      jobTitle: 'Founder & CEO',
      url: 'https://vommuli.com/about'
    },
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: '123 Financial District',
        addressLocality: 'New York',
        addressRegion: 'NY',
        postalCode: '10004',
        addressCountry: 'US'
      },
      {
        '@type': 'PostalAddress',
        streetAddress: '456 Tech Corridor',
        addressLocality: 'Austin',
        addressRegion: 'TX', 
        postalCode: '78701',
        addressCountry: 'US'
      }
    ],
    areaServed: [
      'United States',
      'New York',
      'Texas',
      'Austin',
      'Denver',
      'Miami',
      'Boston',
      'San Francisco'
    ],
    serviceType: [
      'Series A Funding Advisory',
      'Venture Capital Introductions',
      'Investment Readiness Assessment',
      'Startup Fundraising Consulting',
      'VC Deal Sourcing Services',
      'Pitch Deck Optimization'
    ],
    sameAs: [
      'https://linkedin.com/company/vommuli-ventures',
      'https://twitter.com/vommuli'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '47',
      bestRating: '5'
    },
    priceRange: '$$$',
    ...data
  }),

  // Website schema with enhanced navigation
  website: (data?: Record<string, any>) => ({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Vommuli Ventures',
    url: 'https://vommuli.com',
    description: 'Premium venture capital deal sourcing and Series A funding advisory services.',
    inLanguage: 'en-US',
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: {
      '@type': 'Organization',
      name: 'Vommuli Ventures'
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://vommuli.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Vommuli Ventures',
      logo: {
        '@type': 'ImageObject',
        url: 'https://vommuli.com/logo.png'
      }
    },
    ...data
  }),

  // Service schema for specific services
  service: (serviceName: string, description: string, data?: Record<string, any>) => ({
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: serviceName,
    description: description,
    provider: {
      '@type': 'Organization',
      name: 'Vommuli Ventures',
      url: 'https://vommuli.com'
    },
    serviceType: 'Financial Advisory',
    category: 'Venture Capital Advisory',
    areaServed: {
      '@type': 'Country',
      name: 'United States'
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
      priceRange: '$15000-$25000'
    },
    audience: {
      '@type': 'BusinessAudience',
      audienceType: 'Startups and VC Firms'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Series A Funding Services',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Investment Readiness Assessment',
          description: 'Comprehensive evaluation of startup readiness for Series A funding'
        },
        {
          '@type': 'OfferCatalog', 
          name: 'VC Introductions',
          description: 'Warm introductions to relevant venture capital firms'
        },
        {
          '@type': 'OfferCatalog',
          name: 'Pitch Deck Optimization',
          description: 'Professional pitch deck review and optimization services'
        }
      ]
    },
    ...data
  }),

  // Enhanced article schema for blog posts
  article: (title: string, description: string, data?: Record<string, any>) => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: data?.image || 'https://vommuli.com/og-article.jpg',
    author: {
      '@type': 'Person',
      name: data?.author || 'Vidal Porto',
      url: 'https://vommuli.com/about',
      sameAs: ['https://linkedin.com/in/vidalporto']
    },
    publisher: {
      '@type': 'Organization',
      name: 'Vommuli Ventures',
      logo: {
        '@type': 'ImageObject',
        url: 'https://vommuli.com/logo.png',
        width: 200,
        height: 60
      }
    },
    datePublished: data?.datePublished || new Date().toISOString(),
    dateModified: data?.dateModified || new Date().toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': data?.url || 'https://vommuli.com'
    },
    articleSection: data?.section || 'Venture Capital',
    keywords: data?.keywords?.join(', ') || '',
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    ...data
  }),

  // Local business schema for geographic pages
  localBusiness: (city: string, state: string, coordinates: { lat: number; lng: number }, data?: Record<string, any>) => ({
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: `Vommuli Ventures ${city}`,
    description: `Series A funding advisory and VC introductions in ${city}, ${state}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: city,
      addressRegion: state,
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: coordinates.lat,
      longitude: coordinates.lng
    },
    serviceArea: [
      {
        '@type': 'State',
        name: state
      },
      {
        '@type': 'City',
        name: city
      }
    ],
    priceRange: '$$$',
    openingHours: ['Mo-Fr 09:00-18:00'],
    telephone: '+1-555-VOMMULI',
    url: `https://vommuli.com/locations/${city.toLowerCase().replace(' ', '-')}/`,
    sameAs: [
      'https://linkedin.com/company/vommuli-ventures',
      'https://twitter.com/vommuli'
    ],
    hasMap: `https://maps.google.com/?q=${coordinates.lat},${coordinates.lng}`,
    ...data
  }),

  // FAQ schema for Q&A sections
  faq: (faqs: Array<{ question: string; answer: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }),

  // Breadcrumb schema for navigation
  breadcrumb: (items: BreadcrumbItem[]) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(item => ({
      '@type': 'ListItem',
      position: item.position,
      name: item.name,
      item: `https://vommuli.com${item.url}`
    }))
  })
};

// Advanced internal linking system
export interface InternalLinkingConfig {
  currentPage: string;
  context: 'home' | 'service' | 'location' | 'blog' | 'resource';
  maxLinks: number;
  priorityPages?: string[];
  excludePages?: string[];
}

// Internal linking suggestions based on context and SEO strategy
export const generateInternalLinks = (config: InternalLinkingConfig) => {
  const linkSuggestions = {
    home: [
      { url: '/series-a-funding-advisory', title: 'Series A Funding Advisory', description: 'Expert guidance for Series A preparation and investor introductions' },
      { url: '/tools/investment-readiness-assessment', title: 'Investment Readiness Assessment', description: 'Free tool to evaluate your funding readiness' },
      { url: '/pitch-deck-review-consulting', title: 'Pitch Deck Review', description: 'Professional pitch deck optimization services' },
      { url: '/locations/austin', title: 'Austin VC Services', description: 'Series A funding advisory in the #3 VC hub globally' }
    ],
    service: [
      { url: '/tools/investment-readiness-assessment', title: 'Check Your Readiness', description: 'Free assessment tool' },
      { url: '/blog/vc-deal-sourcing-services-complete-guide-2025', title: 'VC Deal Sourcing Guide', description: 'Complete guide to venture capital deal flow' },
      { url: '/resources/series-a-funding-checklist', title: 'Series A Checklist', description: 'Complete preparation checklist' },
      { url: '/contact', title: 'Schedule Consultation', description: 'Get expert guidance for your funding journey' }
    ],
    location: [
      { url: '/series-a-funding-advisory', title: 'Series A Advisory Services', description: 'Professional funding advisory and VC introductions' },
      { url: '/tools/investment-readiness-assessment', title: 'Investment Readiness Tool', description: 'Assess your funding readiness' },
      { url: '/blog/investment-readiness-assessment-guide-series-a-funding', title: 'Investment Readiness Guide', description: 'Complete guide to funding preparation' },
      { url: '/contact', title: 'Local Consultation', description: 'Schedule a consultation in your area' }
    ],
    blog: [
      { url: '/tools/investment-readiness-assessment', title: 'Take Assessment', description: 'Evaluate your startup\'s investment readiness' },
      { url: '/series-a-funding-advisory', title: 'Expert Advisory', description: 'Get professional Series A guidance' },
      { url: '/resources/series-a-funding-checklist', title: 'Preparation Checklist', description: 'Complete Series A preparation guide' },
      { url: '/contact', title: 'Expert Consultation', description: 'Schedule a strategy session' }
    ],
    resource: [
      { url: '/tools/investment-readiness-assessment', title: 'Assessment Tool', description: 'Free investment readiness evaluation' },
      { url: '/series-a-funding-advisory', title: 'Advisory Services', description: 'Professional Series A guidance' },
      { url: '/pitch-deck-review-consulting', title: 'Pitch Deck Review', description: 'Optimize your investor presentation' },
      { url: '/blog/series-a-preparation-checklist-startup-funding-2025', title: 'Preparation Guide', description: 'Complete Series A checklist' }
    ]
  };

  const contextLinks = linkSuggestions[config.context] || linkSuggestions.home;
  const priorityLinks = config.priorityPages?.map(url => 
    contextLinks.find(link => link.url === url)
  ).filter(Boolean) || [];
  
  const filteredLinks = contextLinks.filter(link => 
    link.url !== config.currentPage && 
    !config.excludePages?.includes(link.url)
  );

  const combinedLinks = [...priorityLinks, ...filteredLinks];
  const uniqueLinks = combinedLinks.filter((link, index, array) => 
    index === array.findIndex(l => l?.url === link?.url)
  );

  return uniqueLinks.slice(0, config.maxLinks);
};

// SEO monitoring and tracking
export const trackSEOMetrics = () => {
  if (typeof window !== 'undefined') {
    // Core Web Vitals tracking
    import('web-vitals').then(({ onCLS, onINP, onLCP }) => {
      onCLS(console.log);
      onINP(console.log);
      onLCP(console.log);
    }).catch(() => {
      // Fallback tracking if web-vitals is not available
      if ('PerformanceObserver' in window) {
        // LCP tracking
        new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            if (entry.entryType === 'largest-contentful-paint') {
              console.log('LCP:', entry.startTime);
            }
          }
        }).observe({ entryTypes: ['largest-contentful-paint'] });
      }
    });

    // SEO-specific events
    if (window.gtag) {
      // Track schema markup presence
      const schemaScripts = document.querySelectorAll('script[type="application/ld+json"]');
      window.gtag('event', 'seo_schema_count', {
        event_category: 'SEO',
        value: schemaScripts.length
      });

      // Track internal link clicks
      document.addEventListener('click', (event) => {
        const target = event.target as HTMLAnchorElement;
        if (target.tagName === 'A' && target.href.includes('vommuli.com')) {
          window.gtag('event', 'internal_link_click', {
            event_category: 'SEO',
            event_label: target.href,
            value: 1
          });
        }
      });
    }
  }
};

// Geographic coordinates for enhanced local SEO (Phase 1 research markets)
export const geoCoordinates = {
  'Austin': { lat: 30.2672, lng: -97.7431 },
  'Denver': { lat: 39.7392, lng: -104.9903 },
  'Miami': { lat: 25.7617, lng: -80.1918 },
  'New York': { lat: 40.7128, lng: -74.0060 },
  'San Francisco': { lat: 37.7749, lng: -122.4194 },
  'Boston': { lat: 42.3601, lng: -71.0589 },
  'Chicago': { lat: 41.8781, lng: -87.6298 }
};

// Quick-win keywords from Phase 1 research
export const quickWinKeywords = {
  primary: [
    'VC deal sourcing services',
    'investment readiness assessment', 
    'Series A preparation checklist'
  ],
  secondary: [
    'venture capital deal flow',
    'startup deal sourcing',
    'Series A funding guide',
    'startup funding readiness',
    'fundraising readiness check'
  ],
  longTail: [
    'how to prepare for Series A funding',
    'Series A investor introductions',
    'venture capital introduction services',
    'startup investment readiness tool',
    'Series A due diligence preparation'
  ]
};