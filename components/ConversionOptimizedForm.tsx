'use client';

import React, { useState } from 'react';
import { Button, Input, TextArea, Card, CardHeader, CardTitle, CardContent } from '@/components/ui';
import { useConversionOptimizer, CRO_CONFIGS } from '@/lib/conversion-optimization';

export interface ConversionFormProps {
  variant?: 'consultation' | 'contact' | 'assessment';
  title?: string;
  description?: string;
  successMessage?: string;
  page: string; // For tracking purposes
}

interface FormData {
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
  message: string;
  urgency: string;
}

const ConversionOptimizedForm: React.FC<ConversionFormProps> = ({
  variant = 'consultation',
  title,
  description,
  successMessage,
  page
}) => {
  const { trackFormSubmission, trackCTAClick, getVariant, calculateLeadScore } = useConversionOptimizer();
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    role: '',
    companyStage: '',
    arr: '',
    teamSize: '',
    location: '',
    industry: '',
    previousFunding: '',
    message: '',
    urgency: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  // A/B test variants
  const ctaText = getVariant('form_cta', CRO_CONFIGS.ctaVariants);
  const formTitle = title || getVariant('form_title', [
    'Schedule Your Series A Advisory Consultation',
    'Book Your Fundraising Strategy Session',
    'Get Expert VC Introduction Services'
  ]);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.companyStage) newErrors.companyStage = 'Company stage is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Calculate lead score for qualification
      const leadScore = calculateLeadScore(formData);
      
      // Track form submission with lead qualification data
      trackFormSubmission(`${variant}_form`, page, {
        ...formData,
        leadScore,
        isQualified: leadScore >= 75,
        formVariant: variant,
        ctaVariant: ctaText
      });
      
      // Simulate API call (replace with actual endpoint)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Track successful submission
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'form_submit', {
          form_id: `${variant}_form`,
          form_name: formTitle,
          lead_score: leadScore,
          page_path: page
        });
      }
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
      // Track form submission failure
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'form_submit_failed', {
          form_id: `${variant}_form`,
          error: 'submission_failed'
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <Card variant="elevated" className="max-w-2xl mx-auto">
        <CardContent className="text-center py-12">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-primary-900 mb-4">Thank You!</h3>
          <p className="text-secondary-700 mb-6">
            {successMessage || "We've received your request and will contact you within 24 hours to schedule your consultation."}
          </p>
          <p className="text-sm text-secondary-600">
            Our team will review your information and prepare personalized recommendations for your Series A funding strategy.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card variant="elevated" className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center">{formTitle}</CardTitle>
        {description && (
          <p className="text-center text-secondary-700 mt-2">{description}</p>
        )}
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              label="Full Name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              error={errors.name}
              required
              placeholder="John Smith"
            />
            <Input
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              error={errors.email}
              required
              placeholder="john@company.com"
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              label="Company Name"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              error={errors.company}
              required
              placeholder="Acme Corp"
            />
            <Input
              label="Your Role"
              value={formData.role}
              onChange={(e) => handleInputChange('role', e.target.value)}
              placeholder="CEO, CTO, Founder"
            />
          </div>

          {/* Company Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-secondary-900 mb-2 block">
                Company Stage <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.companyStage}
                onChange={(e) => handleInputChange('companyStage', e.target.value)}
                className="flex h-12 w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                required
              >
                <option value="">Select stage</option>
                <option value="Idea Stage">Idea Stage</option>
                <option value="Pre-Seed">Pre-Seed</option>
                <option value="Seed+">Seed</option>
                <option value="Series A Ready">Series A Ready</option>
                <option value="Series B+">Series B+</option>
              </select>
              {errors.companyStage && (
                <p className="text-sm text-red-600 mt-1">{errors.companyStage}</p>
              )}
            </div>
            
            <div>
              <label className="text-sm font-medium text-secondary-900 mb-2 block">Annual Recurring Revenue</label>
              <select
                value={formData.arr}
                onChange={(e) => handleInputChange('arr', e.target.value)}
                className="flex h-12 w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              >
                <option value="">Select ARR range</option>
                <option value="0-99999">$0 - $100K</option>
                <option value="100000-499999">$100K - $500K</option>
                <option value="500000-999999">$500K - $1M</option>
                <option value="1000000-4999999">$1M - $5M</option>
                <option value="5000000+">$5M+</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium text-secondary-900 mb-2 block">Team Size</label>
              <select
                value={formData.teamSize}
                onChange={(e) => handleInputChange('teamSize', e.target.value)}
                className="flex h-12 w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              >
                <option value="">Select size</option>
                <option value="1-4">1-4 people</option>
                <option value="5-9">5-9 people</option>
                <option value="10-19">10-19 people</option>
                <option value="20-49">20-49 people</option>
                <option value="50+">50+ people</option>
              </select>
            </div>
            
            <div>
              <label className="text-sm font-medium text-secondary-900 mb-2 block">Location</label>
              <select
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                className="flex h-12 w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              >
                <option value="">Select location</option>
                <option value="Austin">Austin</option>
                <option value="NYC">New York</option>
                <option value="San Francisco">San Francisco</option>
                <option value="Boston">Boston</option>
                <option value="Denver">Denver</option>
                <option value="Miami">Miami</option>
                <option value="Chicago">Chicago</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div>
              <label className="text-sm font-medium text-secondary-900 mb-2 block">Industry</label>
              <select
                value={formData.industry}
                onChange={(e) => handleInputChange('industry', e.target.value)}
                className="flex h-12 w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              >
                <option value="">Select industry</option>
                <option value="AI/ML">AI/ML</option>
                <option value="FinTech">FinTech</option>
                <option value="HealthTech">HealthTech</option>
                <option value="CleanTech">CleanTech</option>
                <option value="SaaS">SaaS</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Additional Information */}
          <TextArea
            label="Tell us about your funding needs"
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            error={errors.message}
            required
            placeholder="Please describe your funding goals, timeline, and any specific challenges you're facing..."
            minRows={4}
          />

          <div>
            <label className="text-sm font-medium text-secondary-900 mb-2 block">Timeline</label>
            <select
              value={formData.urgency}
              onChange={(e) => handleInputChange('urgency', e.target.value)}
              className="flex h-12 w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            >
              <option value="">Select timeline</option>
              <option value="immediate">Immediate (within 30 days)</option>
              <option value="short">Short-term (1-3 months)</option>
              <option value="medium">Medium-term (3-6 months)</option>
              <option value="long">Long-term (6+ months)</option>
            </select>
          </div>

          <Button
            type="submit"
            size="lg"
            fullWidth
            loading={isSubmitting}
            onClick={() => trackCTAClick(page, ctaText)}
          >
            {isSubmitting ? 'Submitting...' : ctaText}
          </Button>

          <div className="text-center text-sm text-secondary-600">
            <p>We respect your privacy and will never share your information.</p>
            <p className="mt-1">Response time: Within 24 hours on business days.</p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ConversionOptimizedForm;