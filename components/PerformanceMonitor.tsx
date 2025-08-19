'use client';

// Enhanced Performance Monitor Component for Phase 6 Launch
// Integrates comprehensive analytics and monitoring systems

import { useEffect, useState } from 'react';
import { createPerformanceMonitor, getLatestPerformanceReport } from '@/lib/monitoring';
import { initGA, trackPageView, trackWebVitals } from '@/lib/analytics';

interface PerformanceStats {
  score: number;
  metrics: Record<string, any>;
  timestamp: number;
}

export default function PerformanceMonitor() {
  const [performanceStats, setPerformanceStats] = useState<PerformanceStats | null>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);

  useEffect(() => {
    // Only run in the browser
    if (typeof window === 'undefined') return;

    // Initialize enhanced analytics system
    initGA();
    
    // Track initial page view
    trackPageView(window.location.href, document.title);

    // Initialize comprehensive performance monitoring
    const monitor = createPerformanceMonitor();
    
    if (monitor) {
      setIsMonitoring(true);
    }

    // Track Core Web Vitals with enhanced system
    const trackEnhancedWebVitals = () => {

      // Enhanced LCP tracking with our monitoring system
      if ('PerformanceObserver' in window) {
        new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            if (entry.entryType === 'largest-contentful-paint') {
              const lcp = entry.startTime;
              
              // Use enhanced analytics tracking
              trackWebVitals({
                name: 'LCP',
                value: lcp,
                id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
              });
              
              // Development logging with performance targets
              if (process.env.NODE_ENV === 'development') {
                const rating = lcp <= 2500 ? 'good' : lcp <= 4000 ? 'needs-improvement' : 'poor';
                console.log(`LCP: ${Math.round(lcp)}ms (${rating}) - Target: <2500ms`);
              }
            }
          }
        }).observe({ entryTypes: ['largest-contentful-paint'] });

        // Enhanced FID tracking
        new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            if (entry.entryType === 'first-input') {
              const fid = (entry as any).processingStart - entry.startTime;
              
              trackWebVitals({
                name: 'FID',
                value: fid,
                id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
              });
              
              if (process.env.NODE_ENV === 'development') {
                const rating = fid <= 100 ? 'good' : fid <= 300 ? 'needs-improvement' : 'poor';
                console.log(`FID: ${Math.round(fid)}ms (${rating}) - Target: <100ms`);
              }
            }
          }
        }).observe({ entryTypes: ['first-input'] });

        // CLS (Cumulative Layout Shift)
        let clsValue = 0;
        new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
        }).observe({ entryTypes: ['layout-shift'] });

        // Report CLS when page becomes hidden
        const reportCLS = () => {
          window.gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'CLS',
            value: Math.round(clsValue * 1000) / 1000,
            non_interaction: true
          });
          
          if (process.env.NODE_ENV === 'development') {
            console.log('CLS:', Math.round(clsValue * 1000) / 1000);
          }
        };

        // Report CLS on page hide
        document.addEventListener('visibilitychange', () => {
          if (document.visibilityState === 'hidden') {
            reportCLS();
          }
        });

        // Also report on page unload as fallback
        window.addEventListener('beforeunload', reportCLS);
      }
    };

    // Track page load metrics
    const trackPageLoad = () => {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          
          if (navigation && typeof window.gtag !== 'undefined') {
            // Time to First Byte (TTFB)
            const ttfb = navigation.responseStart - navigation.requestStart;
            window.gtag('event', 'page_load_timing', {
              event_category: 'Performance',
              event_label: 'TTFB',
              value: Math.round(ttfb),
              non_interaction: true
            });

            // DOM Content Loaded
            const dcl = navigation.domContentLoadedEventEnd - navigation.fetchStart;
            window.gtag('event', 'page_load_timing', {
              event_category: 'Performance',
              event_label: 'DCL',
              value: Math.round(dcl),
              non_interaction: true
            });

            // Full Page Load
            const loadComplete = navigation.loadEventEnd - navigation.fetchStart;
            window.gtag('event', 'page_load_timing', {
              event_category: 'Performance',
              event_label: 'Load Complete',
              value: Math.round(loadComplete),
              non_interaction: true
            });

            if (process.env.NODE_ENV === 'development') {
              console.log('Page Performance:', {
                TTFB: Math.round(ttfb) + 'ms',
                DCL: Math.round(dcl) + 'ms',
                'Load Complete': Math.round(loadComplete) + 'ms'
              });
            }
          }
        }, 0);
      });
    };

    // Track conversion events
    const trackConversions = () => {
      // Track CTA clicks
      const trackCTAClicks = (event: Event) => {
        const target = event.target as HTMLElement;
        if (target.classList.contains('btn-primary') || target.classList.contains('btn-outline')) {
          const ctaText = target.textContent?.trim() || 'Unknown CTA';
          if (typeof window.gtag !== 'undefined') {
            window.gtag('event', 'cta_click', {
              event_category: 'Engagement',
              event_label: ctaText,
              value: 1
            });
          }
        }
      };

      // Track form submissions
      const trackFormSubmissions = (event: Event) => {
        const form = event.target as HTMLFormElement;
        const formName = form.dataset.formName || form.className || 'Unknown Form';
        
        if (typeof window.gtag !== 'undefined') {
          window.gtag('event', 'form_submission', {
            event_category: 'Conversions',
            event_label: formName,
            value: 1
          });
        }
      };

      // Track scroll depth
      let maxScrollDepth = 0;
      const trackScrollDepth = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.round((scrollTop / docHeight) * 100);
        
        if (scrollPercent > maxScrollDepth) {
          maxScrollDepth = scrollPercent;
          
          // Track milestone scroll depths
          if ([25, 50, 75, 90].includes(scrollPercent) && typeof window.gtag !== 'undefined') {
            window.gtag('event', 'scroll_depth', {
              event_category: 'Engagement',
              event_label: `${scrollPercent}%`,
              value: scrollPercent
            });
          }
        }
      };

      // Add event listeners
      document.addEventListener('click', trackCTAClicks);
      document.addEventListener('submit', trackFormSubmissions);
      window.addEventListener('scroll', trackScrollDepth, { passive: true });

      // Cleanup function
      return () => {
        document.removeEventListener('click', trackCTAClicks);
        document.removeEventListener('submit', trackFormSubmissions);
        window.removeEventListener('scroll', trackScrollDepth);
      };
    };

    // Initialize tracking
    trackEnhancedWebVitals();
    trackPageLoad();
    const cleanupConversions = trackConversions();

    // Cleanup on unmount
    return () => {
      if (cleanupConversions) {
        cleanupConversions();
      }
    };
  }, []);

  // This component doesn't render anything
  return null;
}

// gtag types are already declared elsewhere