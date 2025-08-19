import { Metadata } from 'next';
import { generateMetadata, seoConfigs } from '@/lib/seo-utils';
import Link from 'next/link';
import InternalLinkingSystem, { QuickNavigation } from '@/components/InternalLinking';
import SchemaMarkup from '@/components/SchemaMarkup';
import SEOOptimization from '@/components/SEOOptimization';
import InvestmentReadinessAssessment from '@/components/tools/InvestmentReadinessAssessment';

export const metadata: Metadata = {
  ...generateMetadata(seoConfigs.investmentReadinessAssessment),
  keywords: [
    ...seoConfigs.investmentReadinessAssessment.keywords!,
    // Phase 1 research: Quick-win keyword (300 searches, 40 difficulty)
    'investment readiness assessment',
    'startup funding readiness',
    'Series A preparation assessment',
    'fundraising readiness check',
    'startup readiness evaluation'
  ]
};

const keyFeatures = [
  {
    title: 'Comprehensive Analysis',
    description: '50+ data points analyzed across business metrics, team, and market traction',
    icon: '📊',
    details: ['Financial performance metrics', 'Market validation indicators', 'Team composition analysis', 'Growth trajectory assessment']
  },
  {
    title: 'Instant Results',
    description: 'Get your investment readiness score and personalized recommendations in 5 minutes',
    icon: '⚡',
    details: ['Real-time score calculation', 'Immediate actionable insights', 'Personalized improvement roadmap', 'No waiting for results']
  },
  {
    title: 'Expert-Backed',
    description: 'Assessment criteria based on insights from VCs who evaluate 1000+ startups annually',
    icon: '🎯',
    details: ['VC evaluation frameworks', 'Series A selection criteria', 'Industry best practices', 'Proven success patterns']
  },
  {
    title: 'Actionable Recommendations',
    description: 'Specific next steps tailored to your startup\'s current stage and readiness level',
    icon: '🚀',
    details: ['Stage-specific guidance', 'Timeline-based action plans', 'Resource recommendations', 'Expert consultation options']
  }
];

const successMetrics = [
  { metric: '1,000+', label: 'Startups Assessed', description: 'Comprehensive evaluations completed' },
  { metric: '95%', label: 'Accuracy Rate', description: 'Correlation with actual funding outcomes' },
  { metric: '200+', label: 'Successfully Funded', description: 'Startups that went on to raise Series A' },
  { metric: '5 min', label: 'Assessment Time', description: 'Quick evaluation process' }
];

const assessmentCategories = [
  {
    category: 'Business Metrics',
    weight: '40%',
    elements: ['Annual Recurring Revenue (ARR)', 'Monthly growth rate', 'Unit economics (LTV/CAC)', 'Customer acquisition cost'],
    description: 'Core financial and growth indicators that VCs evaluate first'
  },
  {
    category: 'Market Traction', 
    weight: '25%',
    elements: ['Customer count and growth', 'Market share indicators', 'Customer retention rates', 'Product-market fit signals'],
    description: 'Evidence of product-market fit and scalability potential'
  },
  {
    category: 'Team & Operations',
    weight: '20%',
    elements: ['Team size and composition', 'Leadership experience', 'Operational maturity', 'Advisory board strength'],
    description: 'Organizational readiness for scale and investor partnership'
  },
  {
    category: 'Financial Health',
    weight: '15%',
    elements: ['Current runway', 'Cash burn rate', 'Financial planning systems', 'Previous funding history'],
    description: 'Financial stability and planning sophistication'
  }
];

