import React, { useState } from 'react';
import type { Package } from '../types';
import PackageCard from './PackageCard';
import PackageModal from './PackageModal';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface FeaturedPackagesProps {
  packages: Package[];
}

const FeaturedPackages: React.FC<FeaturedPackagesProps> = ({ packages }) => {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPackage = () => {
    setCurrentIndex((prev) => (prev + 1) % packages.length);
  };

  const prevPackage = () => {
    setCurrentIndex((prev) => (prev - 1 + packages.length) % packages.length);
  };

  return (
    <section id="packages" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-900 mb-6">
            Featured Packages
          </h2>
          <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto">
            Discover our most popular travel packages, carefully curated to provide you with 
            unforgettable experiences around the world.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              onViewDetails={() => setSelectedPackage(pkg)}
            />
          ))}
        </div>

        {/* Mobile/Tablet Carousel */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {packages.map((pkg) => (
                <div key={pkg.id} className="w-full flex-shrink-0 px-4">
                  <PackageCard
                    pkg={pkg}
                    onViewDetails={() => setSelectedPackage(pkg)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={prevPackage}
              className="w-12 h-12 bg-white border-2 border-primary-500 text-primary-500 rounded-full flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all duration-300 shadow-lg"
              aria-label="Previous package"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextPackage}
              className="w-12 h-12 bg-white border-2 border-primary-500 text-primary-500 rounded-full flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all duration-300 shadow-lg"
              aria-label="Next package"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {packages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to package ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-heading font-semibold text-secondary-900 mb-4">
            Don't see what you're looking for?
          </h3>
          <p className="text-lg text-secondary-600 mb-8 max-w-2xl mx-auto">
            Our travel experts can create a custom package tailored to your specific needs and preferences.
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn-primary text-lg px-8 py-4"
          >
            Request Custom Package
          </button>
        </div>
      </div>

      {/* Package Modal */}
      {selectedPackage && (
        <PackageModal
          pkg={selectedPackage}
          onClose={() => setSelectedPackage(null)}
        />
      )}
    </section>
  );
};

export default FeaturedPackages;
