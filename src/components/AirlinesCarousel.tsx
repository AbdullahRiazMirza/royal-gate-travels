import React from 'react';
import { getAssetPath } from '../utils/assetPath';

const AirlinesCarousel: React.FC = () => {
  const airlines = [
    {
      name: 'Emirates',
      logo: getAssetPath('/airlines/Emirates_Logo.svg'),
    },
    {
      name: 'Thai Airways',
      logo: getAssetPath('/airlines/Thai_Airways_logo.svg'),
    },
    {
      name: 'Pakistan International Airlines',
      logo: getAssetPath('/airlines/Pakistan_International_Airlines_logo_(2004).svg.png'),
    },
    {
      name: 'Airblue',
      logo: getAssetPath('/airlines/Airblue_Logo.svg'),
    },
    {
      name: 'SereneAir',
      logo: getAssetPath('/airlines/SereneAir.svg'),
    },
    {
      name: 'AirSial',
      logo: getAssetPath('/airlines/AirSial.png'),
    },
    {
      name: 'Fly Jinnah',
      logo: getAssetPath('/airlines/Fly_Jinnah_logo2.png'),
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-900 mb-4">
            Our Airline Partners
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            We work with leading airlines worldwide to bring you the best travel options
          </p>
        </div>

        {/* Scrolling Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-12">
            {/* First set of logos */}
            {airlines.map((airline, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-48 h-24 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={airline.logo}
                  alt={airline.name}
                  className="max-h-16 max-w-32 object-contain hover:scale-105 transition-all duration-300"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {airlines.map((airline, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-48 h-24 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={airline.logo}
                  alt={airline.name}
                  className="max-h-16 max-w-32 object-contain hover:scale-105 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirlinesCarousel;
