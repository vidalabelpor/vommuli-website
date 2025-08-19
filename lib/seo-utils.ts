// lib/seo-utils.ts
import { Metadata } from 'next'

export interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  openGraph?: {
    title?: string
    description?: string
    image?: string
    type?: 'website' | 'article'
  }
  twitter?: {
    title?: string
    description?: string
    image?: string
  }
  structured?: {
    type: 'Organization' | 'Service' | 'LocalBusiness' | 'Article' | 'FAQ'
    data?: Record<string, any>
  }
}

export function generateMetadata(config: SEOConfig): Metadata {
  const baseUrl = 'https://vommuli.com'
  
  return {
    title: {
      default: config.title,
      template: '%s | Vommuli Ventures'
    },
    description: config.description,
    keywords: config.keywords,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: config.canonical || '/'
    },
    openGraph: {
      type: config.openGraph?.type || 'website',
      locale: 'en_US',
      url: config.canonical ? `${baseUrl}${config.canonical}` : baseUrl,
      title: config.openGraph?.title || config.title,
      description: config.openGraph?.description || config.description,
      siteName: 'Vommuli Ventures',
      images: [{
        url: config.openGraph?.image || '/og-default.jpg',
        width: 1200,
        height: 630,
        alt: config.openGraph?.title || config.title
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: config.twitter?.title || config.title,
      description: config.twitter?.description || config.description,
      images: [config.twitter?.image || '/og-default.jpg']
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    }
  }
}

// Predefined SEO configurations for common pages
export const seoConfigs = {
  homepage: {
    title: 'Series A Funding Advisory & Startup Fundraising Consultant | Vommuli Ventures',
    description: 'Expert Series A funding advisory and startup fundraising consulting services. $500M+ raised for clients through targeted VC introductions and investment readiness optimization.',
    keywords: [
      'Series A funding advisory',
      'startup fundraising consultant',
      'venture capital advisor',
      'Series A preparation',
      'investment readiness assessment',
      'startup funding process',
      'VC introductions',
      'pitch deck review service',
      'Series A funding guide',
      'venture capital introduction services'
    ],
    openGraph: {
      title: 'Venture Capital Advisory & Series A Funding Experts',
      description: 'Premium VC deal sourcing and capital introduction services for validated startups',
      image: '/og-homepage.jpg',
      type: 'website' as const
    }
  },

  seriesAFunding: {
    title: 'Series A Funding Advisory - Expert VC Introductions & Investment Readiness | Vommuli Ventures',
    description: 'Expert Series A funding advisory with proven 87% success rate. $2.8B+ raised for 300+ startups. Investment readiness preparation, strategic VC targeting, warm introductions. 6-week average timeline.',
    keywords: [
      'series a funding',
      'series a funding advisory',
      'investment readiness',
      'venture capital advisor',
      'vc introductions',
      'startup fundraising guide',
      'series a preparation',
      'series a funding process',
      'venture capital matching',
      'startup funding advisory',
      'series a readiness assessment',
      'vc deal sourcing',
      'venture capital introduction services',
      'series a investor matching',
      'startup investment advisory'
    ],
    canonical: '/series-a-funding-advisory',
    openGraph: {
      title: 'Series A Funding Advisory - $2.8B+ Raised for 300+ Startups',
      description: 'Expert Series A funding advisory with 87% success rate. Strategic VC targeting, warm introductions, and investment readiness preparation.',
      image: '/og-series-a.jpg',
      type: 'website' as const
    }
  },

  pitchDeckOptimization: {
    title: 'Pitch Deck Review & Optimization Services | Vommuli Ventures',
    description: 'Professional pitch deck review and optimization for Series A-C funding. Expert feedback from former VCs. 3x higher investor response rates.',
    keywords: [
      'pitch deck review',
      'pitch deck optimization',
      'investor presentation coaching',
      'pitch deck consulting',
      'venture capital pitch deck',
      'Series A pitch deck'
    ],
    canonical: '/pitch-deck-review-consulting',
    openGraph: {
      title: 'Pitch Deck Review & Optimization Services',
      description: 'Professional pitch deck review and optimization for Series A-C funding',
      image: '/og-pitch-deck.jpg',
      type: 'website' as const
    }
  },

  nycAdvisory: {
    title: 'NYC Venture Capital Advisors & Series A Funding | Vommuli Ventures',
    description: 'New York venture capital advisory services. Local VC network, Series A expertise, NYC startup ecosystem knowledge. Serving Manhattan, Brooklyn, tri-state area.',
    keywords: [
      'Series A funding NYC',
      'venture capital advisors NYC',
      'startup fundraising consultants New York',
      'VC introductions Manhattan',
      'New York investment advisory'
    ],
    canonical: '/venture-capital-advisors-nyc',
    openGraph: {
      title: 'NYC Venture Capital Advisors & Series A Funding',
      description: 'New York venture capital advisory services with local VC network',
      image: '/og-nyc.jpg',
      type: 'website' as const
    }
  },

  austinAdvisory: {
    title: 'Austin Venture Capital Consultants & Texas Startup Funding | Vommuli Ventures',
    description: 'Austin venture capital consulting services. Texas startup ecosystem expertise, Silicon Hills investor network. Climate tech and AI specialization.',
    keywords: [
      'Series A funding Austin',
      'venture capital consultants Austin Texas',
      'startup funding advisors Austin',
      'VC network Austin',
      'Texas venture capital'
    ],
    canonical: '/venture-capital-consultants-austin',
    openGraph: {
      title: 'Austin Venture Capital Consultants & Texas Startup Funding',
      description: 'Austin venture capital consulting with Texas ecosystem expertise',
      image: '/og-austin.jpg',
      type: 'website' as const
    }
  },

  startupFundraisingGuide: {
    title: 'Complete Startup Fundraising Guide 2024 | Series A Funding Process | Vommuli Ventures',
    description: 'The definitive startup fundraising guide for 2024. Step-by-step Series A funding process, investor introductions, and proven strategies from experts who raised $500M+.',
    keywords: [
      'startup fundraising guide',
      'Series A funding process',
      'startup funding guide',
      'how to raise Series A funding',
      'venture capital process',
      'fundraising timeline',
      'investor pitch guide',
      'startup investment guide',
      'Series A preparation guide',
      'fundraising best practices'
    ],
    canonical: '/startup-fundraising-guide',
    openGraph: {
      title: 'Complete Startup Fundraising Guide 2024',
      description: 'The definitive guide to raising Series A funding with proven strategies and expert insights',
      image: '/og-fundraising-guide.jpg',
      type: 'article' as const
    }
  },

  ventureCapitalAdvisor: {
    title: 'Venture Capital Advisor & VC Introduction Services | Vommuli Ventures',
    description: 'Professional venture capital advisor services with warm VC introductions. Expert guidance for Series A-C funding rounds. 85% success rate connecting startups with VCs.',
    keywords: [
      'venture capital advisor',
      'VC introduction services',
      'venture capital consultant',
      'startup VC advisor',
      'venture capital introduction',
      'VC network access',
      'Series A VC advisor',
      'venture capital matching',
      'VC deal sourcing',
      'startup investment advisor'
    ],
    canonical: '/venture-capital-advisor',
    openGraph: {
      title: 'Venture Capital Advisor & VC Introduction Services',
      description: 'Professional venture capital advisory with warm VC introductions and expert guidance',
      image: '/og-vc-advisor.jpg',
      type: 'website' as const
    }
  },

  investmentReadinessAssessment: {
    title: 'Investment Readiness Assessment Tool | Free Startup Funding Evaluation | Vommuli Ventures',
    description: 'Free investment readiness assessment tool for startups. Evaluate your Series A funding readiness with our comprehensive 50-point analysis. Get personalized recommendations.',
    keywords: [
      'investment readiness assessment',
      'startup readiness evaluation',
      'Series A readiness test',
      'fundraising readiness check',
      'investor readiness assessment',
      'startup funding evaluation',
      'investment readiness tool',
      'Series A preparation assessment',
      'fundraising readiness score',
      'startup investment evaluation'
    ],
    canonical: '/tools/investment-readiness-assessment',
    openGraph: {
      title: 'Free Investment Readiness Assessment Tool',
      description: 'Evaluate your startup\'s Series A funding readiness with our comprehensive assessment',
      image: '/og-assessment.jpg',
      type: 'website' as const
    }
  }
}

// Generate structured data for different content types
export function generateStructuredData(type: string, data?: Record<string, any>) {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type
  }

  switch (type) {
    case 'Organization':
      return {
        ...baseData,
        name: 'Vommuli Ventures',
        description: 'Premium venture capital deal sourcing and capital introduction services for Series A-C startups and mid-tier VC firms.',
        url: 'https://vommuli.com',
        logo: 'https://vommuli.com/logo.png',
        image: 'https://vommuli.com/og-image.jpg',
        telephone: '+1-555-0123',
        email: 'contact@vommuli.com',
        foundingDate: '2020',
        founder: {
          '@type': 'Person',
          name: 'Vidal Porto'
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
        serviceType: [
          'Series A Funding Advisory',
          'Venture Capital Introductions',
          'Investment Readiness Assessment',
          'Startup Fundraising Consulting'
        ],
        sameAs: [
          'https://linkedin.com/company/vommuli-ventures',
          'https://twitter.com/vommuli'
        ],
        ...data
      }

    case 'Service':
      return {
        ...baseData,
        name: data?.name || 'Series A Funding Advisory',
        description: data?.description || 'Comprehensive Series A preparation and investor introduction services',
        provider: {
          '@type': 'FinancialService',
          name: 'Vommuli Ventures'
        },
        serviceType: 'Financial Advisory',
        category: 'Venture Capital Advisory',
        areaServed: {
          '@type': 'Country',
          name: 'United States'
        },
        ...data
      }

    case 'LocalBusiness':
      return {
        ...baseData,
        '@type': 'FinancialService',
        name: data?.name || 'Vommuli Ventures',
        description: data?.description || 'Local venture capital advisory services',
        address: data?.address,
        geo: data?.geo,
        telephone: '+1-555-0123',
        priceRange: '$$$',
        openingHours: 'Mo-Fr 09:00-18:00',
        ...data
      }

    case 'Article':
      return {
        ...baseData,
        headline: data?.headline,
        description: data?.description,
        image: data?.image,
        author: {
          '@type': 'Person',
          name: data?.author || 'Vidal Porto',
          url: 'https://vommuli.com/about'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Vommuli Ventures',
          logo: 'https://vommuli.com/logo.png'
        },
        datePublished: data?.datePublished,
        dateModified: data?.dateModified,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': data?.url
        },
        ...data
      }

    case 'FAQPage':
      return {
        ...baseData,
        mainEntity: data?.questions?.map((q: any) => ({
          '@type': 'Question',
          name: q.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: q.answer
          }
        })) || [],
        ...data
      }

    default:
      return { ...baseData, ...data }
  }
}

