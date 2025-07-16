import React from 'react';
import { Crown, Leaf, Users, Sparkles } from 'lucide-react';
import { menuPackages } from '../data/menuData';
import { useLanguage } from '../contexts/LanguageContext';

const MenuPage: React.FC = () => {
  const { language } = useLanguage();

  const getPackageIcon = (id: string) => {
    switch (id) {
      case 'premium':
        return <Crown className="w-8 h-8 text-amber-500" />;
      case 'vegetarian':
        return <Leaf className="w-8 h-8 text-green-500" />;
      case 'junior':
        return <Users className="w-8 h-8 text-blue-500" />;
      default:
        return <Sparkles className="w-8 h-8 text-amber-500" />;
    }
  };

  const getPackageColor = (id: string) => {
    switch (id) {
      case 'premium':
        return 'from-amber-500 to-yellow-600';
      case 'vegetarian':
        return 'from-green-500 to-emerald-600';
      case 'junior':
        return 'from-blue-500 to-indigo-600';
      default:
        return 'from-amber-500 to-orange-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-amber-50 pt-24">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 text-gray-800 font-serif ${language === 'ar' ? 'font-arabic' : ''}`}>
            Our Exquisite Menus
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8"></div>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed ${language === 'ar' ? 'font-arabic' : ''}`}>
            Experience culinary excellence with our carefully crafted menu packages, each designed to complement the magical Le Petit Chef show
          </p>
        </div>

        {/* Menu Packages */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {menuPackages.map((menuPackage, index) => (
            <div
              key={menuPackage.id}
              className={`bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ${
                menuPackage.id === 'premium' ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Package Header */}
              <div className={`bg-gradient-to-r ${getPackageColor(menuPackage.id)} p-8 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      {getPackageIcon(menuPackage.id)}
                      <h2 className="text-2xl md:text-3xl font-bold font-serif">
                        {menuPackage.name}
                      </h2>
                    </div>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-4xl md:text-5xl font-bold">
                        {menuPackage.price}
                      </span>
                      <span className="text-xl opacity-90">{menuPackage.currency}</span>
                      <span className="text-lg opacity-75">
                        per {menuPackage.isKidsMenu ? 'child' : 'person'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <div className="p-8">
                <div className="space-y-6">
                  {menuPackage.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3 font-serif">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Book Now Button */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <button className={`w-full bg-gradient-to-r ${getPackageColor(menuPackage.id)} text-white py-4 px-8 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}>
                    Select This Menu
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 font-serif">
              Ready to Experience the Magic?
            </h3>
            <p className="text-gray-600 mb-6">
              Book your table now and embark on an unforgettable culinary journey with Le Petit Chef
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+20235671891"
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 px-8 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Call to Book: +202 3567 1891
              </a>
              <a
                href="mailto:lepetitchef.caf@fourseasons.com"
                className="border-2 border-amber-500 text-amber-700 py-3 px-8 rounded-full font-semibold hover:bg-amber-50 transition-all duration-300"
              >
                Email Reservation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;