import { Calendar, Clock, CheckCircle, Target } from 'lucide-react';

const timelinePhases = [
  {
    phase: 'Phase 1',
    title: 'Investment Readiness & Preparation',
    duration: '1-2 weeks',
    icon: Target,
    color: 'primary',
    milestones: [
      {
        week: 'Week 1',
        tasks: [
          'Complete comprehensive investment readiness assessment',
          'Analyze current metrics and identify improvement areas',
          'Review and optimize financial model',
          'Audit existing pitch materials'
        ]
      },
      {
        week: 'Week 2',
        tasks: [
          'Redesign and enhance pitch deck',
          'Prepare executive summary and one-pager',
          'Organize due diligence documentation',
          'Finalize market positioning strategy'
        ]
      }
    ]
  },
  {
    phase: 'Phase 2', 
    title: 'VC Targeting & Research',
    duration: '1 week',
    icon: Calendar,
    color: 'accent',
    milestones: [
      {
        week: 'Week 3',
        tasks: [
          'Research and analyze 100+ potential VC firms',
          'Filter by investment thesis, stage, and check size',
          'Validate geographic and sector preferences',
          'Create prioritized target list of 20-30 VCs',
          'Map decision makers and warm introduction paths',
          'Prepare personalized outreach strategies'
        ]
      }
    ]
  },
  {
    phase: 'Phase 3',
    title: 'Warm Introductions & Meetings',
    duration: '2-4 weeks',
    icon: Clock,
    color: 'secondary',
    milestones: [
      {
        week: 'Weeks 4-5',
        tasks: [
          'Execute warm introductions through our VC network',
          'Send strategic follow-up communications',
          'Schedule initial VC meetings',
          'Conduct pitch coaching sessions',
          'Coordinate meeting logistics and materials'
        ]
      },
      {
        week: 'Weeks 6-7',
        tasks: [
          'Facilitate 8-15 VC meetings',
          'Gather investor feedback and insights',
          'Identify interested investors and next steps',
          'Coordinate follow-up meetings and due diligence'
        ]
      }
    ]
  },
  {
    phase: 'Phase 4',
    title: 'Deal Management & Closing',
    duration: '2-8 weeks',
    icon: CheckCircle,
    color: 'success',
    milestones: [
      {
        week: 'Weeks 8-10',
        tasks: [
          'Manage due diligence process',
          'Coordinate reference calls and team meetings',
          'Support term sheet negotiations',
          'Facilitate investor-startup alignment'
        ]
      },
      {
        week: 'Weeks 11-15',
        tasks: [
          'Guide legal documentation process',
          'Coordinate with attorneys and accountants',
          'Manage closing timeline and conditions',
          'Celebrate successful Series A funding!'
        ]
      }
    ]
  }
];

const colorClasses: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
  primary: {
    bg: 'bg-primary-100',
    text: 'text-primary-600',
    border: 'border-primary-500',
    gradient: 'from-primary-500 to-primary-600'
  },
  accent: {
    bg: 'bg-accent-100', 
    text: 'text-accent-600',
    border: 'border-accent-500',
    gradient: 'from-accent-500 to-accent-600'
  },
  secondary: {
    bg: 'bg-secondary-100',
    text: 'text-secondary-600', 
    border: 'border-secondary-500',
    gradient: 'from-secondary-500 to-secondary-600'
  },
  success: {
    bg: 'bg-green-100',
    text: 'text-green-600',
    border: 'border-green-500', 
    gradient: 'from-green-500 to-green-600'
  }
};

export default function SeriesATimeline() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Series A Funding{' '}
            <span className="text-gradient bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Timeline
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our systematic 4-phase approach typically takes 4-8 weeks from preparation to successful term sheet
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 via-accent-300 via-secondary-300 to-green-300 hidden lg:block"></div>
          
          {/* Timeline Items */}
          <div className="space-y-16">
            {timelinePhases.map((phase, phaseIndex) => (
              <div
                key={phase.phase}
                className="relative"
              >
                {/* Phase Header */}
                <div className="flex items-center mb-8 lg:mb-6">
                  {/* Icon Circle */}
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${colorClasses[phase.color].bg} border-4 ${colorClasses[phase.color].border} relative z-10`}>
                    <phase.icon className={`w-8 h-8 ${colorClasses[phase.color].text}`} />
                  </div>
                  
                  {/* Phase Info */}
                  <div className="ml-6 flex-1">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div>
                        <div className={`text-sm font-semibold ${colorClasses[phase.color].text} mb-1`}>
                          {phase.phase} • {phase.duration}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {phase.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Milestones */}
                <div className="lg:ml-22 space-y-8">
                  {phase.milestones.map((milestone, milestoneIndex) => (
                    <div key={milestoneIndex} className="bg-gray-50 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                        <div className={`w-3 h-3 rounded-full ${colorClasses[phase.color].bg} ${colorClasses[phase.color].border} border-2 mr-3`}></div>
                        {milestone.week}
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {milestone.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-start text-sm">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mt-16 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Timeline Success Metrics
            </h3>
            <p className="text-gray-600">
              Our systematic approach delivers consistent results within predictable timeframes
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">6.2</div>
              <div className="text-sm text-gray-700 font-medium">Average Weeks</div>
              <div className="text-xs text-gray-500">Prep to Term Sheet</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-600 mb-2">12</div>
              <div className="text-sm text-gray-700 font-medium">Average Meetings</div>
              <div className="text-xs text-gray-500">Per Successful Round</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-600 mb-2">85%</div>
              <div className="text-sm text-gray-700 font-medium">Success Rate</div>
              <div className="text-xs text-gray-500">Meeting to Term Sheet</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">200+</div>
              <div className="text-sm text-gray-700 font-medium">Successful Closes</div>
              <div className="text-xs text-gray-500">Using This Timeline</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a href="/tools/investment-readiness-assessment" className="btn-primary inline-flex items-center px-8 py-4 text-lg">
            Start Your Series A Timeline
            <Calendar className="w-5 h-5 ml-2" />
          </a>
          <p className="text-sm text-gray-500 mt-3">
            Free assessment • No commitment required
          </p>
        </div>
      </div>
    </section>
  );
}