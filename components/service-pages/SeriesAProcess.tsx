'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, FileText, Users, TrendingUp, Hand } from 'lucide-react';

const processSteps = [
  {
    id: 1,
    title: 'Initial Assessment & Preparation',
    duration: '1-2 weeks',
    icon: FileText,
    description: 'Comprehensive evaluation of your business and preparation of all fundraising materials.',
    tasks: [
      'Investment readiness assessment and gap analysis',
      'Pitch deck optimization and design enhancement',
      'Financial model review and scenario planning',
      'Due diligence preparation and data room setup',
      'Market positioning and competitive analysis'
    ],
    deliverables: [
      'Investor-ready pitch deck (15-20 slides)',
      'Comprehensive financial model with 3-year projections',
      'One-page executive summary',
      'Due diligence checklist and initial materials'
    ]
  },
  {
    id: 2,
    title: 'Investor Targeting & Research',
    duration: '1 week',
    icon: Users,
    description: 'Strategic identification and research of perfect-fit investors for your specific stage and sector.',
    tasks: [
      'VC database analysis and filtering by criteria',
      'Investment thesis alignment assessment',
      'Check size and stage preference validation',
      'Geographic and sector specialization matching',
      'Portfolio company analysis and pattern recognition'
    ],
    deliverables: [
      'Curated list of 20-30 target investors',
      'Detailed investor profiles with contact information',
      'Investment thesis alignment scoring',
      'Optimal outreach timing and sequence strategy'
    ]
  },
  {
    id: 3,
    title: 'Warm Introductions & Outreach',
    duration: '2-4 weeks',
    icon: TrendingUp,
    description: 'Leveraging our network to secure warm introductions and manage the outreach process.',
    tasks: [
      'Personal introductions through our VC network',
      'Strategic email outreach with personalized messaging',
      'Follow-up coordination and meeting scheduling',
      'Pitch presentation coaching and preparation',
      'Investor feedback collection and analysis'
    ],
    deliverables: [
      '8-15 confirmed investor meetings',
      'Introduction emails and follow-up sequences',
      'Meeting preparation materials and coaching',
      'Investor feedback reports and recommendations'
    ]
  },
  {
    id: 4,
    title: 'Process Management & Closing',
    duration: '2-8 weeks',
    icon: Hand,
    description: 'Managing the fundraising process through term sheets to successful closing.',
    tasks: [
      'Investor meeting coordination and logistics',
      'Due diligence process management',
      'Term sheet negotiation support and guidance',
      'Legal process coordination with attorneys',
      'Closing timeline management and milestone tracking'
    ],
    deliverables: [
      'Term sheet comparison and analysis',
      'Negotiation strategy and talking points',
      'Due diligence coordination and support',
      'Closing process management and documentation'
    ]
  }
];

export default function SeriesAProcess() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Proven Series A{' '}
            <span className="text-gradient bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic 4-step approach that has helped 200+ startups successfully raise Series A funding, 
            with an average timeline of 4-8 weeks from preparation to term sheet.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-16">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
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
            </motion.div>
          ))}
        </div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Process Success Metrics</h3>
            <p className="text-gray-600">Track record of our systematic Series A approach</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">85%</div>
              <div className="text-sm text-gray-700">Success Rate</div>
              <div className="text-xs text-gray-500">Intro to Term Sheet</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">6.2</div>
              <div className="text-sm text-gray-700">Avg Weeks</div>
              <div className="text-xs text-gray-500">Process to Term Sheet</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">4.2x</div>
              <div className="text-sm text-gray-700">Valuation Increase</div>
              <div className="text-xs text-gray-500">From Initial Assessment</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">200+</div>
              <div className="text-sm text-gray-700">Successful Raises</div>
              <div className="text-xs text-gray-500">Series A Completed</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a 
            href="/tools/investment-readiness-assessment" 
            className="btn-primary group inline-flex items-center px-8 py-4 text-lg"
          >
            Start Your Series A Journey
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-sm text-gray-500 mt-2">Free assessment takes 5 minutes</p>
        </motion.div>
      </div>
    </section>
  );
}