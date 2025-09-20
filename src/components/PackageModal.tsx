import React, { useEffect, useState } from 'react';
import type { Package } from '../types';
import { X, MapPin, Calendar, Users, Star, Check, ArrowRight } from 'lucide-react';

interface PackageModalProps {
  pkg: Package;
  onClose: () => void;
}

const PackageModal: React.FC<PackageModalProps> = ({ pkg, onClose }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

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

  const handleBookNow = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative">
          {/* Package Image */}
          {!imageError && pkg.images && pkg.images.length > 0 ? (
            <img
              src={pkg.images[0]}
              alt={pkg.title}
              className={`w-full h-64 object-cover transition-opacity duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              loading="lazy"
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          ) : null}
          
          {/* Fallback Gradient with Emoji */}
          <div className={`h-64 bg-gradient-to-br ${getCategoryColor(pkg.category)} flex items-center justify-center transition-opacity duration-300 ${
            imageLoaded && !imageError ? 'opacity-0 absolute inset-0' : 'opacity-100'
          }`}>
            <div className="text-8xl opacity-30">
              {pkg.category === 'honeymoon' && '💕'}
              {pkg.category === 'hajj-umra' && '🕌'}
              {pkg.category === 'air-tickets' && '✈️'}
              {pkg.category === 'travel-insurance' && '🛡️'}
              {pkg.category === 'visa-services' && '📋'}
              {pkg.category === 'hotel-booking' && '🏨'}
            </div>
          </div>
          
          {/* Loading Placeholder */}
          {!imageLoaded && !imageError && pkg.images && pkg.images.length > 0 && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-200"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${getCategoryColor(pkg.category)}`}>
              {getCategoryLabel(pkg.category)}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-3xl font-heading font-bold text-secondary-900 mb-2">
                {pkg.title}
              </h2>
              <p className="text-lg text-secondary-600">
                {pkg.summary}
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-secondary-500 mb-1">Starting from</div>
              <div className="text-3xl font-bold text-primary-500">
                £{pkg.priceFrom.toLocaleString()}
              </div>
              <div className="flex items-center space-x-1 mt-2">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm text-secondary-600">4.9 (127 reviews)</span>
              </div>
            </div>
          </div>

          {/* Package Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Highlights */}
            <div>
              <h3 className="text-xl font-heading font-semibold text-secondary-900 mb-4">
                What's Included
              </h3>
              <ul className="space-y-3">
                {pkg.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-secondary-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Itinerary */}
            <div>
              <h3 className="text-xl font-heading font-semibold text-secondary-900 mb-4">
                Itinerary
              </h3>
              <div className="space-y-3">
                {pkg.itinerary.map((day, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-secondary-700">{day}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Package Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 p-6 bg-gray-50 rounded-xl">
            <div className="text-center">
              <Calendar className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <div className="text-sm text-secondary-500">Duration</div>
              <div className="font-semibold text-secondary-900">{pkg.durationDays} days</div>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <div className="text-sm text-secondary-500">Group Size</div>
              <div className="font-semibold text-secondary-900">2-4 people</div>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <div className="text-sm text-secondary-500">Category</div>
              <div className="font-semibold text-secondary-900">{getCategoryLabel(pkg.category)}</div>
            </div>
            <div className="text-center">
              <Star className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <div className="text-sm text-secondary-500">Rating</div>
              <div className="font-semibold text-secondary-900">4.9/5</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleBookNow}
              className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2 group flex-1"
            >
              <span>Book Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
                onClose();
              }}
              className="btn-secondary text-lg px-8 py-4 flex-1"
            >
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageModal;
