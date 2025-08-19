// Advanced Monitoring & Performance Tracking System
// Designed to maintain 95+ Lighthouse scores and detect regressions

import { trackWebVitals } from './analytics';

export interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  threshold: {
    good: number;
    poor: number;
  };
  timestamp: number;
}

export interface CoreWebVitalsThresholds {
  LCP: { good: 2500; poor: 4000 }; // Largest Contentful Paint
  FID: { good: 100; poor: 300 };   // First Input Delay
  CLS: { good: 0.1; poor: 0.25 };  // Cumulative Layout Shift
  FCP: { good: 1800; poor: 3000 }; // First Contentful Paint
  TTI: { good: 3800; poor: 7300 }; // Time to Interactive
  TBT: { good: 200; poor: 600 };   // Total Blocking Time
}

export const CORE_WEB_VITALS_THRESHOLDS: CoreWebVitalsThresholds = {
  LCP: { good: 2500, poor: 4000 },
  FID: { good: 100, poor: 300 },
  CLS: { good: 0.1, poor: 0.25 },
  FCP: { good: 1800, poor: 3000 },
  TTI: { good: 3800, poor: 7300 },
  TBT: { good: 200, poor: 600 },
};

// Performance monitoring class
export class PerformanceMonitor {
  private metrics: PerformanceMetric[] = [];
  private observers: PerformanceObserver[] = [];

  constructor() {
    if (typeof window !== 'undefined') {
      this.initializeMonitoring();
    }
  }

  private initializeMonitoring() {
    // Monitor Core Web Vitals
    this.observeLCP();
    this.observeFID();
    this.observeCLS();
    this.observeFCP();
    this.observeTTI();
    
    // Monitor custom metrics
    this.observeNavigationTiming();
    this.observeResourceTiming();
    
    // Start performance reporting
    this.startPerformanceReporting();
  }

