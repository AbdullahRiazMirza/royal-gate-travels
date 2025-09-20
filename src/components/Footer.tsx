import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2 shadow-lg">
              <img 
                src="/RGTT logo.PNG" 
                alt="Royal Gate Travels Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-lg font-heading font-bold">Royal Gate Travels</h3>
              <p className="text-sm text-gray-400">Your Gateway to the World</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 text-sm">
            <a 
              href="tel:+923214899987" 
              className="flex items-center space-x-2 hover:text-primary-400 transition-colors duration-200 group"
            >
              <Phone className="w-4 h-4 text-primary-400 group-hover:text-primary-300 transition-colors duration-200" />
              <span className="text-gray-300 group-hover:text-white transition-colors duration-200">+92 321 489 9987</span>
            </a>
            <a 
              href="mailto:info@royalgatetravels.com" 
              className="flex items-center space-x-2 hover:text-primary-400 transition-colors duration-200 group"
            >
              <Mail className="w-4 h-4 text-primary-400 group-hover:text-primary-300 transition-colors duration-200" />
              <span className="text-gray-300 group-hover:text-white transition-colors duration-200">info@royalgatetravels.com</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Royal Gate Travels. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
