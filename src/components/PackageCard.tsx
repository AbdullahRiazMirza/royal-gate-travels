import React from 'react';
import type { Package } from '../types';
import { Calendar, Users, Star, ArrowRight } from 'lucide-react';

interface PackageCardProps {
  pkg: Package;
  onViewDetails: () => void;
}

const PackageCard: React.FC<PackageCardProps> = ({ pkg, onViewDetails }) => {
  const getCategoryColor = (category: string) => {
    const colors = {
      honeymoon: 'from-pink-500 to-rose-500',
      'hajj-umra': 'from-green-500 to-emerald-500',
      'air-tickets': 'from-blue-500 to-cyan-500',
      'travel-insurance': 'from-purple-500 to-violet-500',
      'visa-services': 'from-orange-500 to-amber-500',
      'hotel-booking': 'from-indigo-500 to-blue-500',
    };
    return colors[category as keyof typeof colors] || 'from-primary-500 to-primary-600';
  };

  const getCategoryLabel = (category: string) => {
    const labels = {
      honeymoon: 'Honeymoon',
      'hajj-umra': 'Hajj & Umra',
      'air-tickets': 'Air Tickets',
      'travel-insurance': 'Travel Insurance',
      'visa-services': 'Visa Services',
      'hotel-booking': 'Hotel Booking',
    };
    return labels[category as keyof typeof labels] || category;
  };

  return (
    <div className="card overflow-hidden group hover:scale-105 transition-all duration-300">
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(pkg.category)} opacity-20`}></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl opacity-20">
            {pkg.category === 'honeymoon' && '💕'}
            {pkg.category === 'hajj-umra' && '🕌'}
            {pkg.category === 'air-tickets' && '✈️'}
            {pkg.category === 'travel-insurance' && '🛡️'}
            {pkg.category === 'visa-services' && '📋'}
            {pkg.category === 'hotel-booking' && '🏨'}
          </div>
        </div>
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getCategoryColor(pkg.category)}`}>
            {getCategoryLabel(pkg.category)}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <div className="flex items-center space-x-1 bg-white bg-opacity-90 rounded-full px-2 py-1">
            <Star className="w-3 h-3 text-yellow-500 fill-current" />
            <span className="text-xs font-medium text-gray-700">4.9</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-heading font-semibold text-secondary-900 mb-2 group-hover:text-primary-500 transition-colors duration-300">
          {pkg.title}
        </h3>
        
        <p className="text-secondary-600 mb-4 line-clamp-2">
          {pkg.summary}
        </p>

        {/* Highlights */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {pkg.highlights.slice(0, 2).map((highlight, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-full"
              >
                {highlight}
              </span>
            ))}
            {pkg.highlights.length > 2 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                +{pkg.highlights.length - 2} more
              </span>
            )}
          </div>
        </div>

        {/* Details */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4 text-sm text-secondary-600">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{pkg.durationDays} days</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>2-4 people</span>
            </div>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-secondary-500">Starting from</span>
            <div className="text-2xl font-bold text-secondary-900">
              £{pkg.priceFrom.toLocaleString()}
            </div>
          </div>
          <button
            onClick={onViewDetails}
            className="btn-primary flex items-center space-x-2 group"
          >
            <span>View Details</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
