'use client';

import { useEffect } from 'react';

interface SEOOptimizationProps {
  page?: string;
  keywords?: string[];
  enablePreloading?: boolean;
}

export default function SEOOptimization({ 
  page = 'default', 
  keywords = [],
  enablePreloading = true 
}: SEOOptimizationProps) {

  useEffect(() => {
    // Preload critical resources for Core Web Vitals optimization
    if (enablePreloading && typeof window !== 'undefined') {
      // Preload critical fonts
      const fontPreload = document.createElement('link');
      fontPreload.rel = 'preload';
      fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      fontPreload.as = 'style';
      fontPreload.crossOrigin = 'anonymous';
      document.head.appendChild(fontPreload);

      // Preload critical images based on page
      const criticalImages = getCriticalImages(page);
      criticalImages.forEach(imageSrc => {
        const imagePreload = document.createElement('link');
        imagePreload.rel = 'preload';
        imagePreload.href = imageSrc;
        imagePreload.as = 'image';
        document.head.appendChild(imagePreload);
      });

      // Add resource hints for external domains
      const resourceHints = [
        { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
        { rel: 'dns-prefetch', href: '//www.googletagmanager.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossOrigin: 'anonymous' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
      ];

      resourceHints.forEach(hint => {
        const existing = document.querySelector(`link[rel="${hint.rel}"][href="${hint.href}"]`);
        if (!existing) {
          const link = document.createElement('link');
          link.rel = hint.rel;
          link.href = hint.href;
          if (hint.crossOrigin) {
            link.crossOrigin = hint.crossOrigin;
          }
          document.head.appendChild(link);
        }
      });
    }

    // Track page performance metrics
    trackPagePerformance(page);

    // Enhanced keyword tracking
    if (keywords.length > 0) {
      trackKeywordRelevance(keywords);
    }
  }, [page, keywords, enablePreloading]);

  return null; // This component doesn't render anything visible
}

function getCriticalImages(page: string): string[] {
  const imageMap: Record<string, string[]> = {
    homepage: [
      '/og-homepage.jpg',
      '/icon-512x512.png'
    ],
    'series-a-funding': [
      '/og-series-a.jpg'
    ],
    'pitch-deck': [
      '/og-pitch-deck.jpg'
    ],
    'fundraising-guide': [
      '/og-fundraising-guide.jpg'
    ],
    'vc-advisor': [
      '/og-vc-advisor.jpg'
    ],
    default: [
      '/og-default.jpg',
      '/icon-512x512.png'
    ]
  };

  return imageMap[page] || imageMap.default;
}

function trackPagePerformance(page: string) {
  if (typeof window === 'undefined' || !('performance' in window)) return;

  // Enhanced Core Web Vitals tracking
  const perfObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      const entryName = entry.name;
      const duration = entry.duration;
      
      // Track specific metrics for SEO optimization
      if (window.gtag) {
        window.gtag('event', 'page_performance', {
          event_category: 'Core Web Vitals',
          event_label: `${page}_${entryName}`,
          value: Math.round(duration),
          custom_parameter_1: page
        });
      }

      // Console logging for development (remove in production)
      if (process.env.NODE_ENV === 'development') {
        console.log(`[SEO Performance] ${page} - ${entryName}: ${duration.toFixed(2)}ms`);
      }
    }
  });

  // Observe various performance metrics
  try {
    perfObserver.observe({ entryTypes: ['navigation', 'paint', 'layout-shift'] });
  } catch (error) {
    console.warn('Performance Observer not fully supported:', error);
  }

  // Track Largest Contentful Paint (LCP)
  if ('PerformanceObserver' in window) {
    try {
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        
        if (lastEntry && window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'Core Web Vitals',
            event_label: 'LCP',
            value: Math.round(lastEntry.startTime),
            custom_parameter_1: page,
            custom_parameter_2: lastEntry.startTime < 2500 ? 'good' : lastEntry.startTime < 4000 ? 'needs_improvement' : 'poor'
          });
        }
      });

      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
    } catch (error) {
      console.warn('LCP observation failed:', error);
    }

    // Track First Input Delay (FID)
    try {
      const fidObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          const fidEntry = entry as PerformanceEventTiming;
          const fid = fidEntry.processingStart - fidEntry.startTime;
          
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'Core Web Vitals',
              event_label: 'FID',
              value: Math.round(fid),
              custom_parameter_1: page,
              custom_parameter_2: fid < 100 ? 'good' : fid < 300 ? 'needs_improvement' : 'poor'
            });
          }
        }
      });

      fidObserver.observe({ type: 'first-input', buffered: true });
    } catch (error) {
      console.warn('FID observation failed:', error);
    }
  }
}

function trackKeywordRelevance(keywords: string[]) {
  if (typeof window === 'undefined') return;

  // Track keyword density and relevance (for internal analytics)
  const pageContent = document.body.innerText.toLowerCase();
  const keywordMetrics = keywords.map(keyword => {
    const keywordLower = keyword.toLowerCase();
    const matches = (pageContent.match(new RegExp(keywordLower, 'g')) || []).length;
    const density = (matches / pageContent.split(' ').length * 100).toFixed(2);
    
    return {
      keyword,
      matches,
      density: parseFloat(density)
    };
  });

  // Send keyword analytics to GA4 (for internal SEO tracking)
  if (window.gtag) {
    keywordMetrics.forEach(metric => {
      window.gtag('event', 'keyword_tracking', {
        event_category: 'SEO Keywords',
        event_label: metric.keyword,
        value: metric.matches,
        custom_parameter_1: metric.density.toString(),
        custom_parameter_2: window.location.pathname
      });
    });
  }

  // Development logging
  if (process.env.NODE_ENV === 'development') {
    console.table(keywordMetrics);
  }
}

// Export utility function for manual performance tracking
export function trackCustomSEOEvent(eventName: string, eventData: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'SEO Custom',
      ...eventData
    });
  }
}

// Export function to track conversion events with SEO context
export function trackSEOConversion(conversionType: string, value?: number, sourceKeyword?: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      event_category: 'SEO Conversions',
      event_label: conversionType,
      value: value || 0,
      custom_parameter_1: sourceKeyword || 'direct',
      custom_parameter_2: document.referrer || 'direct'
    });
  }
}

// Export function to track form submissions with SEO attribution
export function trackSEOFormSubmission(formName: string, formData?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag) {
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source') || 'direct';
    const utmMedium = urlParams.get('utm_medium') || 'direct';
    const utmCampaign = urlParams.get('utm_campaign') || 'none';

    window.gtag('event', 'form_submission', {
      event_category: 'SEO Forms',
      event_label: formName,
      custom_parameter_1: utmSource,
      custom_parameter_2: utmMedium,
      custom_parameter_3: utmCampaign,
      ...formData
    });
  }
}