// Helper function to inject structured data
export function injectStructuredData(data: any) {
  if (typeof window !== 'undefined') {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(data)
    document.head.appendChild(script)
  }
}

// Performance tracking utilities
export function trackPageLoad() {
  if (typeof window !== 'undefined' && 'performance' in window) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        
        // Track Core Web Vitals
        if ('PerformanceObserver' in window) {
          // LCP (Largest Contentful Paint)
          new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
              if (entry.entryType === 'largest-contentful-paint') {
                console.log('LCP:', entry.startTime)
                // Send to analytics
                if (window.gtag) {
                  window.gtag('event', 'web_vitals', {
                    event_category: 'Web Vitals',
                    event_label: 'LCP',
                    value: Math.round(entry.startTime)
                  })
                }
              }
            }
          }).observe({ entryTypes: ['largest-contentful-paint'] })

          // FID (First Input Delay)
          new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
              if (entry.entryType === 'first-input') {
                const fid = (entry as any).processingStart - entry.startTime
                console.log('FID:', fid)
                if (window.gtag) {
                  window.gtag('event', 'web_vitals', {
                    event_category: 'Web Vitals',
                    event_label: 'FID',
                    value: Math.round(fid)
                  })
                }
              }
            }
          }).observe({ entryTypes: ['first-input'] })

          // CLS (Cumulative Layout Shift)
          let clsValue = 0
          new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
              if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
                clsValue += (entry as any).value
              }
            }
          }).observe({ entryTypes: ['layout-shift'] })

          // Report CLS when page is hidden
          document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
              console.log('CLS:', clsValue)
              if (window.gtag) {
                window.gtag('event', 'web_vitals', {
                  event_category: 'Web Vitals',
                  event_label: 'CLS',
                  value: Math.round(clsValue * 1000) / 1000
                })
              }
            }
          })
        }
      }, 0)
    })
  }
}

