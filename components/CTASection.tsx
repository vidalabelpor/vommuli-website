import { 
  ArrowRight, 
  Phone, 
  Mail, 
  Calendar,
  CheckCircle,
  TrendingUp,
  Users,
  Target
} from 'lucide-react';

const benefits = [
  {
    icon: CheckCircle,
    title: 'Free Initial Consultation',
    description: 'No obligation assessment of your funding needs'
  },
  {
    icon: TrendingUp,
    title: 'Proven Track Record',
    description: '$2B+ in capital raised across 500+ companies'
  },
  {
    icon: Users,
    title: 'Extensive Network',
    description: 'Access to 500+ accredited investors and VC firms'
  },
  {
    icon: Target,
    title: 'Success-Based Fees',
    description: 'We only get paid when you secure funding'
  }
];

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    description: '+1 (555) 123-4567',
    action: 'Call Now',
    href: 'tel:+15551234567'
  },
  {
    icon: Mail,
    title: 'Email Us',
    description: 'info@vommuli.com',
    action: 'Send Email',
    href: 'mailto:info@vommuli.com'
  },
  {
    icon: Calendar,
    title: 'Schedule Call',
    description: 'Book a free consultation',
    action: 'Book Now',
    href: '#'
  }
];

export default function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float animation-delay-200"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div
            // initial={{ opacity: 0, x: -30 }}
            // whileInView={{ opacity: 1, x: 0 }}
            // transition={{ duration: 0.8 }}
            // viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Badge */}
            <div
              // initial={{ opacity: 0, scale: 0.9 }}
              // whileInView={{ opacity: 1, scale: 1 }}
              // transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Limited Availability - Book Your Spot Today
            </div>

            {/* Main Headline */}
            <h2
              // initial={{ opacity: 0, y: 20 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl lg:text-5xl font-bold text-white leading-tight"
            >
              Ready to Secure the{' '}
              <span className="text-accent-200">Funding</span>{' '}
              Your Business Needs?
            </h2>

            {/* Subheadline */}
            <p
              // initial={{ opacity: 0, y: 20 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-primary-100 leading-relaxed"
            >
              Join hundreds of successful companies who have trusted Vommuli to connect them with the right investors. Your next funding round starts with a simple conversation.
            </p>

            {/* Benefits */}
            <div
              // initial={{ opacity: 0, y: 20 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {benefits.map((benefit, index) => (
                <div key={benefit.title} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <benefit.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">{benefit.title}</div>
                    <div className="text-primary-200 text-sm">{benefit.description}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Primary CTA */}
            <div
              // initial={{ opacity: 0, y: 20 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-4"
            >
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-2xl group">
                Start Your Funding Journey Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform inline" />
              </button>
            </div>
          </div>

          {/* Right Column - Contact Form & Methods */}
          <div
            // initial={{ opacity: 0, x: 30 }}
            // whileInView={{ opacity: 1, x: 0 }}
            // transition={{ duration: 0.8, delay: 0.4 }}
            // viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <div
                  key={method.title}
                  // initial={{ opacity: 0, y: 20 }}
                  // whileInView={{ opacity: 1, y: 0 }}
                  // transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  // viewport={{ once: true }}
                >
                  <a
                    href={method.href}
                    className="block bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-200 border border-white/20"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <method.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-semibold text-lg">{method.title}</div>
                        <div className="text-primary-200">{method.description}</div>
                      </div>
                      <div className="text-accent-200 font-medium">{method.action}</div>
                    </div>
                  </a>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div
              // initial={{ opacity: 0, y: 20 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.8, delay: 0.8 }}
              // viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="text-center">
                <div className="text-white font-semibold text-lg mb-3">
                  Trusted by Industry Leaders
                </div>
                <div className="flex justify-center items-center space-x-6 opacity-80">
                  <div className="h-8 w-20 bg-white/20 rounded"></div>
                  <div className="h-8 w-24 bg-white/20 rounded"></div>
                  <div className="h-8 w-16 bg-white/20 rounded"></div>
                </div>
                <div className="text-primary-200 text-sm mt-3">
                  Join 500+ companies who have successfully raised capital
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          // initial={{ opacity: 0, y: 30 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.8, delay: 0.8 }}
          // viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Don't Wait - Start Today
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Every day you wait is another day your competitors get ahead. The funding you need is available - you just need the right introduction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105">
                Get Started Now
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-3 px-6 rounded-lg transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
