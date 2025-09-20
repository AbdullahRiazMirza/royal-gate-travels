import React from 'react';
import type { Service } from '../types';
import { Heart, Plane, Shield, FileText, Building, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const getIcon = (iconName: string) => {
    const iconMap = {
      Heart: Heart,
      Mosque: Building, // Using Building as Mosque alternative
      Plane: Plane,
      Shield: Shield,
      FileText: FileText,
      Building: Building,
    };
    
    const IconComponent = iconMap[iconName as keyof typeof iconMap] || Building;
    return <IconComponent className="w-8 h-8" />;
  };

  const handleClick = () => {
    const element = document.querySelector(service.ctaLink);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="card p-8 text-center group cursor-pointer hover:scale-105 transition-all duration-300"
      onClick={handleClick}
    >
      <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-primary-500 group-hover:to-primary-600 transition-all duration-300">
        <div className="text-primary-600 group-hover:text-white transition-colors duration-300">
          {getIcon(service.iconName)}
        </div>
      </div>
      
      <h3 className="text-xl font-heading font-semibold text-secondary-900 mb-4 group-hover:text-primary-500 transition-colors duration-300">
        {service.title}
      </h3>
      
      <p className="text-secondary-600 mb-6 leading-relaxed">
        {service.shortDescription}
      </p>
      
      <button className="inline-flex items-center space-x-2 text-primary-500 font-medium group-hover:text-primary-600 transition-colors duration-300">
        <span>Learn More</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </button>
    </div>
  );
};

export default ServiceCard;
