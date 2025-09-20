import React from 'react';
import type { Service } from '../types';
import ServiceCard from './ServiceCard';
import { Phone, Award, DollarSign, CheckCircle, Shield } from 'lucide-react';

interface ServicesGridProps {
  services: Service[];
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ services }) => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-900 mb-6">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto">
            Discover our comprehensive range of travel services designed to make your journey 
            seamless, memorable, and truly extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-heading font-semibold text-secondary-900 mb-4">
              Why Choose Royal Gate Travels?
            </h3>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              We're committed to providing exceptional service and unforgettable experiences
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { icon: Phone, title: '24/7 Support', desc: 'Always here for you' },
              { icon: Award, title: 'Certified Agents', desc: 'Licensed professionals' },
              { icon: DollarSign, title: 'Best Price', desc: 'Guaranteed lowest rates' },
              { icon: CheckCircle, title: 'Halal-Friendly', desc: 'Certified halal options' },
              { icon: Shield, title: 'Secure Payments', desc: 'Bank-level security' }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-primary-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="font-semibold text-secondary-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-secondary-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
