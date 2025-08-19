// Conversion Optimization System
// Based on Phase 1 research findings and Phase 2 blueprint

import { trackConversion, trackFormSubmission, trackConsultationBooking } from './seo-utils';

export interface ConversionEvent {
  type: 'form_submission' | 'consultation_booking' | 'download' | 'email_signup' | 'phone_click' | 'cta_click';
  page: string;
  element: string;
  value?: number;
  metadata?: Record<string, any>;
}

export interface ConversionConfig {
  enableTracking: boolean;
  targetConversionRate: number; // Percentage (5% = 5)
  leadQualificationScore: number; // 1-100
  followUpSequence: boolean;
}

// Default conversion configuration based on Phase 1 research
export const conversionConfig: ConversionConfig = {
  enableTracking: true,
  targetConversionRate: 5.0, // 5% target from research
  leadQualificationScore: 75, // Minimum score for high-quality leads
  followUpSequence: true
};

// Conversion tracking utilities
export class ConversionOptimizer {
  private config: ConversionConfig;
  
  constructor(config: ConversionConfig = conversionConfig) {
    this.config = config;
  }

  // Track conversion events with enhanced data
  trackEvent(event: ConversionEvent): void {
    if (!this.config.enableTracking) return;

    // Standard conversion tracking
    trackConversion(event.type, event.value, {
      page: event.page,
      element: event.element,
      ...event.metadata
    });

    // Enhanced tracking for high-value conversions
    if (event.type === 'consultation_booking') {
      trackConsultationBooking();
      
      // Track as high-value conversion for financial services
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'purchase', {
          transaction_id: `consultation_${Date.now()}`,
          value: 1000, // High-value lead for financial services
          currency: 'USD',
          items: [{
            item_id: 'consultation',
            item_name: 'Series A Advisory Consultation',
            category: 'Professional Services',
            quantity: 1,
            price: 1000
          }]
        });
      }
    }

    // Form submission tracking with lead qualification
    if (event.type === 'form_submission') {
      const isQualified = this.assessLeadQuality(event.metadata);
      trackFormSubmission(event.element, true);
      
      if (isQualified && typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'generate_lead', {
          currency: 'USD',
          value: 500, // Qualified lead value
          lead_type: 'qualified',
          ...event.metadata
        });
      }
    }
  }

  // Assess lead quality based on Phase 1 research criteria
  private assessLeadQuality(metadata?: Record<string, any>): boolean {
    if (!metadata) return false;
    
    let score = 0;
    
    // Company stage indicators
    if (metadata.companyStage === 'Series A Ready') score += 30;
    else if (metadata.companyStage === 'Seed+') score += 20;
    else if (metadata.companyStage === 'Pre-Seed') score += 10;
    
    // Revenue indicators
    if (metadata.arr && parseFloat(metadata.arr) >= 1000000) score += 25; // $1M+ ARR
    else if (metadata.arr && parseFloat(metadata.arr) >= 500000) score += 15; // $500K+ ARR
    
    // Team size indicators
    if (metadata.teamSize && parseInt(metadata.teamSize) >= 10) score += 15;
    else if (metadata.teamSize && parseInt(metadata.teamSize) >= 5) score += 10;
    
    // Previous funding indicators
    if (metadata.previousFunding === 'yes') score += 15;
    
    // Geographic indicators (based on Phase 1 research)
    const premiumLocations = ['Austin', 'NYC', 'SF', 'Boston', 'Denver'];
    if (metadata.location && premiumLocations.includes(metadata.location)) score += 10;
    
    return score >= this.config.leadQualificationScore;
  }

  // A/B testing for conversion elements
  getVariant(testName: string, variants: string[]): string {
    if (typeof window === 'undefined') return variants[0];
    
    // Simple hash-based A/B testing
    const sessionId = this.getOrCreateSessionId();
    const hash = this.simpleHash(sessionId + testName);
    const variantIndex = hash % variants.length;
    
    // Track A/B test exposure
    if (window.gtag) {
      window.gtag('event', 'ab_test_exposure', {
        test_name: testName,
        variant: variants[variantIndex],
        session_id: sessionId
      });
    }
    
    return variants[variantIndex];
  }

  // Lead scoring for prioritization
  calculateLeadScore(leadData: Record<string, any>): number {
    let score = 0;
    
    // Base scoring criteria from Phase 1 research
    const scoringCriteria = {
      companyStage: {
        'Series A Ready': 40,
        'Seed+': 25,
        'Pre-Seed': 15,
        'Idea Stage': 5
      },
      arr: {
        '5000000+': 35, // $5M+
        '1000000-4999999': 30, // $1M-$5M
        '500000-999999': 20, // $500K-$1M
        '100000-499999': 15, // $100K-$500K
        '0-99999': 5
      },
      teamSize: {
        '50+': 20,
        '20-49': 15,
        '10-19': 10,
        '5-9': 8,
        '1-4': 5
      },
      industry: {
        'AI/ML': 15,
        'FinTech': 15,
        'HealthTech': 12,
        'CleanTech': 12,
        'SaaS': 10,
        'Other': 5
      }
    };

    // Calculate score based on criteria
    Object.entries(scoringCriteria).forEach(([key, values]) => {
      const leadValue = leadData[key];
      if (leadValue && values[leadValue as keyof typeof values]) {
        score += values[leadValue as keyof typeof values];
      }
    });

    // Geographic multiplier (Phase 1 research: Austin #3 VC hub)
    const locationMultipliers = {
      'Austin': 1.15,
      'NYC': 1.10,
      'San Francisco': 1.10,
      'Boston': 1.05,
      'Denver': 1.05,
      'Miami': 1.05
    };

    if (leadData.location && locationMultipliers[leadData.location as keyof typeof locationMultipliers]) {
      score *= locationMultipliers[leadData.location as keyof typeof locationMultipliers];
    }

    return Math.min(score, 100); // Cap at 100
  }

  // Session management
  private getOrCreateSessionId(): string {
    const key = 'vommuli_session_id';
    let sessionId = localStorage.getItem(key);
    
    if (!sessionId) {
      sessionId = Date.now().toString(36) + Math.random().toString(36).substr(2);
      localStorage.setItem(key, sessionId);
    }
    
    return sessionId;
  }

  // Simple hash function for A/B testing
  private simpleHash(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash);
  }
}

