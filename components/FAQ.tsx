import { HelpCircle } from 'lucide-react';
import SchemaMarkup from './SchemaMarkup';
import FAQInteractive from './FAQInteractive';

const faqs = [
  {
    question: 'What is a financial capital introduction service?',
    answer: 'A financial capital introduction service connects companies seeking funding with appropriate investors, including venture capital firms, private equity groups, and angel investors. We act as a bridge, using our extensive network and expertise to match companies with investors who align with their industry, stage, and investment criteria. This service is particularly valuable for startups and growth-stage companies that may not have direct access to the right investor networks.',
    category: 'Service Understanding',
    keywords: ['financial capital introduction', 'capital introduction service', 'investor matching']
  },
  {
    question: 'How much does it cost to use your capital introduction services?',
    answer: 'Our fee structure is typically success-based, meaning we only get paid when you successfully secure funding. We typically charge a percentage of the capital raised, which varies based on the funding round size and complexity. For seed rounds, this is usually 3-5% of funds raised, while Series A and later rounds are typically 2-4%. We also offer retainer options for ongoing advisory services. We believe in aligning our interests with yours - we succeed when you succeed.',
    category: 'Pricing & Fees',
    keywords: ['capital introduction fees', 'fundraising costs', 'investment advisory pricing']
  },
  {
    question: 'What types of funding rounds do you help with?',
    answer: 'We support companies across all funding stages, from pre-seed to late-stage rounds. This includes seed funding ($50K-$2M), Series A ($2M-$15M), Series B ($15M-$50M), Series C ($50M-$100M+), and private equity rounds ($25M+). We also help with bridge rounds, debt financing, and strategic investments. Each stage requires different investor types and approaches, and our team has expertise in all of them.',
    category: 'Funding Stages',
    keywords: ['seed funding', 'Series A funding', 'Series B funding', 'Series C funding', 'private equity']
  },
  {
    question: 'How long does the capital introduction process typically take?',
    answer: 'The timeline varies by funding stage and complexity. Seed rounds typically take 2-4 weeks from initial contact to first investor meetings, while Series A rounds take 4-8 weeks. Series B and C rounds can take 6-12 weeks due to increased due diligence requirements. Private equity deals often take 8-16 weeks. Our process is designed to be efficient while ensuring quality matches. We begin investor outreach within 1-2 weeks of engagement and typically see first meetings within 2-4 weeks.',
    category: 'Process & Timeline',
    keywords: ['fundraising timeline', 'capital raising process', 'investor introduction time']
  },
  {
    question: 'What makes Vommuli different from other capital introduction firms?',
    answer: 'Vommuli stands out through our combination of deep industry expertise, extensive investor network (500+ investors), and proven track record ($2B+ in capital raised). We don\'t just make introductions - we provide strategic guidance throughout the entire fundraising process, from pitch deck optimization to deal structuring. Our team includes former investors and entrepreneurs who understand both sides of the table. We also offer ongoing post-investment support and have a 95% success rate in helping companies secure funding.',
    category: 'Company Differentiation',
    keywords: ['capital introduction firms', 'investor matchmaking services', 'fundraising advisory']
  },
  {
    question: 'Do you work with companies in specific industries?',
    answer: 'We work across all industries but have particular expertise in technology (SaaS, AI/ML, fintech), healthcare (digital health, biotech), clean energy, logistics, and emerging sectors. Our investor network spans all industries, and we\'ve successfully facilitated deals in over 25 different sectors. We believe in the potential of innovative companies regardless of industry, and our diverse network allows us to find the right investors for any sector.',
    category: 'Industry Coverage',
    keywords: ['industry expertise', 'sector coverage', 'technology funding', 'healthcare funding']
  },
  {
    question: 'What size companies do you typically work with?',
    answer: 'We work with companies at various stages, from pre-revenue startups to established businesses with $100M+ in revenue. For seed funding, we typically work with companies that have a proven concept and some initial traction. Series A companies usually have $100K-$1M in annual recurring revenue. Series B and C companies typically have $1M-$10M+ in revenue with proven product-market fit. We\'ve helped companies raise from $50K to $100M+ in funding.',
    category: 'Company Requirements',
    keywords: ['startup funding', 'growth company funding', 'revenue requirements', 'company size']
  },
  {
    question: 'How do you ensure the right investor-company matches?',
    answer: 'Our matching process involves multiple layers of analysis. First, we assess your business model, growth stage, funding needs, and strategic goals. Then, we analyze our investor database for firms that match your criteria, including investment thesis, portfolio companies, check sizes, and industry focus. We also consider cultural fit and strategic alignment. Our proprietary matching algorithm and human expertise ensure that we only introduce you to investors who are genuinely interested and qualified for your opportunity.',
    category: 'Matching Process',
    keywords: ['investor matching', 'strategic fit', 'investment thesis', 'portfolio alignment']
  },
  {
    question: 'What support do you provide during the fundraising process?',
    answer: 'We provide comprehensive support throughout the entire fundraising journey. This includes pitch deck optimization, financial modeling assistance, investor presentation coaching, due diligence preparation, term sheet review and negotiation support, and deal structuring advice. We also coordinate investor meetings, manage follow-ups, and provide strategic guidance on deal terms. Our team acts as an extension of your team, ensuring you\'re well-prepared for every investor interaction.',
    category: 'Support Services',
    keywords: ['fundraising support', 'pitch deck optimization', 'due diligence preparation', 'deal structuring']
  },
  {
    question: 'Do you provide ongoing support after funding is secured?',
    answer: 'Yes, our relationship doesn\'t end when the funding closes. We provide ongoing support including investor relationship management, strategic guidance for future funding rounds, introductions to additional strategic partners, and ongoing advisory services. Many of our clients work with us for multiple funding rounds as they scale. We believe in building long-term partnerships and helping companies navigate the challenges of growth and scaling.',
    category: 'Post-Funding Support',
    keywords: ['ongoing support', 'investor relations', 'strategic guidance', 'growth advisory']
  },
  {
    question: 'What is your success rate in helping companies secure funding?',
    answer: 'Our success rate is 95%, meaning 95% of companies that engage with us successfully secure funding. This high success rate is achieved through our rigorous matching process, comprehensive preparation support, and ongoing guidance throughout the fundraising process. We\'re selective about the companies we work with, ensuring they meet our criteria for investor readiness. Our track record includes over $2.3 billion in capital raised across 500+ companies.',
    category: 'Success Metrics',
    keywords: ['success rate', 'funding success', 'capital raised', 'track record']
  },
  {
    question: 'How do I get started with Vommuli?',
    answer: 'Getting started is simple. Begin by scheduling a free consultation call where we\'ll discuss your business, funding needs, and goals. We\'ll assess your investor readiness and provide initial feedback. If we\'re a good fit, we\'ll outline our engagement process and begin the investor matching phase. The entire process is designed to be transparent and efficient. You can schedule your consultation through our website or contact us directly. We typically respond to all inquiries within 24 hours.',
    category: 'Getting Started',
    keywords: ['consultation', 'getting started', 'initial assessment', 'engagement process']
  }
];

export { faqs };

export default function FAQ() {
  return (
    <section className="section-padding bg-gradient-neutral">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-10 h-10 text-primary-600" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Frequently Asked{' '}
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Get answers to the most common questions about our financial capital introduction services and how we can help your business secure the funding it needs.
          </p>
        </div>

        {/* Interactive FAQ Component */}
        <FAQInteractive />

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 lg:p-12 border border-neutral-200">
            <h3 className="text-3xl font-bold text-secondary-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
              Our team of capital introduction experts is here to help. Schedule a free consultation to discuss your specific needs and get personalized answers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Schedule Free Consultation
              </button>
              <button className="btn-secondary">
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Schema Markup for Featured Snippets */}
      <SchemaMarkup 
        type="faq"
        data={{
          faqs: faqs.map(faq => ({
            question: faq.question,
            answer: faq.answer
          }))
        }}
      />
    </section>
  );
}
