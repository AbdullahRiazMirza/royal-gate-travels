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
          ? 'bg-white shadow-lg backdrop-blur-md bg-opacity-95'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-heading font-bold text-secondary-900">
                Royal Gate Travels
              </h1>
              <p className="text-xs text-secondary-600">Your Gateway to the World</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-secondary-700 hover:text-primary-500 font-medium transition-colors duration-200"
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
              className="lg:hidden p-2 text-secondary-700 hover:text-primary-500 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-secondary-700 hover:text-primary-500 font-medium py-2 transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex space-x-4">
                  <button
                    onClick={handlePhoneClick}
                    className="flex items-center space-x-2 text-secondary-700 hover:text-primary-500 py-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm font-medium">Call</span>
                  </button>
                  <button
                    onClick={handleWhatsAppClick}
                    className="flex items-center space-x-2 text-secondary-700 hover:text-green-500 py-2"
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