// Conversion optimization hooks for React components
export const useConversionOptimizer = () => {
  const optimizer = new ConversionOptimizer();
  
  return {
    trackEvent: (event: ConversionEvent) => optimizer.trackEvent(event),
    getVariant: (testName: string, variants: string[]) => optimizer.getVariant(testName, variants),
    calculateLeadScore: (leadData: Record<string, any>) => optimizer.calculateLeadScore(leadData),
    
    // Pre-built tracking functions for common elements
    trackFormSubmission: (formName: string, page: string, metadata?: Record<string, any>) => {
      optimizer.trackEvent({
        type: 'form_submission',
        page,
        element: formName,
        metadata
      });
    },
    
    trackConsultationClick: (page: string, element: string) => {
      optimizer.trackEvent({
        type: 'consultation_booking',
        page,
        element,
        value: 1000
      });
    },
    
    trackCTAClick: (ctaText: string, page: string) => {
      optimizer.trackEvent({
        type: 'cta_click',
        page,
        element: ctaText,
        value: 100
      });
    },

    trackDownload: (fileName: string, page: string) => {
      optimizer.trackEvent({
        type: 'download',
        page,
        element: fileName,
        value: 250
      });
    }
  };
};

// Conversion rate optimization configurations
export const CRO_CONFIGS = {
  // Homepage hero variants (Phase 1 research keywords)
  heroHeadlines: [
    'Series A Funding Advisory & VC Deal Sourcing Services',
    'Expert VC Introductions for Series A Startups', 
    'Professional Venture Capital Deal Flow Services'
  ],
  
  // CTA button variants
  ctaVariants: [
    'Schedule Consultation',
    'Get Started Today',
    'Book Advisory Call',
    'Start Your Funding Journey'
  ],
  
  // Value proposition variants
  valueProps: [
    '$500M+ raised for clients through targeted VC introductions',
    '85% success rate connecting startups with Series A investors',
    'Expert guidance from former VCs and successful founders'
  ]
};

// Initialize global conversion optimizer
export const globalOptimizer = new ConversionOptimizer();