  private observeLCP() {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        
        if (lastEntry) {
          const metric = this.createMetric('LCP', lastEntry.startTime, CORE_WEB_VITALS_THRESHOLDS.LCP);
          this.recordMetric(metric);
          trackWebVitals({
            name: 'LCP',
            value: lastEntry.startTime,
            id: this.generateId(),
          });
        }
      });
      
      observer.observe({ type: 'largest-contentful-paint', buffered: true });
      this.observers.push(observer);
    } catch (error) {
      console.warn('LCP monitoring not supported:', error);
    }
  }

  private observeFID() {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          const metric = this.createMetric('FID', entry.processingStart - entry.startTime, CORE_WEB_VITALS_THRESHOLDS.FID);
          this.recordMetric(metric);
          trackWebVitals({
            name: 'FID',
            value: entry.processingStart - entry.startTime,
            id: this.generateId(),
          });
        });
      });
      
      observer.observe({ type: 'first-input', buffered: true });
      this.observers.push(observer);
    } catch (error) {
      console.warn('FID monitoring not supported:', error);
    }
  }

  private observeCLS() {
    try {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        
        const metric = this.createMetric('CLS', clsValue, CORE_WEB_VITALS_THRESHOLDS.CLS);
        this.recordMetric(metric);
        trackWebVitals({
          name: 'CLS',
          value: clsValue,
          id: this.generateId(),
        });
      });
      
      observer.observe({ type: 'layout-shift', buffered: true });
      this.observers.push(observer);
    } catch (error) {
      console.warn('CLS monitoring not supported:', error);
    }
  }

  private observeFCP() {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (entry.name === 'first-contentful-paint') {
            const metric = this.createMetric('FCP', entry.startTime, CORE_WEB_VITALS_THRESHOLDS.FCP);
            this.recordMetric(metric);
            trackWebVitals({
              name: 'FCP',
              value: entry.startTime,
              id: this.generateId(),
            });
          }
        });
      });
      
      observer.observe({ type: 'paint', buffered: true });
      this.observers.push(observer);
    } catch (error) {
      console.warn('FCP monitoring not supported:', error);
    }
  }

  private observeTTI() {
    // TTI calculation using heuristics
    if (typeof window !== 'undefined' && 'performance' in window) {
      setTimeout(() => {
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigationEntry) {
          const tti = navigationEntry.domInteractive || navigationEntry.loadEventEnd;
          const metric = this.createMetric('TTI', tti, CORE_WEB_VITALS_THRESHOLDS.TTI);
          this.recordMetric(metric);
        }
      }, 0);
    }
  }

  private observeNavigationTiming() {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        // Track key navigation metrics
        const metrics = {
          'DNS-Lookup': navigationEntry.domainLookupEnd - navigationEntry.domainLookupStart,
          'TCP-Connect': navigationEntry.connectEnd - navigationEntry.connectStart,
          'SSL-Handshake': navigationEntry.connectEnd - navigationEntry.secureConnectionStart,
          'TTFB': navigationEntry.responseStart - navigationEntry.requestStart,
          'Download': navigationEntry.responseEnd - navigationEntry.responseStart,
          'DOM-Processing': navigationEntry.domComplete - navigationEntry.domContentLoadedEventStart,
        };

        Object.entries(metrics).forEach(([name, value]) => {
          if (value > 0) {
            const metric: PerformanceMetric = {
              name,
              value,
              rating: this.getRating(name, value),
              threshold: { good: 100, poor: 1000 }, // Generic thresholds
              timestamp: Date.now(),
            };
            this.recordMetric(metric);
          }
        });
      }
    }
  }

  private observeResourceTiming() {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const resourceEntries = performance.getEntriesByType('resource');
      const slowResources = resourceEntries.filter((entry: any) => entry.duration > 1000);
      
      if (slowResources.length > 0) {
        console.warn(`Detected ${slowResources.length} slow resources:`, slowResources);
        // Track slow resources for optimization
        slowResources.forEach((resource: any) => {
          const metric: PerformanceMetric = {
            name: 'Slow-Resource',
            value: resource.duration,
            rating: 'poor',
            threshold: { good: 500, poor: 1000 },
            timestamp: Date.now(),
          };
          this.recordMetric(metric);
        });
      }
    }
  }

  private createMetric(
    name: keyof CoreWebVitalsThresholds,
    value: number,
    threshold: { good: number; poor: number }
  ): PerformanceMetric {
    return {
      name,
      value,
      rating: this.getRating(name, value, threshold),
      threshold,
      timestamp: Date.now(),
    };
  }

  private getRating(
    name: string,
    value: number,
    threshold?: { good: number; poor: number }
  ): 'good' | 'needs-improvement' | 'poor' {
    if (!threshold) {
      return value < 1000 ? 'good' : value < 2000 ? 'needs-improvement' : 'poor';
    }
    
    if (value <= threshold.good) return 'good';
    if (value <= threshold.poor) return 'needs-improvement';
    return 'poor';
  }

  private recordMetric(metric: PerformanceMetric) {
    this.metrics.push(metric);
    
    // Alert on poor performance
    if (metric.rating === 'poor') {
      this.alertPerformanceRegression(metric);
    }
    
    // Store in localStorage for persistence
    this.persistMetrics();
  }

  private alertPerformanceRegression(metric: PerformanceMetric) {
    console.warn(`Performance regression detected: ${metric.name} = ${metric.value}ms (threshold: ${metric.threshold.poor}ms)`);
    
    // Send alert to monitoring service (implement as needed)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'performance_regression', {
        event_category: 'Performance',
        event_label: metric.name,
        value: Math.round(metric.value),
        custom_parameter_1: metric.rating,
      });
    }
  }

  private persistMetrics() {
    if (typeof window !== 'undefined') {
      const recentMetrics = this.metrics.slice(-50); // Keep last 50 metrics
      localStorage.setItem('performance_metrics', JSON.stringify(recentMetrics));
    }
  }

  private startPerformanceReporting() {
    // Report metrics every 30 seconds
    setInterval(() => {
      this.generatePerformanceReport();
    }, 30000);

    // Report on page visibility change
    if (typeof document !== 'undefined') {
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
          this.generatePerformanceReport();
        }
      });
    }
  }

  private generatePerformanceReport() {
    const report = {
      timestamp: Date.now(),
      url: typeof window !== 'undefined' ? window.location.href : '',
      metrics: this.metrics.slice(-10), // Last 10 metrics
      summary: this.getPerformanceSummary(),
    };

    // Store report
    if (typeof window !== 'undefined') {
      localStorage.setItem('latest_performance_report', JSON.stringify(report));
    }

    return report;
  }

  private getPerformanceSummary() {
    const summary: Record<string, any> = {};
    
    Object.keys(CORE_WEB_VITALS_THRESHOLDS).forEach(metricName => {
      const metricData = this.metrics.filter(m => m.name === metricName);
      if (metricData.length > 0) {
        const latest = metricData[metricData.length - 1];
        summary[metricName] = {
          value: latest.value,
          rating: latest.rating,
          isGood: latest.rating === 'good',
        };
      }
    });

    return summary;
  }

  private generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  // Public methods
  public getMetrics(): PerformanceMetric[] {
    return this.metrics;
  }

  public getPerformanceScore(): number {
    const summary = this.getPerformanceSummary();
    const totalMetrics = Object.keys(summary).length;
    const goodMetrics = Object.values(summary).filter((metric: any) => metric.isGood).length;
    
    return totalMetrics > 0 ? Math.round((goodMetrics / totalMetrics) * 100) : 0;
  }

  public cleanup() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Initialize global performance monitor
export const createPerformanceMonitor = () => {
  if (typeof window !== 'undefined') {
    return new PerformanceMonitor();
  }
  return null;
};

// Export monitoring utilities
export const getStoredMetrics = (): PerformanceMetric[] => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('performance_metrics');
    return stored ? JSON.parse(stored) : [];
  }
  return [];
};

export const getLatestPerformanceReport = () => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('latest_performance_report');
    return stored ? JSON.parse(stored) : null;
  }
  return null;
};