'use client';

import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface AnalyticsFAQProps {
  title?: string;
  subtitle?: string;
  faqs?: FAQItem[];
}

export default function AnalyticsFAQ({
  title = "Frequently asked questions",
  subtitle = "Everything you need to know about the product and billing.",
  faqs = [
    {
      question: "Is there a free trial available?",
      answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    {
      question: "Can I change my plan later?",
      answer: "Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We understand that things change. You can cancel your plan at any time and we'll refund you the difference already paid."
    },
    {
      question: "Can other info be added to an invoice?",
      answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    {
      question: "How does billing work?",
      answer: "Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces."
    },
    {
      question: "How do I change my account email?",
      answer: "You can change the email address associated with your account in your account settings. You'll need to verify the new email address before the change takes effect."
    }
  ]
}: AnalyticsFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {subtitle}
            </p>
          </div>
          
          {/* FAQ Items */}
          <div className="mt-16 space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      <svg
                        className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-base text-gray-600 leading-7">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="mt-16 rounded-2xl bg-gray-50 p-8 text-center lg:p-16">
            <div className="mx-auto max-w-xl">
              <div className="flex justify-center mb-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 border-2 border-white"
                    />
                  ))}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Still have questions?
              </h3>
              <p className="text-base text-gray-600 mb-6">
                Can't find the answer you're looking for? Please chat to our friendly team.
              </p>
              <button className="rounded-lg bg-purple-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 transition-colors">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}