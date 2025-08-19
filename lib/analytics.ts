// Enhanced Analytics & Conversion Tracking for Vommuli Ventures
// Designed for $50K+ monthly revenue tracking from organic leads

export interface ConversionEvent {
  eventName: string;
  value?: number;
  currency?: string;
  leadScore?: number;
  source?: string;
  medium?: string;
  campaign?: string;
  content?: string;
  term?: string;
}

export interface LeadGenerationEvent extends ConversionEvent {
  leadType: 'consultation' | 'assessment' | 'download' | 'contact';
  estimatedValue: number; // $5K-$25K per lead
  companySize?: string;
  fundingStage?: string;
  industry?: string;
  location?: string;
}

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: any
    ) => void;
    dataLayer: any[];
  }
}

// Enhanced Google Analytics 4 Configuration
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-GCD27WFY2P';

// Initialize Google Analytics with enhanced ecommerce
export const initGA = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      // Enhanced ecommerce for lead generation tracking
      custom_map: {
        custom_parameter_1: 'lead_score',
        custom_parameter_2: 'estimated_value',
        custom_parameter_3: 'funding_stage',
      },
      // Core Web Vitals tracking
      send_page_view: true,
      allow_enhanced_conversions: true,
      allow_ad_personalization: false, // Financial services compliance
    });
  }
};

// Track page views with enhanced data
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_location: url,
      page_title: title,
      send_to: GA_TRACKING_ID,
    });
  }
};

// Track lead generation events with revenue estimation
export const trackLeadGeneration = (event: LeadGenerationEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    // Primary conversion event
    window.gtag('event', 'lead_generated', {
      event_category: 'Lead Generation',
      event_label: event.leadType,
      value: event.estimatedValue,
      currency: 'USD',
      custom_parameter_1: event.leadScore || 0,
      custom_parameter_2: event.estimatedValue,
      custom_parameter_3: event.fundingStage || 'unknown',
      send_to: GA_TRACKING_ID,
    });

    // Enhanced ecommerce event for revenue tracking
    window.gtag('event', 'purchase', {
      transaction_id: `lead_${Date.now()}`,
      value: event.estimatedValue,
      currency: 'USD',
      items: [{
        item_id: event.leadType,
        item_name: `Lead - ${event.leadType}`,
        category: 'Lead Generation',
        quantity: 1,
        price: event.estimatedValue,
      }],
      send_to: GA_TRACKING_ID,
    });
  }
};

// Track high-value conversion events
export const trackConversion = (event: ConversionEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event.eventName, {
      event_category: 'Conversion',
      value: event.value || 0,
      currency: event.currency || 'USD',
      send_to: GA_TRACKING_ID,
    });
  }
};

// Track investment readiness assessment completion
export const trackAssessmentCompletion = (score: number, estimatedValue: number) => {
  trackLeadGeneration({
    eventName: 'assessment_completed',
    leadType: 'assessment',
    leadScore: score,
    estimatedValue: estimatedValue,
    value: estimatedValue,
    currency: 'USD',
  });
};

// Track consultation booking (highest value conversion)
export const trackConsultationBooking = (
  companySize: string, 
  fundingStage: string, 
  industry: string
) => {
  const estimatedValue = calculateLeadValue(companySize, fundingStage, industry);
  
  trackLeadGeneration({
    eventName: 'consultation_booked',
    leadType: 'consultation',
    estimatedValue: estimatedValue,
    companySize,
    fundingStage,
    industry,
    value: estimatedValue,
    currency: 'USD',
  });
};

// Track download conversions (lead magnets)
export const trackDownload = (downloadType: string, leadScore: number = 50) => {
  const estimatedValue = downloadType.includes('template') ? 5000 : 7500;
  
  trackLeadGeneration({
    eventName: 'download_completed',
    leadType: 'download',
    estimatedValue: estimatedValue,
    leadScore: leadScore,
    content: downloadType,
    value: estimatedValue,
    currency: 'USD',
  });
};

// Calculate lead value based on business rules
const calculateLeadValue = (
  companySize: string, 
  fundingStage: string, 
  industry: string
): number => {
  let baseValue = 15000; // Base lead value
  
  // Company size multiplier
  switch (companySize) {
    case 'enterprise':
      baseValue *= 1.5;
      break;
    case 'mid-market':
      baseValue *= 1.25;
      break;
    case 'startup':
      baseValue *= 1.0;
      break;
  }
  
  // Funding stage multiplier
  switch (fundingStage) {
    case 'series-c':
    case 'series-b':
      baseValue *= 1.4;
      break;
    case 'series-a':
      baseValue *= 1.3;
      break;
    case 'seed':
      baseValue *= 1.1;
      break;
  }
  
  // Industry multiplier (fintech and healthtech premium)
  switch (industry) {
    case 'fintech':
    case 'healthtech':
      baseValue *= 1.2;
      break;
    case 'saas':
    case 'ai':
      baseValue *= 1.15;
      break;
  }
  
  return Math.round(baseValue);
};

// Track Core Web Vitals for performance monitoring
export const trackWebVitals = (metric: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.value),
      non_interaction: true,
      send_to: GA_TRACKING_ID,
    });
  }
};

// Track form interactions for conversion optimization
export const trackFormInteraction = (
  formName: string, 
  action: 'start' | 'complete' | 'abandon',
  step?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', `form_${action}`, {
      event_category: 'Form Interaction',
      event_label: formName,
      custom_parameter_1: step || 0,
      send_to: GA_TRACKING_ID,
    });
  }
};

// Track scroll depth for engagement measurement
export const trackScrollDepth = (percentage: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'scroll_depth', {
      event_category: 'Engagement',
      event_label: `${percentage}%`,
      value: percentage,
      send_to: GA_TRACKING_ID,
    });
  }
};

// GA_TRACKING_ID is already exported above