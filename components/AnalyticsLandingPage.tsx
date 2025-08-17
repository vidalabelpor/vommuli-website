import React from 'react';
import AnalyticsHero from './AnalyticsHero';
import AnalyticsFeatures from './AnalyticsFeatures';
import AnalyticsTestimonial from './AnalyticsTestimonial';
import AnalyticsFAQ from './AnalyticsFAQ';
import AnalyticsBlog from './AnalyticsBlog';

interface AnalyticsLandingPageProps {
  heroTitle?: string;
  heroSubtitle?: string;
  onHeroCtaClick?: () => void;
  onBlogCtaClick?: () => void;
}

export default function AnalyticsLandingPage({
  heroTitle = "Beautiful analytics to grow smarter",
  heroSubtitle = "Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.",
  onHeroCtaClick,
  onBlogCtaClick
}: AnalyticsLandingPageProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <AnalyticsHero
        title={heroTitle}
        subtitle={heroSubtitle}
        onCtaClick={onHeroCtaClick}
      />
      
      {/* Company Logos & Testimonial */}
      <AnalyticsTestimonial />
      
      {/* Features Section */}
      <AnalyticsFeatures />
      
      {/* FAQ Section */}
      <AnalyticsFAQ />
      
      {/* Blog Section */}
      <AnalyticsBlog onCtaClick={onBlogCtaClick} />
    </div>
  );
}