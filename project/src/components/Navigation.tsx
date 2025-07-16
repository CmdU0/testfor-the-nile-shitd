import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'MENU', labelAr: 'القائمة' },
    { path: '/addons', label: 'ADDONS', labelAr: 'الإضافات' },
    { path: '/about', label: 'ABOUT LE PETIT CHEF', labelAr: 'عن لو بيتي شيف' },
    { path: '/info', label: 'MORE INFORMATION', labelAr: 'معلومات أكثر' },
    { path: '/location', label: 'LOCATION', labelAr: 'الموقع' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-blur shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/src/assets/LPC-Logo-Header.png"
              alt="Le Petit Chef Logo"
              className="h-10 w-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop";
              }}
            />
            <div>
              <h1 className="text-lg font-bold text-gray-900 leading-tight font-serif">
                Le Petit Chef & Friends
              </h1>
              <p className="text-xs text-gray-700 leading-tight">Four Seasons Cairo</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link text-sm font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-amber-600 border-b-2 border-amber-600'
                    : 'text-gray-700 hover:text-amber-600'
                }`}
              >
                {language === 'ar' ? item.labelAr : item.label}
              </Link>
            ))}
          </div>

          {/* Contact & Language Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+20235671891" className="nav-link flex items-center space-x-1.5">
              <Phone size={14} />
              <span className="text-sm">+202 3567 1891</span>
            </a>
            
            <a href="mailto:lepetitchef.caf@fourseasons.com" className="nav-link flex items-center space-x-1.5">
              <Mail size={14} />
              <span className="text-sm font-medium">Book Now</span>
            </a>
            
            <button
              onClick={toggleLanguage}
              className="language-toggle flex items-center space-x-1.5 px-3 py-1.5 rounded-full"
            >
              <Globe size={14} />
              <span className="text-sm font-medium">{language === 'en' ? 'العربية' : 'English'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`nav-link text-base font-medium py-2 ${
                    isActive(item.path)
                      ? 'text-amber-600 bg-amber-50'
                      : 'text-gray-700'
                  }`}
                >
                  {language === 'ar' ? item.labelAr : item.label}
                </Link>
              ))}
              
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <a href="tel:+20235671891" className="nav-link flex items-center space-x-2">
                  <Phone size={16} />
                  <span>+202 3567 1891</span>
                </a>
                
                <a href="mailto:lepetitchef.caf@fourseasons.com" className="nav-link flex items-center space-x-2">
                  <Mail size={16} />
                  <span>Book Now</span>
                </a>
                
                <button
                  onClick={toggleLanguage}
                  className="language-toggle flex items-center space-x-2 px-3 py-2 rounded-lg w-fit"
                >
                  <Globe size={16} />
                  <span>{language === 'en' ? 'العربية' : 'English'}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;