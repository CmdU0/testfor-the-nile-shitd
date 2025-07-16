import React from 'react';
import { Gift, Cake, Sparkles } from 'lucide-react';
import { addons } from '../data/menuData';
import { useLanguage } from '../contexts/LanguageContext';

const AddonsPage: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-pink-50 pt-24">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full">
              <Gift className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 text-gray-800 font-serif ${language === 'ar' ? 'font-arabic' : ''}`}>
            Special Add-ons
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-rose-600 mx-auto mb-8"></div>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed ${language === 'ar' ? 'font-arabic' : ''}`}>
            Make your Le Petit Chef experience even more special with our carefully selected add-ons
          </p>
        </div>

        {/* Addons Grid */}
        <div className="max-w-4xl mx-auto">
          {addons.map((addon) => (
            <div
              key={addon.id}
              className="bg-white rounded-3xl shadow-xl overflow-hidden mb-8 transform hover:scale-105 transition-all duration-300"
            >
              {/* Addon Header */}
              <div className="bg-gradient-to-r from-pink-500 to-rose-600 p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <div className="p-4 bg-white/20 rounded-full">
                      <Cake className="w-12 h-12 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold font-serif mb-2">
                        {addon.name}
                      </h2>
                      <div className="flex items-baseline space-x-2">
                        <span className="text-4xl md:text-5xl font-bold">
                          {addon.price}
                        </span>
                        <span className="text-xl opacity-90">{addon.currency}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Addon Content */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4 font-serif">
                      Perfect for Special Occasions
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {addon.description || "Enhance your dining experience with our specially crafted celebration cake, perfect for birthdays, anniversaries, and other memorable moments."}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Sparkles className="w-5 h-5 text-pink-500" />
                        <span className="text-gray-700">Freshly baked daily</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Sparkles className="w-5 h-5 text-pink-500" />
                        <span className="text-gray-700">Customizable message</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Sparkles className="w-5 h-5 text-pink-500" />
                        <span className="text-gray-700">Premium ingredients</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="aspect-square bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl overflow-hidden">
                      <img
                        src="https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
                        alt="Celebration Cake"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center">
                      <Gift className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Add to Order Button */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <button className="w-full bg-gradient-to-r from-pink-500 to-rose-600 text-white py-4 px-8 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    Add to Your Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How to Order */}
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 font-serif text-center">
            How to Add to Your Reservation
          </h3>
          <div className="space-y-4 text-gray-600">
            <p className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-6 h-6 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <span>Mention the add-on when making your reservation</span>
            </p>
            <p className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-6 h-6 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <span>Call us at +202 3567 1891 or email lepetitchef.caf@fourseasons.com</span>
            </p>
            <p className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-6 h-6 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <span>Payment will be processed with your main reservation</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddonsPage;