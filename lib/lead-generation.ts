// Lead Generation & Revenue Optimization System
// Advanced lead capture and conversion for $50K+ monthly revenue target

export interface LeadData {
  name: string;
  email: string;
  company: string;
  role: string;
  companyStage: string;
  arr: string;
  teamSize: string;
  location: string;
  industry: string;
  previousFunding: string;
  urgency: string;
  source: string;
  campaign?: string;
  leadMagnet?: string;
}

export interface LeadScoringCriteria {
  companyStage: Record<string, number>;
  arr: Record<string, number>;
  teamSize: Record<string, number>;
  industry: Record<string, number>;
  urgency: Record<string, number>;
  location: Record<string, number>;
}

// Revenue-optimized lead scoring system
export const leadScoringCriteria: LeadScoringCriteria = {
  companyStage: {
    'Series A Ready': 40,
    'Seed+': 30,
    'Pre-Seed': 20,
    'Idea Stage': 5
  },
  arr: {
    '5000000+': 35, // $5M+
    '1000000-4999999': 30, // $1M-$5M
    '500000-999999': 25, // $500K-$1M
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
  },
  urgency: {
    'immediate': 15, // Within 30 days
    'short': 12,     // 1-3 months
    'medium': 8,     // 3-6 months
    'long': 5        // 6+ months
  },
  location: {
    'Austin': 12,  // #3 VC hub globally
    'NYC': 10,
    'San Francisco': 10,
    'Boston': 8,
    'Denver': 8,
    'Miami': 8,
    'Chicago': 6,
    'Other': 5
  }
};

export class LeadGenerationSystem {
  private static instance: LeadGenerationSystem;
  
  static getInstance(): LeadGenerationSystem {
    if (!LeadGenerationSystem.instance) {
      LeadGenerationSystem.instance = new LeadGenerationSystem();
    }
    return LeadGenerationSystem.instance;
  }

  // Advanced lead scoring with revenue potential calculation
  calculateLeadScore(leadData: LeadData): {
    score: number;
    category: 'Hot' | 'Warm' | 'Cold';
    revenueValue: number;
    priority: 'High' | 'Medium' | 'Low';
  } {
    let score = 0;
    
    // Score based on criteria
    Object.entries(leadScoringCriteria).forEach(([key, values]) => {
      const leadValue = leadData[key as keyof LeadData];
      if (leadValue && values[leadValue as keyof typeof values]) {
        score += values[leadValue as keyof typeof values];
      }
    });

    // Geographic multiplier (Phase 1 research insights)
    const locationMultipliers = {
      'Austin': 1.15, // #3 VC hub
      'NYC': 1.10,
      'San Francisco': 1.10,
      'Boston': 1.05,
      'Denver': 1.05,
      'Miami': 1.05
    };

    if (leadData.location && locationMultipliers[leadData.location as keyof typeof locationMultipliers]) {
      score *= locationMultipliers[leadData.location as keyof typeof locationMultipliers];
    }

    // Revenue value calculation (based on business model)
    let revenueValue = 0;
    if (score >= 80) {
      revenueValue = 25000; // High-value client ($25K/month)
    } else if (score >= 60) {
      revenueValue = 18000; // Mid-tier client ($18K/month)
    } else if (score >= 40) {
      revenueValue = 12000; // Lower-tier client ($12K/month)
    } else {
      revenueValue = 5000;  // Consultation/project ($5K one-time)
    }

    // Lead categorization
    let category: 'Hot' | 'Warm' | 'Cold';
    let priority: 'High' | 'Medium' | 'Low';

    if (score >= 75) {
      category = 'Hot';
      priority = 'High';
    } else if (score >= 50) {
      category = 'Warm';
      priority = 'Medium';
    } else {
      category = 'Cold';
      priority = 'Low';
    }

    return {
      score: Math.min(score, 100),
      category,
      revenueValue,
      priority
    };
  }

  // Lead capture with advanced tracking
  async captureLead(leadData: LeadData, leadMagnet?: string): Promise<{
    success: boolean;
    leadId: string;
    score: any;
    nextSteps: string[];
  }> {
    try {
      // Calculate lead score and value
      const scoreData = this.calculateLeadScore(leadData);
      
      // Generate unique lead ID
      const leadId = `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      // Enhanced tracking
      if (typeof window !== 'undefined' && window.gtag) {
        // Track lead capture
        window.gtag('event', 'generate_lead', {
          currency: 'USD',
          value: scoreData.revenueValue,
          lead_score: scoreData.score,
          lead_category: scoreData.category,
          lead_source: leadData.source,
          lead_magnet: leadMagnet,
          company_stage: leadData.companyStage,
          company_arr: leadData.arr,
          location: leadData.location,
          industry: leadData.industry
        });

        // Track high-value leads separately
        if (scoreData.category === 'Hot') {
          window.gtag('event', 'high_value_lead', {
            currency: 'USD',
            value: scoreData.revenueValue,
            lead_id: leadId,
            priority: 'urgent_follow_up'
          });
        }
      }

      // Store lead data (simulate API call)
      await this.storeLead({
        ...leadData,
        leadId,
        score: scoreData.score,
        category: scoreData.category,
        revenueValue: scoreData.revenueValue,
        priority: scoreData.priority,
        captureDate: new Date().toISOString(),
        leadMagnet
      });

      // Trigger automated follow-up sequence
      const nextSteps = this.getFollowUpSteps(scoreData);

      return {
        success: true,
        leadId,
        score: scoreData,
        nextSteps
      };
    } catch (error) {
      console.error('Lead capture error:', error);
      
      // Track failed lead capture
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'lead_capture_failed', {
          error: 'capture_failed',
          lead_source: leadData.source
        });
      }
      
      return {
        success: false,
        leadId: '',
        score: { score: 0, category: 'Cold', revenueValue: 0, priority: 'Low' },
        nextSteps: []
      };
    }
  }

  // Revenue-optimized follow-up steps
  private getFollowUpSteps(scoreData: any): string[] {
    const steps = [];

    if (scoreData.category === 'Hot') {
      steps.push(
        'Immediate phone call within 2 hours',
        'Send personalized Series A readiness assessment',
        'Schedule consultation within 24 hours',
        'Prepare customized advisory proposal',
        'Set up investor introduction pipeline'
      );
    } else if (scoreData.category === 'Warm') {
      steps.push(
        'Send welcome email with resources within 1 hour',
        'Follow-up call within 48 hours',
        'Provide investment readiness assessment',
        'Send case studies and testimonials',
        'Schedule consultation within 1 week'
      );
    } else {
      steps.push(
        'Add to nurturing email sequence',
        'Send weekly educational content',
        'Periodic check-ins for stage progression',
        'Invite to webinars and events'
      );
    }

    return steps;
  }

  // Lead storage (simulate CRM integration)
  private async storeLead(leadData: any): Promise<void> {
    // In a real implementation, this would integrate with:
    // - HubSpot CRM
    // - Salesforce
    // - Pipedrive
    // - Custom CRM API
    
    console.log('Lead stored:', leadData);
    
    // Store in local storage for demo purposes
    if (typeof window !== 'undefined') {
      const existingLeads = JSON.parse(localStorage.getItem('vommuli_leads') || '[]');
      existingLeads.push(leadData);
      localStorage.setItem('vommuli_leads', JSON.stringify(existingLeads));
    }
  }

  // Email capture for different lead magnets
  async captureEmail(email: string, source: string, leadMagnet: string): Promise<boolean> {
    try {
      // Track email capture
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'email_signup', {
          email_source: source,
          lead_magnet: leadMagnet,
          value: 250 // Email lead value
        });
      }

      // Simulate email service integration (Mailchimp, ConvertKit, etc.)
      console.log('Email captured:', { email, source, leadMagnet });
      
      return true;
    } catch (error) {
      console.error('Email capture error:', error);
      return false;
    }
  }

  // Revenue tracking and attribution
  trackRevenue(leadId: string, revenueAmount: number, revenueType: 'monthly_retainer' | 'success_fee' | 'consultation'): void {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'purchase', {
        transaction_id: `rev_${leadId}_${Date.now()}`,
        value: revenueAmount,
        currency: 'USD',
        items: [{
          item_id: leadId,
          item_name: `Vommuli ${revenueType}`,
          category: 'Financial Services',
          quantity: 1,
          price: revenueAmount
        }]
      });

      // Track specific revenue milestones
      if (revenueAmount >= 25000) {
        window.gtag('event', 'high_value_conversion', {
          value: revenueAmount,
          lead_id: leadId,
          conversion_type: revenueType
        });
      }
    }
  }
}

// Lead Magnets Configuration
export const leadMagnets = {
  assessmentTool: {
    name: 'Investment Readiness Assessment',
    description: 'Free comprehensive evaluation of your Series A readiness',
    url: '/tools/investment-readiness-assessment',
    value: 500, // Lead value
    conversionRate: 0.25, // 25% typical conversion rate
    targetAudience: 'Series A startups'
  },
  pitchDeckTemplate: {
    name: 'Series A Pitch Deck Template',
    description: 'Professional pitch deck template used by successful Series A companies',
    url: '/downloads/series-a-pitch-deck-template',
    value: 300,
    conversionRate: 0.15,
    targetAudience: 'Early-stage startups'
  },
  financialModel: {
    name: 'Series A Financial Model',
    description: 'Complete financial model template for Series A fundraising',
    url: '/downloads/series-a-financial-model',
    value: 400,
    conversionRate: 0.20,
    targetAudience: 'Series A ready startups'
  },
  fundraisingGuide: {
    name: 'Complete Startup Fundraising Guide',
    description: 'Step-by-step guide to raising Series A funding',
    url: '/startup-fundraising-guide',
    value: 350,
    conversionRate: 0.18,
    targetAudience: 'All startup stages'
  },
  checklistDownload: {
    name: 'Series A Preparation Checklist',
    description: '50+ action items for Series A preparation',
    url: '/resources/series-a-funding-checklist',
    value: 250,
    conversionRate: 0.12,
    targetAudience: 'Pre-Series A startups'
  }
};

// Conversion optimization experiments
export const conversionExperiments = {
  // A/B test variants for CTAs
  ctaVariants: [
    'Get Your Free Assessment',
    'Check Your Investment Readiness',
    'Evaluate Your Funding Potential',
    'Start Your Series A Journey'
  ],
  
  // Headline variants for lead forms
  headlineVariants: [
    'Get Expert Series A Guidance',
    'Accelerate Your Fundraising Success',
    'Secure Your Series A Funding',
    'Professional Fundraising Advisory'
  ],
  
  // Value proposition variants
  valuePropositions: [
    '85% success rate connecting startups with Series A investors',
    '$500M+ raised for clients through expert VC introductions',
    'Average 6-month faster fundraising with professional guidance'
  ]
};

// Revenue optimization settings
export const revenueOptimization = {
  // Target monthly revenue: $50K+
  monthlyRevenueTarget: 50000,
  
  // Average client values
  averageClientValues: {
    monthlyRetainer: 20000,
    successFee: 50000,
    consultation: 2500
  },
  
  // Conversion targets
  conversionTargets: {
    visitorToLead: 0.05, // 5% conversion rate
    leadToOpportunity: 0.25, // 25% of leads become opportunities
    opportunityToClient: 0.40, // 40% of opportunities become clients
  },
  
  // Lead volume requirements (to hit $50K/month)
  leadVolumeTargets: {
    hotLeads: 3,    // 3 hot leads/month = $75K potential
    warmLeads: 10,  // 10 warm leads/month = $180K potential
    coldLeads: 50   // 50 cold leads/month for nurturing
  }
};

// Initialize global lead generation system
export const leadGenSystem = LeadGenerationSystem.getInstance();