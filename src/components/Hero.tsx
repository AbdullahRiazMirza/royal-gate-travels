import React, { useState, useEffect } from 'react';
import { Search, Calendar, Users, MapPin } from 'lucide-react';
import { getAssetPath } from '../utils/assetPath';

interface Airport {
  icao: string;
  iata: string;
  name: string;
  city: string;
  state: string;
  country: string;
  elevation: number;
  lat: number;
  lon: number;
  tz: string;
}

const Hero: React.FC = () => {
  const [airports, setAirports] = useState<Airport[]>([]);
  const [filteredAirports, setFilteredAirports] = useState<Airport[]>([]);
  const [fromAirport, setFromAirport] = useState('');
  const [toAirport, setToAirport] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState('1');
  const [isLoading, setIsLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    {
      src: getAssetPath('/packages/hajj-package.jpg'),
      alt: 'Hajj Package - Sacred Pilgrimage',
      title: 'Sacred Journeys',
      subtitle: 'Experience the spiritual journey of a lifetime'
    },
    {
      src: getAssetPath('/services/honeymoon.jpg'),
      alt: 'Honeymoon Packages - Romantic Getaways',
      title: 'Romantic Escapes',
      subtitle: 'Create unforgettable memories together'
    },
    {
      src: getAssetPath('/packages/burjalarab.jpg'),
      alt: 'Burj Al Arab - Dubai Luxury',
      title: 'Luxury Destinations',
      subtitle: 'Indulge in world-class luxury and comfort'
    }
  ];

  useEffect(() => {
    // Load airports data
    fetch(getAssetPath('/airports.json'))
      .then(response => response.json())
      .then(data => {
        // Convert object to array and filter for airports with IATA codes
        const airportArray = Object.values(data).filter((airport: any) => airport.iata && airport.iata !== '');
        setAirports(airportArray as Airport[]);
        setFilteredAirports(airportArray as Airport[]);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error loading airports:', error);
        setIsLoading(false);
      });
  }, []);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 12000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const handleSearch = () => {
    if (!fromAirport || !toAirport) {
      alert('Please select both departure and destination airports');
      return;
    }

    const fromAirportData = airports.find(airport => airport.icao === fromAirport);
    const toAirportData = airports.find(airport => airport.icao === toAirport);

    if (!fromAirportData || !toAirportData) {
      alert('Please select valid airports');
      return;
    }

    // Create WhatsApp message
    const message = `🛫 *Flight Search Request*

*From:* ${fromAirportData.iata} - ${fromAirportData.city}
*To:* ${toAirportData.iata} - ${toAirportData.city}
*Departure:* ${departureDate || 'Not specified'}
*Return:* ${returnDate || 'One way'}
*Passengers:* ${passengers}

Please help me find the best flight options for this route.`;

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/923214899987?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };
  return (
    <>
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
        ))}
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? 'bg-white scale-125'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20 md:pt-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight drop-shadow-lg">
                {heroImages[currentImageIndex].title}
                <span className="text-primary-300 block">Extraordinary Journeys</span>
              </h1>
              <p className="text-lg md:text-xl text-white leading-relaxed max-w-2xl drop-shadow-md">
                {heroImages[currentImageIndex].subtitle}
              </p>
            </div>


            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-6 sm:pt-8">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm text-white drop-shadow-md">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm text-white drop-shadow-md">Certified Agents</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm text-white drop-shadow-md">Best Price Guarantee</span>
              </div>
            </div>
          </div>

          {/* Quick Search Widget - Desktop */}
          <div className="hidden lg:block lg:ml-8">
            <div className="card p-8 max-w-md mx-auto lg:mx-0 bg-white bg-opacity-60 backdrop-blur-md border border-white/20">
              <h3 className="text-xl font-heading font-semibold text-secondary-900 mb-6 text-center">
                Quick Search
              </h3>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-secondary-700 mb-2">
                      From
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-secondary-400" />
                      <select
                        value={fromAirport}
                        onChange={(e) => setFromAirport(e.target.value)}
                        className="input-field pl-10"
                        required
                        disabled={isLoading}
                      >
                        <option value="">
                          {isLoading ? 'Loading airports...' : 'Select departure airport'}
                        </option>
                        {filteredAirports.map((airport) => (
                          <option key={airport.icao} value={airport.icao}>
                            {airport.iata} - {airport.city}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-secondary-700 mb-2">
                      To
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-secondary-400" />
                      <select
                        value={toAirport}
                        onChange={(e) => setToAirport(e.target.value)}
                        className="input-field pl-10"
                        required
                        disabled={isLoading}
                      >
                        <option value="">
                          {isLoading ? 'Loading airports...' : 'Select destination airport'}
                        </option>
                        {filteredAirports.map((airport) => (
                          <option key={airport.icao} value={airport.icao}>
                            {airport.iata} - {airport.city}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-secondary-700 mb-2">
                      Departure
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-secondary-400" />
                      <input
                        type="date"
                        value={departureDate}
                        onChange={(e) => setDepartureDate(e.target.value)}
                        className="input-field pl-10"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-secondary-700 mb-2">
                      Return
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-secondary-400" />
                      <input
                        type="date"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        className="input-field pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-secondary-700 mb-2">
                    Passengers
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-secondary-400" />
                    <select 
                      value={passengers}
                      onChange={(e) => setPassengers(e.target.value)}
                      className="input-field pl-10"
                    >
                      <option value="1">1 Passenger</option>
                      <option value="2">2 Passengers</option>
                      <option value="3">3 Passengers</option>
                      <option value="4">4 Passengers</option>
                      <option value="5+">5+ Passengers</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Loading...</span>
                    </>
                  ) : (
                    <>
                      <Search className="w-5 h-5" />
                      <span>Search Now</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>

    {/* Quick Search Widget - Mobile */}
    <div className="lg:hidden bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="card p-8 bg-white shadow-lg border border-gray-100">
            <h3 className="text-xl font-heading font-semibold text-secondary-900 mb-6 text-center">
              Quick Search
            </h3>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-secondary-700 mb-2">
                    From
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-secondary-400" />
                    <select
                      value={fromAirport}
                      onChange={(e) => setFromAirport(e.target.value)}
                      className="input-field pl-10"
                      required
                      disabled={isLoading}
                    >
                      <option value="">
                        {isLoading ? 'Loading airports...' : 'Select departure airport'}
                      </option>
                      {filteredAirports.map((airport) => (
                        <option key={airport.icao} value={airport.icao}>
                          {airport.iata} - {airport.city}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-secondary-700 mb-2">
                    To
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-secondary-400" />
                    <select
                      value={toAirport}
                      onChange={(e) => setToAirport(e.target.value)}
                      className="input-field pl-10"
                      required
                      disabled={isLoading}
                    >
                      <option value="">
                        {isLoading ? 'Loading airports...' : 'Select destination airport'}
                      </option>
                      {filteredAirports.map((airport) => (
                        <option key={airport.icao} value={airport.icao}>
                          {airport.iata} - {airport.city}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-secondary-700 mb-2">
                    Departure
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-secondary-400" />
                    <input
                      type="date"
                      value={departureDate}
                      onChange={(e) => setDepartureDate(e.target.value)}
                      className="input-field pl-10"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-secondary-700 mb-2">
                    Return
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-secondary-400" />
                    <input
                      type="date"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      className="input-field pl-10"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-secondary-700 mb-2">
                  Passengers
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-secondary-400" />
                  <select 
                    value={passengers}
                    onChange={(e) => setPassengers(e.target.value)}
                    className="input-field pl-10"
                  >
                    <option value="1">1 Passenger</option>
                    <option value="2">2 Passengers</option>
                    <option value="3">3 Passengers</option>
                    <option value="4">4 Passengers</option>
                    <option value="5+">5+ Passengers</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Loading...</span>
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5" />
                    <span>Search Now</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Hero;
