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
    title: 'Venture Capital Advisory & Series A Funding Experts | Vommuli Ventures',
    description: 'Premium VC deal sourcing and capital introduction services for Series A-C startups. Connect with mid-tier venture capital firms. $500M+ raised for clients.',
    keywords: [
      'venture capital advisory',
      'Series A funding',
      'startup fundraising consultants',
      'VC introductions',
      'investment readiness',
      'pitch deck optimization',
      'Series A preparation',
      'growth capital advisory'
    ],
    openGraph: {
      title: 'Venture Capital Advisory & Series A Funding Experts',
      description: 'Premium VC deal sourcing and capital introduction services for validated startups',
      image: '/og-homepage.jpg',
      type: 'website' as const
    }
  },

  seriesAFunding: {
    title: 'Series A Funding Advisory & Investor Introductions | Vommuli Ventures',
    description: 'Expert Series A preparation and investor matching services. 4-8 week timeline, $2M-$15M funding range. 85% success rate connecting startups with top VCs.',
    keywords: [
      'Series A funding preparation',
      'Series A investor matching',
      'Series A readiness assessment',
      'venture capital introductions',
      'Series A due diligence',
      'startup Series A funding'
    ],
    canonical: '/series-a-funding-advisory',
    openGraph: {
      title: 'Series A Funding Advisory & Investor Introductions',
      description: 'Expert Series A preparation and investor matching services',
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

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}