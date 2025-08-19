'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface TechnicalSEOProps {
  page?: string;
  keywords?: string[];
  images?: string[];
  enableOptimizations?: boolean;
}

export default function TechnicalSEO({ 
  page = 'default',
  keywords = [],
  images = [],
  enableOptimizations = true 
}: TechnicalSEOProps) {

  const pathname = usePathname();

  useEffect(() => {
    if (!enableOptimizations || typeof window === 'undefined') return;

    // Enhanced Resource Preloading
    const preloadCriticalResources = () => {
      // Preload critical fonts with proper crossorigin
      const criticalFonts = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
      ];

      criticalFonts.forEach(font => {
        const existingLink = document.querySelector(`link[href="${font}"]`);
        if (!existingLink) {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.href = font;
          link.as = 'style';
          link.crossOrigin = 'anonymous';
          link.onload = function() {
            // Convert preload to stylesheet after loading
            const linkElement = this as HTMLLinkElement;
            linkElement.onload = null;
            linkElement.rel = 'stylesheet';
          };
          document.head.appendChild(link);
        }
      });

      // Preload critical images based on page
      const criticalImages = getCriticalImages(page, images);
      criticalImages.forEach(imageSrc => {
        const img = new Image();
        img.src = imageSrc;
        // Optionally add to document if needed for SEO
        if (imageSrc.includes('og-')) {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.href = imageSrc;
          link.as = 'image';
          document.head.appendChild(link);
        }
      });

      // Preload next likely pages based on current page
      const nextLikelyPages = getNextLikelyPages(pathname);
      nextLikelyPages.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = url;
        document.head.appendChild(link);
      });
    };

    // Enhanced DNS Prefetching
    const setupDNSPrefetch = () => {
      const externalDomains = [
        '//www.googletagmanager.com',
        '//analytics.vercel.app',
        '//vitals.vercel-insights.com',
        '//fonts.googleapis.com',
        '//fonts.gstatic.com'
      ];

      externalDomains.forEach(domain => {
        const existing = document.querySelector(`link[rel="dns-prefetch"][href="${domain}"]`);
        if (!existing) {
          const link = document.createElement('link');
          link.rel = 'dns-prefetch';
          link.href = domain;
          document.head.appendChild(link);
        }
      });
    };

    // Advanced Performance Monitoring
    const setupAdvancedPerformanceTracking = () => {
      if ('PerformanceObserver' in window) {
        // Track Long Tasks (blocking main thread >50ms)
        try {
          new PerformanceObserver((list) => {
            const longTasks = list.getEntries();
            longTasks.forEach(task => {
              if (window.gtag) {
                window.gtag('event', 'long_task', {
                  event_category: 'Performance Issues',
                  event_label: 'Main Thread Blocking',
                  value: Math.round(task.duration),
                  custom_parameter_1: pathname
                });
              }
              
              if (process.env.NODE_ENV === 'development') {
                console.warn(`Long task detected: ${Math.round(task.duration)}ms on ${pathname}`);
              }
            });
          }).observe({ entryTypes: ['longtask'] });
        } catch (e) {
          console.warn('Long task monitoring not supported');
        }

        // Track Navigation Timing
        try {
          new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach(entry => {
              if (entry.entryType === 'navigation') {
                const nav = entry as PerformanceNavigationTiming;
                
                // Calculate advanced metrics
                const navEntry = nav as any; // Type assertion for extended properties
                const metrics = {
                  dns_lookup: nav.domainLookupEnd - nav.domainLookupStart,
                  tcp_connection: nav.connectEnd - nav.connectStart,
                  request_time: nav.responseStart - nav.requestStart,
                  response_time: nav.responseEnd - nav.responseStart,
                  dom_processing: nav.domComplete - (navEntry.domLoading || nav.domContentLoadedEventStart),
                  resource_loading: nav.loadEventEnd - nav.domContentLoadedEventEnd
                };

                // Track metrics that are concerning
                Object.entries(metrics).forEach(([metric, value]) => {
                  if (value > getMetricThreshold(metric) && window.gtag) {
                    window.gtag('event', 'performance_issue', {
                      event_category: 'Advanced Performance',
                      event_label: metric,
                      value: Math.round(value),
                      custom_parameter_1: pathname
                    });
                  }
                });

                if (process.env.NODE_ENV === 'development') {
                  console.log('Advanced Navigation Metrics:', metrics);
                }
              }
            });
          }).observe({ entryTypes: ['navigation'] });
        } catch (e) {
          console.warn('Navigation timing monitoring not supported');
        }

        // Track Resource Loading Performance
        try {
          new PerformanceObserver((list) => {
            const resources = list.getEntries();
            resources.forEach(resource => {
              if (resource.duration > 1000) { // Resources taking >1s
                if (window.gtag) {
                  window.gtag('event', 'slow_resource', {
                    event_category: 'Performance Issues',
                    event_label: resource.name,
                    value: Math.round(resource.duration),
                    custom_parameter_1: pathname
                  });
                }
              }
            });
          }).observe({ entryTypes: ['resource'] });
        } catch (e) {
          console.warn('Resource timing monitoring not supported');
        }
      }
    };

    // SEO Content Analysis
    const performContentAnalysis = () => {
      if (keywords.length === 0) return;

      const pageContent = document.body.innerText.toLowerCase();
      const contentLength = pageContent.length;
      
      // Check content length
      if (contentLength < 300) {
        console.warn(`SEO Warning: Page content is only ${contentLength} characters. Minimum recommended is 300.`);
      }

      // Keyword density analysis
      const keywordAnalysis = keywords.map(keyword => {
        const keywordLower = keyword.toLowerCase();
        const matches = (pageContent.match(new RegExp(keywordLower, 'g')) || []).length;
        const density = (matches / pageContent.split(' ').length * 100);
        
        return {
          keyword,
          matches,
          density: parseFloat(density.toFixed(2))
        };
      });

      // Check for keyword stuffing or under-optimization
      keywordAnalysis.forEach(analysis => {
        if (analysis.density > 3) {
          console.warn(`SEO Warning: Keyword "${analysis.keyword}" density is ${analysis.density}% (may be over-optimized)`);
        } else if (analysis.density < 0.5 && analysis.matches === 0) {
          console.warn(`SEO Warning: Target keyword "${analysis.keyword}" not found on page`);
        }
      });

      // Track keyword performance
      if (window.gtag) {
        keywordAnalysis.forEach(analysis => {
          window.gtag('event', 'seo_keyword_analysis', {
            event_category: 'SEO Analysis',
            event_label: analysis.keyword,
            value: analysis.matches,
            custom_parameter_1: analysis.density.toString(),
            custom_parameter_2: pathname
          });
        });
      }

      if (process.env.NODE_ENV === 'development') {
        console.table(keywordAnalysis);
        console.log(`Content Analysis - Length: ${contentLength} characters`);
      }
    };

    // Enhanced Meta Tag Optimization
    const optimizeMetaTags = () => {
      // Check for missing meta tags
      const requiredMeta = [
        { name: 'description', selector: 'meta[name="description"]' },
        { name: 'viewport', selector: 'meta[name="viewport"]' },
        { property: 'og:title', selector: 'meta[property="og:title"]' },
        { property: 'og:description', selector: 'meta[property="og:description"]' },
        { property: 'og:image', selector: 'meta[property="og:image"]' },
        { name: 'twitter:card', selector: 'meta[name="twitter:card"]' }
      ];

      const missingMeta = requiredMeta.filter(meta => !document.querySelector(meta.selector));
      
      if (missingMeta.length > 0 && process.env.NODE_ENV === 'development') {
        console.warn('Missing meta tags:', missingMeta.map(m => m.name || m.property));
      }

      // Check meta description length
      const metaDesc = document.querySelector('meta[name="description"]')?.getAttribute('content');
      if (metaDesc) {
        if (metaDesc.length < 120) {
          console.warn(`Meta description is ${metaDesc.length} characters. Recommended: 120-155 characters.`);
        } else if (metaDesc.length > 155) {
          console.warn(`Meta description is ${metaDesc.length} characters. May be truncated in search results.`);
        }
      }

      // Check title length
      const title = document.title;
      if (title.length < 30) {
        console.warn(`Page title is ${title.length} characters. Recommended: 30-60 characters.`);
      } else if (title.length > 60) {
        console.warn(`Page title is ${title.length} characters. May be truncated in search results.`);
      }
    };

    // Image Optimization Analysis
    const analyzeImageOptimization = () => {
      const images = document.querySelectorAll('img');
      let unoptimizedImages = 0;
      
      images.forEach(img => {
        // Check for missing alt text
        if (!img.alt || img.alt.trim() === '') {
          console.warn('Image missing alt text:', img.src);
          unoptimizedImages++;
        }
        
        // Check for missing loading attribute
        if (!img.loading) {
          console.warn('Image missing loading attribute:', img.src);
        }
        
        // Check for modern formats
        if (img.src && !img.src.includes('.webp') && !img.src.includes('.avif')) {
          console.warn('Consider using modern image formats (WebP/AVIF):', img.src);
        }
      });

      if (window.gtag && unoptimizedImages > 0) {
        window.gtag('event', 'seo_image_issues', {
          event_category: 'SEO Issues',
          event_label: 'Unoptimized Images',
          value: unoptimizedImages,
          custom_parameter_1: pathname
        });
      }
    };

    // Initialize optimizations
    preloadCriticalResources();
    setupDNSPrefetch();
    setupAdvancedPerformanceTracking();
    
    // Run content analysis after a short delay to ensure content is loaded
    setTimeout(() => {
      performContentAnalysis();
      optimizeMetaTags();
      analyzeImageOptimization();
    }, 1000);

    // Page change tracking for SPA behavior
    let lastPath = pathname;
    const checkPathChange = () => {
      if (window.location.pathname !== lastPath) {
        lastPath = window.location.pathname;
        
        if (window.gtag) {
          window.gtag('event', 'page_view', {
            event_category: 'Navigation',
            event_label: lastPath,
            page_title: document.title
          });
        }
      }
    };

    const pathCheckInterval = setInterval(checkPathChange, 1000);

    return () => {
      clearInterval(pathCheckInterval);
    };
  }, [page, keywords, pathname, images, enableOptimizations]);

  return null; // This component doesn't render anything visible
}

