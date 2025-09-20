import React from 'react';
import type { Step } from '../types';
import { Search, MessageCircle, CreditCard, FileText } from 'lucide-react';

interface HowItWorksProps {
  steps: Step[];
}

const HowItWorks: React.FC<HowItWorksProps> = ({ steps }) => {
  const getIcon = (iconName: string) => {
    const iconMap = {
      Search: Search,
      MessageCircle: MessageCircle,
      CreditCard: CreditCard,
      FileText: FileText,
    };
    
    const IconComponent = iconMap[iconName as keyof typeof iconMap] || Search;
    return <IconComponent className="w-8 h-8" />;
  };

  return (
    <section id="how-it-works" className="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-900 mb-6">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto">
            Planning your perfect trip is simple with our streamlined process. 
            Follow these easy steps to create unforgettable memories.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="text-center group">
              {/* Step Number */}
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <div className="text-white font-bold text-xl">
                    {index + 1}
                  </div>
                </div>
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-primary-100 transform translate-x-4"></div>
                )}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <div className="text-primary-500 group-hover:text-primary-600 transition-colors duration-300">
                  {getIcon(step.icon)}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-semibold text-secondary-900 mb-4 group-hover:text-primary-500 transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-heading font-semibold text-secondary-900 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-lg text-secondary-600 mb-8">
              Our travel experts are standing by to help you plan the perfect trip. 
              Get in touch today and let us turn your travel dreams into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-primary text-lg px-8 py-4"
              >
                Start Planning Now
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector('#packages');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-secondary text-lg px-8 py-4"
              >
                Browse Packages
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
