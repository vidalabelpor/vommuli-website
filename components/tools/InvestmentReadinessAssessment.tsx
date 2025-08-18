'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle, TrendingUp, AlertCircle, Users } from 'lucide-react';

interface Question {
  id: string;
  category: string;
  question: string;
  type: 'multiple' | 'range' | 'input';
  options?: string[];
  weight: number;
  min?: number;
  max?: number;
  unit?: string;
}

const questions: Question[] = [
  {
    id: 'revenue',
    category: 'Business Metrics',
    question: 'What is your current Annual Recurring Revenue (ARR)?',
    type: 'multiple',
    options: ['Pre-revenue', '$0-$500K', '$500K-$2M', '$2M-$10M', '$10M+'],
    weight: 25
  },
  {
    id: 'growth_rate',
    category: 'Business Metrics',
    question: 'What is your monthly revenue growth rate?',
    type: 'range',
    min: 0,
    max: 50,
    unit: '%',
    weight: 20
  },
  {
    id: 'customers',
    category: 'Market Traction',
    question: 'How many paying customers do you have?',
    type: 'multiple',
    options: ['0-10', '10-100', '100-1,000', '1,000-10,000', '10,000+'],
    weight: 15
  },
  {
    id: 'team_size',
    category: 'Team & Operations',
    question: 'What is your current team size?',
    type: 'multiple',
    options: ['1-5', '6-15', '16-30', '31-50', '50+'],
    weight: 10
  },
  {
    id: 'previous_funding',
    category: 'Funding History',
    question: 'How much have you raised previously?',
    type: 'multiple',
    options: ['Bootstrapped', 'Under $500K', '$500K-$2M', '$2M-$5M', '$5M+'],
    weight: 15
  },
  {
    id: 'runway',
    category: 'Financial Health',
    question: 'How many months of runway do you have?',
    type: 'range',
    min: 0,
    max: 36,
    unit: ' months',
    weight: 15
  }
];

interface ScoreResult {
  score: number;
  level: 'Not Ready' | 'Needs Work' | 'Good' | 'Excellent';
  color: string;
  description: string;
  recommendations: string[];
  nextSteps: string[];
}