// Helper functions
function getCriticalImages(page: string, customImages: string[]): string[] {
  const defaultImages: Record<string, string[]> = {
    homepage: ['/og-homepage.jpg', '/icon-512x512.png'],
    'series-a': ['/og-series-a.jpg'],
    'pitch-deck': ['/og-pitch-deck.jpg'],
    'vc-guide': ['/og-vc-guide.jpg'],
    'assessment-tool': ['/og-assessment.jpg'],
    default: ['/og-default.jpg', '/icon-512x512.png']
  };

  return [...(defaultImages[page] || defaultImages.default), ...customImages];
}

function getNextLikelyPages(currentPath: string): string[] {
  const pathMappings: Record<string, string[]> = {
    '/': ['/services', '/about', '/contact'],
    '/startup-fundraising-guide': ['/tools/investment-readiness-assessment', '/venture-capital-advisor', '/series-a-funding-advisory'],
    '/venture-capital-advisor': ['/tools/investment-readiness-assessment', '/series-a-funding-advisory', '/contact'],
    '/tools/investment-readiness-assessment': ['/series-a-funding-advisory', '/contact', '/venture-capital-advisor'],
    '/series-a-funding-advisory': ['/pitch-deck-review-consulting', '/contact', '/tools/investment-readiness-assessment'],
    '/pitch-deck-review-consulting': ['/series-a-funding-advisory', '/contact', '/venture-capital-advisor']
  };

  return pathMappings[currentPath] || ['/contact', '/about'];
}

function getMetricThreshold(metric: string): number {
  const thresholds: Record<string, number> = {
    dns_lookup: 200,      // DNS lookup >200ms
    tcp_connection: 500,  // TCP connection >500ms  
    request_time: 500,    // Request time >500ms
    response_time: 1000,  // Response time >1s
    dom_processing: 2000, // DOM processing >2s
    resource_loading: 1000 // Resource loading >1s
  };

  return thresholds[metric] || 1000;
}

// Export utility functions for manual tracking
export function trackTechnicalSEOEvent(eventName: string, eventData: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'Technical SEO',
      ...eventData
    });
  }
}

export function trackPageSpeedInsight(metric: string, value: number, grade: 'good' | 'needs_improvement' | 'poor') {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_speed_insight', {
      event_category: 'Core Web Vitals',
      event_label: metric,
      value: Math.round(value),
      custom_parameter_1: grade,
      custom_parameter_2: window.location.pathname
    });
  }
}

export function trackSEOAuditResult(issues: string[], score: number) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'seo_audit_result', {
      event_category: 'SEO Analysis',
      event_label: `Issues: ${issues.length}`,
      value: score,
      custom_parameter_1: issues.join(', '),
      custom_parameter_2: window.location.pathname
    });
  }
}