// Conversion tracking utilities
export function trackConversion(eventName: string, value?: number, data?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'conversions',
      value: value || 0,
      ...data
    })
  }
}

export function trackFormSubmission(formName: string, success: boolean = true) {
  trackConversion('form_submission', success ? 1 : 0, {
    form_name: formName,
    success: success
  })
}

export function trackDownload(fileName: string, fileType: string) {
  trackConversion('file_download', 1, {
    file_name: fileName,
    file_type: fileType
  })
}

export function trackConsultationBooking() {
  trackConversion('consultation_booking', 1000) // High value conversion
}

// Enhanced schema markup for geographic and service pages (Phase 2 Blueprint)
export const generateLocalBusinessSchema = (city: string, state: string, lat: number, lng: number) => ({
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": `Vommuli Ventures ${city}`,
  "description": `Series A funding advisory and VC introductions in ${city}, ${state}`,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": city,
    "addressRegion": state,
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": lat,
    "longitude": lng
  },
  "serviceArea": {
    "@type": "State",
    "name": state
  },
  "priceRange": "$$$",
  "openingHours": ["Mo-Fr 09:00-18:00"],
  "telephone": "+1-555-0123",
  "url": `https://vommuli.com/locations/${city.toLowerCase().replace(' ', '-')}/`,
  "sameAs": [
    "https://linkedin.com/company/vommuli-ventures",
    "https://twitter.com/vommuli"
  ]
});