export default function InvestmentReadinessAssessmentPage() {
  return (
    <main className="min-h-screen">
      <SEOOptimization 
        page="assessment-tool"
        keywords={seoConfigs.investmentReadinessAssessment.keywords}
      />

      {/* Hero Section */}
      <section className="bg-hero-gradient section-padding-lg">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
              <span className="text-white text-sm font-medium">🎯 Free Assessment Tool</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Investment Readiness
              <span className="block text-gradient-accent">Assessment Tool</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Evaluate your startup's Series A funding readiness with our comprehensive 50-point analysis. Get personalized recommendations from experts who helped 200+ startups raise capital.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {successMetrics.map((item, index) => (
              <div key={index} className="card-brand text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{item.metric}</div>
                <div className="text-xl font-semibold text-accent-300 mb-2">{item.label}</div>
                <div className="text-white/80 text-sm">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Features */}
      <section className="bg-gradient-primary section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              Why Use Our Investment Readiness Assessment?
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Get the same evaluation framework used by top VCs to assess Series A opportunities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="card-elevated group hover:shadow-2xl transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-start space-x-6 mb-6">
                    <div className="text-4xl">{feature.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-primary-900 mb-3">{feature.title}</h3>
                      <p className="text-secondary-700 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-3">
                    {feature.details.map((detail, i) => (
                      <div key={i} className="flex items-center text-sm text-secondary-600">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Categories */}
      <section className="bg-white section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              What We Evaluate in Your Assessment
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Our assessment covers the four key areas that Series A investors focus on during their evaluation process
            </p>
          </div>

          <div className="space-y-8">
            {assessmentCategories.map((category, index) => (
              <div key={index} className="card bg-gradient-to-r from-primary-50 to-white">
                <div className="p-8">
                  <div className="grid lg:grid-cols-3 gap-6 items-center">
                    <div>
                      <div className="flex items-center mb-4">
                        <span className="inline-flex items-center justify-center w-10 h-10 bg-primary-600 text-white rounded-full font-bold text-sm mr-4">
                          {index + 1}
                        </span>
                        <div>
                          <h3 className="text-2xl font-bold text-primary-900">{category.category}</h3>
                          <span className="text-primary-600 font-semibold">{category.weight} weighting</span>
                        </div>
                      </div>
                      <p className="text-secondary-700">{category.description}</p>
                    </div>
                    <div className="lg:col-span-2">
                      <h4 className="font-semibold text-secondary-900 mb-3">Key Evaluation Points:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {category.elements.map((element, i) => (
                          <div key={i} className="flex items-center text-sm text-secondary-700">
                            <span className="w-2 h-2 bg-primary-400 rounded-full mr-3"></span>
                            {element}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Assessment Tool */}
      <section className="bg-gradient-primary section-padding-lg" id="assessment">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Start Your Free Assessment
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Complete the assessment below to get your personalized investment readiness score and recommendations
            </p>
          </div>
          
          <InvestmentReadinessAssessment />
        </div>
      </section>

      {/* Trust Signals & Social Proof */}
      <section className="bg-white section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Trusted by Leading Startups
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Join 1,000+ founders who have used our assessment to improve their fundraising readiness
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                quote: "The assessment identified key gaps in our financial model that we addressed before Series A. We closed $12M with the lead investor we met through their network.",
                author: "Sarah Chen",
                company: "TechFlow Analytics",
                funding: "$12M Series A"
              },
              {
                quote: "Incredibly accurate assessment. The recommendations helped us strengthen our pitch and metrics. We went from 'not ready' to funded in 4 months.",
                author: "Marcus Rodriguez",
                company: "GreenTech Solutions",
                funding: "$8M Series A"
              },
              {
                quote: "The detailed feedback on our business metrics was spot-on. We improved our readiness score from 65% to 92% and successfully raised our Series A.",
                author: "Jennifer Wang",
                company: "DataVault Security",
                funding: "$15M Series A"
              }
            ].map((testimonial, index) => (
              <div key={index} className="card-elevated">
                <div className="p-8">
                  <div className="text-primary-500 text-4xl mb-4">"</div>
                  <p className="text-secondary-700 mb-6 italic">{testimonial.quote}</p>
                  <div className="border-t pt-6">
                    <div className="font-semibold text-primary-900">{testimonial.author}</div>
                    <div className="text-secondary-600">{testimonial.company}</div>
                    <div className="text-green-600 font-medium text-sm mt-1">{testimonial.funding}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-900 text-white section-padding">
        <div className="container max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Evaluate Your Startup's Investment Readiness?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Take the assessment now and get your personalized readiness score with expert recommendations
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Start Assessment</h3>
                <p className="text-white/80 mb-4">Complete evaluation in 5 minutes and get instant results</p>
                <a href="#assessment" className="btn-accent">
                  Take Free Assessment
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Expert Consultation</h3>
                <p className="text-white/80 mb-4">Discuss your results with our Series A funding experts</p>
                <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary-900">
                  Schedule Call
                </Link>
              </div>
            </div>

            <QuickNavigation className="justify-center" />
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="bg-gradient-primary section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Additional Fundraising Resources
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Explore more tools and services to accelerate your Series A preparation
            </p>
          </div>
          <InternalLinkingSystem 
            currentPage="/tools/investment-readiness-assessment"
            context="tool"
            maxLinks={6}
            layout="grid"
            showDescriptions={true}
          />
        </div>
      </section>

      {/* Schema Markup */}
      <SchemaMarkup 
        type="service"
        data={{
          name: "Investment Readiness Assessment Tool",
          description: "Free comprehensive evaluation tool for startups to assess their Series A funding readiness with personalized recommendations.",
          provider: {
            "@type": "FinancialService",
            "name": "Vommuli Ventures",
            "url": "https://vommuli.com"
          },
          serviceType: "Investment Assessment Tool",
          category: "Startup Evaluation Services",
          url: "https://vommuli.com/tools/investment-readiness-assessment",
          isAccessibleForFree: true,
          audience: {
            "@type": "BusinessAudience",
            "audienceType": "Startups seeking Series A funding"
          }
        }}
      />

      {/* FAQ Schema */}
      <SchemaMarkup 
        type="faq"
        data={{
          faqs: [
            {
              question: "How accurate is the investment readiness assessment?",
              answer: "Our assessment has a 95% accuracy rate based on correlation with actual funding outcomes. The evaluation criteria are based on frameworks used by top VCs who assess 1000+ startups annually."
            },
            {
              question: "How long does the investment readiness assessment take?",
              answer: "The assessment takes approximately 5 minutes to complete. You'll receive your readiness score and personalized recommendations immediately after completion."
            },
            {
              question: "What does the investment readiness assessment evaluate?",
              answer: "The assessment evaluates 50+ data points across four key areas: Business Metrics (40%), Market Traction (25%), Team & Operations (20%), and Financial Health (15%)."
            },
            {
              question: "Is the investment readiness assessment really free?",
              answer: "Yes, our investment readiness assessment is completely free with no hidden costs. You'll get your full readiness score and recommendations at no charge."
            }
          ]
        }}
      />
    </main>
  );
}