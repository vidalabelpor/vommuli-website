'use client';

import React, { useState } from 'react';
import { Button, Input, Card, CardContent } from '@/components/ui';
import { useConversionOptimizer } from '@/lib/conversion-optimization';
import { leadGenSystem, leadMagnets } from '@/lib/lead-generation';

export interface LeadMagnetLandingProps {
  magnet: keyof typeof leadMagnets;
  title?: string;
  description?: string;
  benefitsList?: string[];
  socialProof?: {
    statistic: string;
    description: string;
  }[];
}

const LeadMagnetLanding: React.FC<LeadMagnetLandingProps> = ({
  magnet,
  title,
  description,
  benefitsList,
  socialProof
}) => {
  const { trackCTAClick, getVariant } = useConversionOptimizer();
  const magnetData = leadMagnets[magnet];
  
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  // A/B testing variants
  const ctaText = getVariant('lead_magnet_cta', [
    'Get Free Access Now',
    'Download Now',
    'Get Your Free Copy',
    'Access Free Resource'
  ]);

  const headlineVariant = getVariant('lead_magnet_headline', [
    title || magnetData.name,
    `Free: ${magnetData.name}`,
    `Get Your ${magnetData.name}`,
    `Download: ${magnetData.name}`
  ]);

  const defaultBenefits = [
    'Instant download - no waiting',
    'Professional templates used by successful startups',
    'Expert insights from experienced advisors',
    'Actionable steps you can implement immediately',
    'Completely free - no hidden costs'
  ];

  const defaultSocialProof = [
    { statistic: '1,000+', description: 'Startups have used our resources' },
    { statistic: '85%', description: 'Success rate for our clients' },
    { statistic: '$500M+', description: 'Raised by companies we\'ve helped' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !name) {
      setError('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      // Capture email with lead generation system
      const emailCaptured = await leadGenSystem.captureEmail(
        email,
        'lead_magnet',
        magnetData.name
      );

      if (emailCaptured) {
        // Track conversion
        trackCTAClick(window.location.pathname, ctaText);
        
        // Track high-value lead magnet conversion
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'lead_magnet_conversion', {
            lead_magnet: magnetData.name,
            value: magnetData.value,
            conversion_rate: magnetData.conversionRate
          });
        }

        setIsSubmitted(true);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-primary flex items-center justify-center">
        <div className="container max-w-2xl">
          <Card className="text-center">
            <CardContent className="p-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h2 className="text-3xl font-bold text-primary-900 mb-4">
                Success! Check Your Email
              </h2>
              <p className="text-xl text-secondary-700 mb-6">
                We've sent your free {magnetData.name.toLowerCase()} to <strong>{email}</strong>
              </p>
              
              <div className="bg-primary-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-primary-900 mb-3">What's Next?</h3>
                <ul className="text-left space-y-2 text-secondary-700">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-0.5 text-xs font-bold text-primary-600">1</span>
                    Check your email for the download link (it might be in spam)
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-0.5 text-xs font-bold text-primary-600">2</span>
                    Download and review your free resource
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-0.5 text-xs font-bold text-primary-600">3</span>
                    Watch for our weekly Series A insights and tips
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <Button 
                  onClick={() => window.open(magnetData.url, '_blank')}
                  className="w-full"
                  size="lg"
                >
                  Access Resource Now
                </Button>
                
                <p className="text-sm text-secondary-600">
                  Or <a href="/contact" className="text-primary-600 hover:text-primary-800 font-medium">schedule a free consultation</a> to discuss your fundraising strategy
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-primary">
      {/* Hero Section */}
      <section className="section-padding-lg">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Value Proposition */}
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-100 text-accent-800 text-sm font-medium mb-6">
                🎁 Free Resource
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6 leading-tight">
                {headlineVariant}
              </h1>
              
              <p className="text-xl text-secondary-800 mb-8 leading-relaxed">
                {description || magnetData.description}
              </p>

              {/* Benefits List */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-primary-900 mb-4">What You'll Get:</h3>
                <ul className="space-y-3">
                  {(benefitsList || defaultBenefits).map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-secondary-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Proof */}
              <div className="grid grid-cols-3 gap-6">
                {(socialProof || defaultSocialProof).map((proof, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary-600">{proof.statistic}</div>
                    <div className="text-sm text-secondary-600">{proof.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Lead Capture Form */}
            <div>
              <Card className="shadow-2xl">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-primary-900 mb-2">
                      Get Instant Access
                    </h2>
                    <p className="text-secondary-700">
                      Download your free {magnetData.name.toLowerCase()} now
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      label="Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="John Smith"
                      fullWidth
                    />
                    
                    <Input
                      label="Email Address"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="john@company.com"
                      fullWidth
                    />

                    <Input
                      label="Company Name (Optional)"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Your Company"
                      fullWidth
                    />

                    {error && (
                      <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                        {error}
                      </div>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      fullWidth
                      loading={isSubmitting}
                      className="mt-6"
                    >
                      {isSubmitting ? 'Processing...' : ctaText}
                    </Button>

                    <div className="text-center text-sm text-secondary-600 mt-4">
                      <p>✅ Instant download - no waiting</p>
                      <p>🔒 We respect your privacy and never spam</p>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Trust Signals */}
              <div className="mt-6 text-center">
                <p className="text-sm text-secondary-600 mb-2">
                  Trusted by founders at:
                </p>
                <div className="flex justify-center items-center space-x-6 opacity-60">
                  <span className="text-xs font-medium">Y Combinator</span>
                  <span className="text-xs font-medium">Techstars</span>
                  <span className="text-xs font-medium">500 Startups</span>
                  <span className="text-xs font-medium">AngelPad</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Social Proof Section */}
      <section className="bg-white section-padding">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-6">
              Join 1,000+ Successful Founders
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "This resource helped us identify key gaps in our fundraising approach. We closed our Series A 3 months ahead of schedule.",
                author: "Sarah Chen",
                company: "TechFlow Analytics",
                result: "$12M Series A"
              },
              {
                quote: "The step-by-step approach made the entire process manageable. Highly recommend to any startup preparing for Series A.",
                author: "Marcus Rodriguez", 
                company: "GreenTech Solutions",
                result: "$8M Series A"
              },
              {
                quote: "Clear, actionable advice that we implemented immediately. The results speak for themselves.",
                author: "Jennifer Wang",
                company: "DataVault Security", 
                result: "$15M Series A"
              }
            ].map((testimonial, index) => (
              <Card key={index} variant="elevated">
                <CardContent className="p-6">
                  <div className="text-primary-500 text-2xl mb-4">"</div>
                  <p className="text-secondary-700 mb-4 italic">{testimonial.quote}</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-primary-900">{testimonial.author}</div>
                    <div className="text-secondary-600 text-sm">{testimonial.company}</div>
                    <div className="text-green-600 font-medium text-sm mt-1">{testimonial.result}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeadMagnetLanding;