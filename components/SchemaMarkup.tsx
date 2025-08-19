import Script from 'next/script';

interface SchemaMarkupProps {
  type: 'organization' | 'service' | 'faq' | 'website' | 'breadcrumb' | 'localbusiness' | 'article';
  data?: any;
}

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  const getSchema = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": ["FinancialService", "ProfessionalService"],
          "name": "Vommuli Ventures",
          "alternateName": "Vommuli",
          "description": "Expert Series A funding advisory services helping startups successfully raise venture capital through pitch deck optimization, investment readiness assessment, and warm VC introductions.",
          "url": "https://vommuli.com",
          "logo": "https://vommuli.com/logo.png",
          "image": "https://vommuli.com/og-image.jpg",
          "foundingDate": "2012",
          "slogan": "Connecting Capital with Innovation",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "127",
            "bestRating": "5"
          },
          "priceRange": "$15,000 - $25,000",
          "knowsAbout": [
            "Series A Funding Advisory",
            "Startup Fundraising Consulting",
            "Pitch Deck Optimization",
            "Investment Readiness Assessment",
            "Venture Capital Introductions",
            "Series A Preparation",
            "VC Pitch Coaching",
            "Startup Advisory Services"
          ],
          "serviceArea": {
            "@type": "Place",
            "name": "Global"
          },
          "areaServed": [
            {
              "@type": "Country",
              "name": "United States"
            },
            {
              "@type": "Country", 
              "name": "United Kingdom"
            },
            {
              "@type": "Country",
              "name": "Canada"
            }
          ],
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "info@vommuli.com",
              "availableLanguage": ["English"],
              "areaServed": "Global"
            },
            {
              "@type": "ContactPoint",
              "contactType": "series a funding advisory",
              "email": "funding@vommuli.com",
              "availableLanguage": ["English"],
              "areaServed": "Global"
            }
          ],
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US",
            "addressRegion": "New York"
          },
          "sameAs": [
            "https://www.linkedin.com/company/vommuli-ventures",
            "https://twitter.com/vommuli"
          ],
          "hasCredential": [
            {
              "@type": "EducationalOccupationalCredential",
              "credentialCategory": "Professional License",
              "name": "SEC Registered Investment Advisor"
            },
            {
              "@type": "EducationalOccupationalCredential", 
              "credentialCategory": "Professional License",
              "name": "FINRA Series 7, 66 Licensed"
            }
          ],
          "awards": [
            "Top Capital Introduction Firm 2023",
            "Excellence in Financial Advisory Services"
          ]
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data?.name || "Series A Funding Advisory Services",
          "description": data?.description || "Professional Series A funding advisory helping startups successfully raise venture capital through expert guidance and VC introductions",
          "provider": {
            "@type": "FinancialService",
            "name": "Vommuli Ventures"
          },
          "serviceType": "Series A Funding Advisory",
          "category": "Financial Services",
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Series A-ready startups seeking venture capital funding"
          },
          "areaServed": "Global",
          "availableChannel": [
            {
              "@type": "ServiceChannel",
              "serviceUrl": `https://vommuli.com${data?.url || ''}`,
              "serviceSmsNumber": "+1-555-SERIESA",
              "serviceLocation": {
                "@type": "Place",
                "name": "Global"
              }
            }
          ],
          "termsOfService": "https://vommuli.com/terms",
          "serviceOutput": {
            "@type": "Thing",
            "name": "Successful Series A Funding"
          }
        };

      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data?.faqs?.map((faq: any) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          })) || []
        };

      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Vommuli Ventures",
          "alternateName": "Vommuli",
          "url": "https://vommuli.com",
          "description": "Expert financial capital introduction services for growth companies",
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "potentialAction": [
            {
              "@type": "SearchAction",
              "target": "https://vommuli.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          ],
          "mainContentOfPage": {
            "@type": "WebPageElement",
            "cssSelector": "main"
          },
          "publisher": {
            "@type": "FinancialService",
            "name": "Vommuli Ventures"
          }
        };

      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data?.breadcrumbs?.map((crumb: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.name,
            "item": `https://vommuli.com${crumb.url}`
          })) || []
        };

      case 'localbusiness':
        return {
          "@context": "https://schema.org",
          "@type": "FinancialService",
          "name": data?.name || "Vommuli Ventures",
          "description": data?.description || "Professional venture capital advisory services",
          "url": data?.url || "https://vommuli.com",
          "telephone": data?.telephone || "+1-555-FUND-VC",
          "email": "info@vommuli.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": data?.address?.streetAddress,
            "addressLocality": data?.address?.addressLocality,
            "addressRegion": data?.address?.addressRegion,
            "postalCode": data?.address?.postalCode,
            "addressCountry": data?.address?.addressCountry || "US"
          },
          "geo": data?.geo ? {
            "@type": "GeoCoordinates",
            "latitude": data.geo.latitude,
            "longitude": data.geo.longitude
          } : null,
          "openingHours": "Mo-Fr 09:00-18:00",
          "priceRange": "$15,000 - $25,000",
          "paymentAccepted": ["Cash", "Check", "Wire Transfer"],
          "currenciesAccepted": "USD",
          "areaServed": data?.areaServed || ["United States"],
          "serviceType": data?.serviceType || [
            "Series A Funding Advisory",
            "Venture Capital Introductions",
            "Investment Readiness Assessment"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Venture Capital Advisory Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Series A Funding Advisory",
                  "description": "Comprehensive Series A preparation and investor introduction services"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Pitch Deck Optimization",
                  "description": "Professional pitch deck review and optimization services"
                }
              }
            ]
          }
        };

      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data?.headline,
          "description": data?.description,
          "image": data?.image || "https://vommuli.com/og-default.jpg",
          "author": data?.author || {
            "@type": "Organization",
            "name": "Vommuli Ventures",
            "url": "https://vommuli.com"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Vommuli Ventures",
            "logo": {
              "@type": "ImageObject",
              "url": "https://vommuli.com/logo.png"
            }
          },
          "datePublished": data?.datePublished,
          "dateModified": data?.dateModified || data?.datePublished,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": data?.url
          },
          "wordCount": data?.wordCount,
          "articleSection": data?.articleSection,
          "keywords": data?.keywords,
          "inLanguage": "en-US",
          "isAccessibleForFree": true
        };

      default:
        return null;
    }
  };

  const schema = getSchema();

  if (!schema) return null;

  return (
    <Script
      id={`schema-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}