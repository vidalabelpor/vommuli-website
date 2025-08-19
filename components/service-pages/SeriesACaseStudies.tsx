import { ArrowRight, TrendingUp, Users, DollarSign, Clock } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    company: 'TechFlow AI',
    sector: 'AI/ML Platform',
    location: 'San Francisco, CA',
    fundingAmount: '$12M',
    timeline: '7 weeks',
    leadInvestor: 'Tier-1 Silicon Valley VC',
    challenge: 'Post-pandemic pivot needed Series A for AI infrastructure expansion',
    solution: [
      'Repositioned from consumer AI to enterprise infrastructure',
      'Rebuilt pitch deck highlighting new B2B traction metrics', 
      'Connected with VCs specializing in AI infrastructure',
      'Negotiated favorable terms with 18-month runway'
    ],
    results: [
      '$12M Series A led by prominent AI-focused VC',
      '3 term sheets received within 5 weeks',
      '42% equity retention for founders',
      'Successful product-market fit validation'
    ],
    metrics: {
      meetings: 14,
      weeks: 7,
      termSheets: 3,
      valuation: '$45M'
    }
  },
  {
    id: 2,
    company: 'HealthTech Solutions',
    sector: 'Healthcare Technology',
    location: 'Austin, TX', 
    fundingAmount: '$8.5M',
    timeline: '6 weeks',
    leadInvestor: 'Healthcare-focused Growth Fund',
    challenge: 'Medical device startup needed Series A for FDA approval and scaling',
    solution: [
      'Highlighted strong clinical trial results and FDA pathway',
      'Developed compelling market size and reimbursement story',
      'Connected with healthcare-specialized VCs and strategics',
      'Structured round to fund both R&D and commercial milestones'
    ],
    results: [
      '$8.5M Series A with strategic healthcare investor',
      'FDA breakthrough device designation support',
      'Strong board composition with industry experts',
      'Clear path to Series B with commercial traction'
    ],
    metrics: {
      meetings: 11,
      weeks: 6,
      termSheets: 2,
      valuation: '$35M'
    }
  },
  {
    id: 3,
    company: 'ClimateCore Energy',
    sector: 'Climate Technology',
    location: 'Denver, CO',
    fundingAmount: '$15M',
    timeline: '8 weeks',
    leadInvestor: 'Impact & Climate VC',
    challenge: 'Clean energy startup needed Series A for commercial deployment',
    solution: [
      'Emphasized ESG impact metrics alongside financial returns',
      'Connected with impact investors and climate-focused funds',
      'Structured deal with revenue-based milestones',
      'Secured strategic partnerships with energy utilities'
    ],
    results: [
      '$15M Series A with leading climate tech VC',
      'Strategic partnerships with 3 major utilities',
      'Strong ESG reporting framework established', 
      'Carbon impact measurement and verification system'
    ],
    metrics: {
      meetings: 16,
      weeks: 8,
      termSheets: 4,
      valuation: '$65M'
    }
  }
];

export default function SeriesACaseStudies() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Series A Success{' '}
            <span className="text-gradient bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real success stories from startups who raised Series A funding through our proven advisory process
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                {/* Content */}
                <div className="lg:col-span-8 p-8 lg:p-12">
                  {/* Header */}
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                      {study.company}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                        {study.sector}
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {study.location}
                      </span>
                    </div>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <div className="text-center p-3 bg-primary-50 rounded-lg">
                      <div className="text-2xl font-bold text-primary-600">{study.fundingAmount}</div>
                      <div className="text-sm text-gray-600">Funding Raised</div>
                    </div>
                    <div className="text-center p-3 bg-accent-50 rounded-lg">
                      <div className="text-2xl font-bold text-accent-600">{study.timeline}</div>
                      <div className="text-sm text-gray-600">Timeline</div>
                    </div>
                    <div className="text-center p-3 bg-secondary-50 rounded-lg">
                      <div className="text-2xl font-bold text-secondary-600">{study.metrics.meetings}</div>
                      <div className="text-sm text-gray-600">VC Meetings</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{study.metrics.termSheets}</div>
                      <div className="text-sm text-gray-600">Term Sheets</div>
                    </div>
                  </div>

                  {/* Challenge */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      Challenge
                    </h4>
                    <p className="text-gray-700 pl-5">{study.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Our Approach
                    </h4>
                    <ul className="space-y-2 pl-5">
                      {study.solution.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-sm">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Results Achieved
                    </h4>
                    <ul className="space-y-2 pl-5">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start text-sm">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-4 bg-gradient-to-br from-primary-50 to-accent-50 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-black text-primary-600 mb-2">
                      {study.metrics.valuation}
                    </div>
                    <div className="text-sm text-gray-600 mb-6">Post-Money Valuation</div>
                    
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="text-lg font-bold text-gray-900">Lead Investor</div>
                        <div className="text-sm text-gray-600">{study.leadInvestor}</div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Process Duration</span>
                        <span className="font-semibold text-gray-900">{study.timeline}</span>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Success Rate</span>
                        <span className="font-semibold text-primary-600">
                          {Math.round((study.metrics.termSheets / study.metrics.meetings) * 100)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Case Study Success Metrics
            </h3>
            <p className="text-gray-600">
              Aggregate results from our recent Series A advisory engagements
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">$35.5M</div>
              <div className="text-sm text-gray-700 font-medium">Total Capital Raised</div>
              <div className="text-xs text-gray-500">From these 3 engagements</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-600 mb-2">7.0</div>
              <div className="text-sm text-gray-700 font-medium">Avg Weeks</div>
              <div className="text-xs text-gray-500">Preparation to term sheet</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-600 mb-2">13.7</div>
              <div className="text-sm text-gray-700 font-medium">Avg VC Meetings</div>
              <div className="text-xs text-gray-500">Per successful round</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">3.0</div>
              <div className="text-sm text-gray-700 font-medium">Avg Term Sheets</div>
              <div className="text-xs text-gray-500">Multiple options created</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className="mt-12 text-center"
        >
          <a href="/tools/investment-readiness-assessment" className="btn-primary inline-flex items-center px-8 py-4 text-lg">
            Start Your Success Story
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          <p className="text-sm text-gray-500 mt-3">
            Join 200+ startups that have successfully raised Series A funding
          </p>
        </div>
      </div>
    </section>
  );
}