// Service-specific schema for competitive advantage  
export const generateServiceSchema = (serviceName: string, description: string, keywords: string[]) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "provider": {
    "@type": "FinancialService",
    "name": "Vommuli Ventures"
  },
  "serviceType": "Financial Advisory",
  "category": "Venture Capital Advisory", 
  "keywords": keywords,
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceRange": "$15000-$25000"
  }
});

// Geographic coordinates for major markets (Phase 2 Blueprint)
export const cityCoordinates = {
  'Austin': { lat: 30.2672, lng: -97.7431 },
  'Denver': { lat: 39.7392, lng: -104.9903 },
  'Miami': { lat: 25.7617, lng: -80.1918 },
  'New York': { lat: 40.7128, lng: -74.0060 },
  'San Francisco': { lat: 37.7749, lng: -122.4194 },
  'Boston': { lat: 42.3601, lng: -71.0589 },
  'Chicago': { lat: 41.8781, lng: -87.6298 }
};

// Quick win keywords mapping (Phase 1 Research)
export const quickWinKeywords = {
  'vc-deal-sourcing': ['VC deal sourcing services', 'venture capital deal flow', 'startup deal sourcing'],
  'investment-readiness': ['investment readiness assessment', 'startup funding readiness', 'Series A preparation'],
  'series-a-checklist': ['Series A preparation checklist', 'Series A funding guide', 'startup Series A readiness']
};

// Core Web Vitals monitoring enhancement
export function trackCoreWebVitals() {
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    // Enhanced LCP tracking with target elements
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        const lcp = entry.startTime;
        console.log('LCP:', lcp);
        
        // Track LCP performance against 95+ Lighthouse target (<2000ms)
        if (window.gtag) {
          window.gtag('event', 'core_web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'LCP',
            value: Math.round(lcp),
            custom_parameter_1: lcp < 2000 ? 'excellent' : lcp < 2500 ? 'good' : 'needs_improvement'
          });
        }
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // Enhanced CLS tracking for conversion elements
    let clsValue = 0;
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
    }).observe({ entryTypes: ['layout-shift'] });

    // Report CLS when page is hidden (target <0.05 for excellent)
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        console.log('CLS:', clsValue);
        if (window.gtag) {
          window.gtag('event', 'core_web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'CLS',
            value: Math.round(clsValue * 1000) / 1000,
            custom_parameter_1: clsValue < 0.05 ? 'excellent' : clsValue < 0.1 ? 'good' : 'needs_improvement'
          });
        }
      }
    });

    // Enhanced FID tracking for interactive elements
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        const fid = (entry as any).processingStart - entry.startTime;
        console.log('FID:', fid);
        
        // Track FID performance against target (<50ms for excellent)
        if (window.gtag) {
          window.gtag('event', 'core_web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'FID',
            value: Math.round(fid),
            custom_parameter_1: fid < 50 ? 'excellent' : fid < 100 ? 'good' : 'needs_improvement'
          });
        }
      }
    }).observe({ entryTypes: ['first-input'] });
  }
}

// gtag types are declared elsewhere to avoid conflicts