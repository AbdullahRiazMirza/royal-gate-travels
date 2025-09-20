import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Packages', href: '#packages' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handlePhoneClick = () => {
    window.open('tel:+923214899987', '_self');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/923214899987', '_blank');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 shadow-lg backdrop-blur-md'
          : 'bg-black/20 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-3 shadow-lg">
              <img
                src="/RGTT logo.PNG"
                alt="Royal Gate Travels"
                className="h-12 w-auto object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-xl font-heading font-bold transition-colors duration-300 ${
                isScrolled ? 'text-secondary-900' : 'text-white drop-shadow-lg'
              }`}>
                Royal Gate Travels
              </h1>
              <p className={`text-xs transition-colors duration-300 ${
                isScrolled ? 'text-secondary-600' : 'text-white/80 drop-shadow-md'
              }`}>
                Your Gateway to the World
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-colors duration-200 ${
                  isScrolled 
                    ? 'text-secondary-700 hover:text-primary-500' 
                    : 'text-white hover:text-primary-300 drop-shadow-md'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Contact Icons */}
          <div className="flex items-center space-x-4">
            {/* Phone */}
            <button
              onClick={handlePhoneClick}
              className="flex items-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-full transition-colors duration-200"
              aria-label="Call +92 3214899987"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium hidden sm:block">Phone</span>
            </button>

            {/* WhatsApp */}
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition-colors duration-200"
              aria-label="WhatsApp +92 3214899987"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium hidden sm:block">WhatsApp</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 transition-colors ${
                isScrolled 
                  ? 'text-secondary-700 hover:text-primary-500' 
                  : 'text-white hover:text-primary-300 drop-shadow-md'
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`lg:hidden absolute top-full left-0 right-0 shadow-lg border-t transition-all duration-300 ${
            isScrolled 
              ? 'bg-white border-gray-200' 
              : 'bg-black/80 backdrop-blur-md border-white/20'
          }`}>
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left font-medium py-2 transition-colors ${
                    isScrolled 
                      ? 'text-secondary-700 hover:text-primary-500' 
                      : 'text-white hover:text-primary-300'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className={`pt-4 border-t ${
                isScrolled ? 'border-gray-200' : 'border-white/20'
              }`}>
                <div className="flex space-x-4">
                  <button
                    onClick={handlePhoneClick}
                    className={`flex items-center space-x-2 py-2 transition-colors ${
                      isScrolled 
                        ? 'text-secondary-700 hover:text-primary-500' 
                        : 'text-white hover:text-primary-300'
                    }`}
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm font-medium">Call</span>
                  </button>
                  <button
                    onClick={handleWhatsAppClick}
                    className={`flex items-center space-x-2 py-2 transition-colors ${
                      isScrolled 
                        ? 'text-secondary-700 hover:text-green-500' 
                        : 'text-white hover:text-green-300'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