export default function InvestmentReadinessAssessment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [showResults, setShowResults] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    company: ''
  });

  const handleAnswer = (questionId: string, value: any) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const calculateScore = (): ScoreResult => {
    let totalScore = 0;
    let maxScore = 0;

    questions.forEach(question => {
      maxScore += question.weight;
      const answer = answers[question.id];
      
      if (answer !== undefined) {
        let points = 0;
        
        if (question.type === 'multiple') {
          const optionIndex = question.options?.indexOf(answer) || 0;
          points = (optionIndex / (question.options!.length - 1)) * question.weight;
        } else if (question.type === 'range') {
          points = (answer / question.max!) * question.weight;
        }
        
        totalScore += points;
      }
    });

    const percentage = Math.round((totalScore / maxScore) * 100);
    
    if (percentage >= 90) {
      return {
        score: percentage,
        level: 'Excellent',
        color: 'text-green-600',
        description: 'Your startup is Series A ready! You have strong metrics and are well-positioned for fundraising.',
        recommendations: [
          'Begin investor targeting immediately - you\'re ready to pitch',
          'Focus on premium VCs who write larger Series A checks',
          'Prepare for accelerated timeline with multiple term sheets'
        ],
        nextSteps: [
          'Schedule expert consultation to discuss investor strategy',
          'Access our curated Series A investor database',
          'Get pitch deck final review and optimization'
        ]
      };
    } else if (percentage >= 75) {
      return {
        score: percentage,
        level: 'Good',
        color: 'text-blue-600',
        description: 'Strong foundation with some areas for improvement. You could raise Series A with 2-3 months of preparation.',
        recommendations: [
          'Strengthen financial model and unit economics',
          'Build stronger customer reference pipeline',
          'Refine market positioning and competitive analysis'
        ],
        nextSteps: [
          'Get detailed preparation roadmap and timeline',
          'Schedule strategy session to address gaps',
          'Access Series A preparation checklist'
        ]
      };
    } else if (percentage >= 60) {
      return {
        score: percentage,
        level: 'Needs Work',
        color: 'text-orange-600',
        description: 'Significant gaps that need addressing. Plan for 4-6 months of preparation before Series A.',
        recommendations: [
          'Focus on growth metrics and customer acquisition',
          'Strengthen team with key hires',
          'Improve financial planning and reporting systems'
        ],
        nextSteps: [
          'Get comprehensive preparation plan',
          'Access growth acceleration resources',
          'Schedule preparation consultation'
        ]
      };
    } else {
      return {
        score: percentage,
        level: 'Not Ready',
        color: 'text-red-600',
        description: 'Focus on building business fundamentals before considering Series A fundraising.',
        recommendations: [
          'Achieve product-market fit with strong unit economics',
          'Build sustainable revenue growth pattern',
          'Consider seed funding before Series A'
        ],
        nextSteps: [
          'Access our pre-Series A growth guide',
          'Get seed funding strategy consultation',
          'Focus on customer validation and retention'
        ]
      };
    }
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === questions.length - 1) {
      setCurrentStep(currentStep + 1); // User info step
    } else {
      setShowResults(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepComplete = () => {
    if (currentStep < questions.length) {
      return answers[questions[currentStep].id] !== undefined;
    } else {
      return userInfo.name && userInfo.email && userInfo.company;
    }
  };

  const currentQuestion = currentStep < questions.length ? questions[currentStep] : null;
  const progress = ((currentStep + 1) / (questions.length + 1)) * 100;

  if (showResults) {
    const result = calculateScore();
    
    return (
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-2xl p-8"
        >
          {/* Results Header */}
          <div className="text-center mb-8">
            <div className={`text-6xl font-bold mb-4 ${result.color}`}>
              {result.score}%
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Investment Readiness: {result.level}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {result.description}
            </p>
          </div>

          {/* Score Breakdown */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-blue-500" />
                Recommendations
              </h3>
              <ul className="space-y-3">
                {result.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <ArrowRight className="w-5 h-5 mr-2 text-primary-500" />
                Next Steps
              </h3>
              <ul className="space-y-3">
                {result.nextSteps.map((step, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-xs font-bold text-primary-600">{index + 1}</span>
                    </div>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="border-t pt-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Ready to accelerate your Series A preparation?
              </h3>
              <p className="text-gray-600">
                Get personalized guidance from our Series A experts
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact?source=assessment" 
                className="btn-primary inline-flex items-center justify-center px-8 py-4"
              >
                Schedule Expert Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="/series-a-funding-guide" 
                className="btn-outline inline-flex items-center justify-center px-8 py-4"
              >
                Download Series A Guide
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Investment Readiness Assessment
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Discover your startup's funding readiness with our expert 5-minute assessment
        </p>
        
        {/* Progress Bar */}
        <div className="max-w-md mx-auto">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-primary-500 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </motion.div>

      {/* Question Card */}
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        className="bg-white rounded-2xl shadow-2xl p-8"
      >
        {currentQuestion ? (
          <>
            {/* Question */}
            <div className="mb-8">
              <div className="text-sm text-primary-600 font-medium mb-2">
                {currentQuestion.category}
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                {currentQuestion.question}
              </h2>
              <div className="text-sm text-gray-500">
                Question {currentStep + 1} of {questions.length}
              </div>
            </div>

            {/* Answer Options */}
            <div className="mb-8">
              {currentQuestion.type === 'multiple' && (
                <div className="space-y-3">
                  {currentQuestion.options?.map((option, index) => (
                    <motion.button
                      key={option}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAnswer(currentQuestion.id, option)}
                      className={`w-full p-4 text-left border-2 rounded-xl transition-all ${
                        answers[currentQuestion.id] === option
                          ? 'border-primary-500 bg-primary-50 text-primary-900'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{option}</span>
                        {answers[currentQuestion.id] === option && (
                          <CheckCircle className="w-5 h-5 text-primary-500" />
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
              )}

              {currentQuestion.type === 'range' && (
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <span className="text-3xl font-bold text-primary-600">
                      {answers[currentQuestion.id] || 0}{currentQuestion.unit}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={currentQuestion.min}
                    max={currentQuestion.max}
                    value={answers[currentQuestion.id] || 0}
                    onChange={(e) => handleAnswer(currentQuestion.id, parseInt(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{currentQuestion.min}{currentQuestion.unit}</span>
                    <span>{currentQuestion.max}{currentQuestion.unit}</span>
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          // User Information Form
          <>
            <div className="mb-8">
              <div className="text-sm text-primary-600 font-medium mb-2">
                Final Step
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Get Your Personalized Results
              </h2>
              <p className="text-gray-600">
                Enter your details to receive your investment readiness score and customized recommendations.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={userInfo.name}
                  onChange={(e) => setUserInfo(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={userInfo.email}
                  onChange={(e) => setUserInfo(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  required
                  value={userInfo.company}
                  onChange={(e) => setUserInfo(prev => ({ ...prev, company: e.target.value }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter your company name"
                />
              </div>
            </div>
          </>
        )}

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
              currentStep === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Previous
          </button>

          <button
            onClick={nextStep}
            disabled={!isStepComplete()}
            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
              isStepComplete()
                ? 'bg-primary-500 text-white hover:bg-primary-600'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            {currentStep === questions.length ? 'Get Results' : 'Next'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </motion.div>

      {/* Trust Signals */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-center"
      >
        <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-2" />
            <span>Used by 1,000+ startups</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="w-4 h-4 mr-2" />
            <span>95% accuracy rate</span>
          </div>
          <div className="flex items-center">
            <AlertCircle className="w-4 h-4 mr-2" />
            <span>Free & confidential</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}