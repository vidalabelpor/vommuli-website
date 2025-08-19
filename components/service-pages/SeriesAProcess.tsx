import { CheckCircle, ArrowRight, FileText, Users, TrendingUp, Hand } from 'lucide-react';

const processSteps = [
  {
    id: 1,
    title: 'Series A Readiness Assessment & Preparation',
    duration: '1-2 weeks',
    icon: FileText,
    description: 'Comprehensive investment readiness evaluation and preparation of institutional-grade fundraising materials.',
    tasks: [
      'Deep-dive investment readiness assessment with 47-point evaluation framework',
      'Pitch deck transformation using proven Series A templates from $2B+ in successful raises',
      'Financial model optimization with institutional investor-grade 3-statement projections',
      'Due diligence data room setup with 150+ essential startup documents',
      'Strategic market positioning against successful portfolio companies'
    ],
    deliverables: [
      'Investment-grade pitch deck (16-18 slides) with proven conversion framework',
      'Institutional financial model: P&L, Balance Sheet, Cash Flow (3-year detailed, 5-year summary)',
      'Executive summary optimized for partner-level distribution',
      'Complete due diligence package: legal docs, contracts, IP, compliance'
    ]
  },
  {
    id: 2,
    title: 'Strategic VC Targeting & Intelligence',
    duration: '1 week',
    icon: Users,
    description: 'Precision targeting of Series A investors using our proprietary database of 500+ active VCs with $2M-$50M check sizes.',
    tasks: [
      'Proprietary VC database analysis: 500+ Series A investors, updated weekly with deal flow intelligence',
      'Investment thesis DNA matching: sector focus, stage preference, geographic mandate alignment',
      'Portfolio analysis: identifying VCs actively writing $2M-$50M Series A checks in your sector',
      'Market timing intelligence: fund vintage, deployment pace, competitive portfolio gaps',
      'Partner-level research: individual investment history, board experience, value-add capabilities'
    ],
    deliverables: [
      'Target list: 25-35 precision-matched Series A investors with detailed rationale',
      'Investor intelligence profiles: investment history, portfolio gaps, ideal company profile',
      'Market timing analysis: optimal outreach windows based on fund cycles and deployment pace',
      'Competitive landscape mapping: portfolio overlap analysis and differentiation strategy'
    ]
  },
  {
    id: 3,
    title: 'Network-Powered VC Introductions',
    duration: '2-4 weeks',
    icon: TrendingUp,
    description: 'Direct access to Series A decision-makers through our network of 200+ managing partners and principals.',
    tasks: [
      'Direct partner introductions: leveraging relationships with 200+ Series A decision-makers',
      'Strategic sequencing: coordinating outreach timing to create competitive tension and urgency',
      'Personalized messaging: crafting partner-specific value propositions based on portfolio thesis',
      'Executive presentation coaching: preparing founders for partner-level meetings with proven frameworks',
      'Real-time investor intelligence: feedback analysis and strategy optimization during the process'
    ],
    deliverables: [
      '10-18 confirmed Series A partner meetings with decision-makers (not junior staff)',
      'Warm introduction sequences: personally crafted by partners who know the target VCs',
      'Meeting optimization: agenda setting, materials preparation, follow-up coordination',
      'Investor psychology mapping: real-time feedback analysis and next-step strategy'
    ]
  },
  {
    id: 4,
    title: 'Term Sheet Optimization & Closing',
    duration: '2-8 weeks',
    icon: Hand,
    description: 'Expert guidance through term sheet negotiations and closing process, leveraging our experience with $2.8B+ in completed rounds.',
    tasks: [
      'Term sheet strategy: creating competitive dynamics between multiple interested investors',
      'Valuation optimization: benchmarking against comparable transactions in our database',
      'Due diligence project management: coordinating legal, financial, technical, and commercial workstreams',
      'Negotiation strategy: term-by-term guidance based on market standards and portfolio company outcomes',
      'Closing coordination: managing legal timeline with top-tier law firms to ensure swift execution'
    ],
    deliverables: [
      'Term sheet analysis: side-by-side comparison with market benchmark data',
      'Negotiation playbook: term-specific talking points and fallback positions',
      'Due diligence coordination: project management through legal, financial, and technical review',
      'Closing support: documentation review and timeline management to final signature'
    ]
  }
];

export default function SeriesAProcess() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            The Vommuli Series A{' '}
            <span className="text-gradient bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Funding Process
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our battle-tested 4-phase methodology has generated <strong className="text-gray-900">$2.8B+ in Series A funding</strong> for 300+ startups. 
            From investment readiness to term sheet in 6 weeks average. <strong className="text-gray-900">87% success rate</strong> from first VC meeting to closed round.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-16">
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className="relative"
            >
              {/* Connector Line */}
              {index < processSteps.length - 1 && (
                <div className="absolute left-6 top-24 w-0.5 h-32 bg-gradient-to-b from-primary-300 to-transparent hidden lg:block"></div>
              )}
              
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                {/* Step Icon and Number */}
                <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-2">
                    <step.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="text-sm font-medium text-primary-600">Step {step.id}</div>
                  <div className="text-xs text-gray-500">{step.duration}</div>
                </div>

                {/* Step Content */}
                <div className="lg:col-span-10 bg-white rounded-xl shadow-lg border border-gray-100 p-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left Column - Overview */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                      <p className="text-gray-600 mb-6">{step.description}</p>
                      
                      <h4 className="font-semibold text-gray-900 mb-3">Key Activities:</h4>
                      <ul className="space-y-2">
                        {step.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right Column - Deliverables */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Deliverables:</h4>
                      <div className="space-y-3">
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <div key={deliverableIndex} className="p-3 bg-primary-50 rounded-lg border border-primary-100">
                            <div className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm font-medium text-primary-800">{deliverable}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Timeline Indicator */}
                      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-700">Timeline:</span>
                          <span className="text-sm font-bold text-primary-600">{step.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="mt-16 p-8 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Proven Series A Funding Results</h3>
            <p className="text-gray-600">Performance metrics from 300+ completed Series A fundraising engagements</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">87%</div>
              <div className="text-sm text-gray-700">Success Rate</div>
              <div className="text-xs text-gray-500">First Meeting to Closed Round</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">6.1</div>
              <div className="text-sm text-gray-700">Avg Weeks</div>
              <div className="text-xs text-gray-500">Start to Term Sheet Signed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">$9.3M</div>
              <div className="text-sm text-gray-700">Avg Round Size</div>
              <div className="text-xs text-gray-500">Series A (2024 Cohort)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">$2.8B+</div>
              <div className="text-sm text-gray-700">Total Capital Raised</div>
              <div className="text-xs text-gray-500">Client Portfolio Value</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a 
            href="/tools/investment-readiness-assessment" 
            className="btn-primary group inline-flex items-center px-8 py-4 text-lg"
          >
            Start Your Series A Journey
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-sm text-gray-500 mt-2">Free assessment takes 5 minutes</p>
        </div>
      </div>
    </section>
  );
}