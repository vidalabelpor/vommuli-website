import Script from 'next/script';

interface SchemaMarkupProps {
  type: 'organization' | 'service' | 'faq' | 'website' | 'breadcrumb';
  data?: any;
}

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  const getSchema = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "FinancialService",
          "name": "Vommuli Ventures",
          "alternateName": "Vommuli",
          "description": "Expert financial capital introduction services connecting growth companies with institutional investors through venture capital, private equity, and strategic funding introductions.",
          "url": "https://vommuli.com",
          "logo": "https://vommuli.com/logo.png",
          "foundingDate": "2012",
          "slogan": "Connecting Capital with Innovation",
          "knowsAbout": [
            "Capital Introduction Services",
            "Venture Capital Fundraising",
            "Private Equity Introduction",
            "Growth Capital Advisory",
            "M&A Advisory Services",
            "Institutional Fundraising",
            "Investment Banking",
            "Financial Advisory"
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
              "contactType": "capital introduction services",
              "email": "capital@vommuli.com",
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
          "name": data?.name || "Capital Introduction Services",
          "description": data?.description || "Professional capital introduction services connecting companies with institutional investors",
          "provider": {
            "@type": "FinancialService",
            "name": "Vommuli Ventures"
          },
          "serviceType": "Capital Introduction",
          "category": "Financial Services",
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Growth Companies seeking institutional capital"
          },
          "areaServed": "Global",
          "availableChannel": [
            {
              "@type": "ServiceChannel",
              "serviceUrl": `https://vommuli.com${data?.url || ''}`,
              "serviceSmsNumber": "+1-555-CAPITAL",
              "serviceLocation": {
                "@type": "Place",
                "name": "Global"
              }
            }
          ],
          "termsOfService": "https://vommuli.com/terms",
          "serviceOutput": {
            "@type": "Thing",
            "name": "Institutional Investor Introductions"
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