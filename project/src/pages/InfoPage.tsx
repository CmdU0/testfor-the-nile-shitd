import React from 'react';
import { Clock, Users, CreditCard, Phone, Mail, AlertCircle, Info } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const InfoPage: React.FC = () => {
  const { language } = useLanguage();

  const infoSections = [
    {
      icon: <CreditCard className="w-8 h-8 text-blue-500" />,
      title: "Payment Information",
      content: "Please note that the remaining balance will be due upon arrival prior to your dining experience.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Clock className="w-8 h-8 text-amber-500" />,
      title: "Arrival Requirements",
      content: "To ensure that all guests enjoy this unique dining experience, we would like to ask that all members of your party are present at least thirty (30) minutes prior to your booking. Latecomers will be allowed into the room at an appropriate interval.",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-red-500" />,
      title: "Refund Policy",
      content: "Once paid, the deposit and purchase price of any 'Le Petit Chef' menus and associated add-ons are non-refundable. Diners are however able to make changes to their dates up to 48 hours prior to the original booking date by contacting Phone: (+202) 3567 1891 or Email: lepetitchef.caf@fourseasons.com.",
      color: "from-red-500 to-red-600"
    }
  ];

  const guidelines = [
    {
      icon: <Users className="w-6 h-6 text-green-500" />,
      title: "Group Bookings",
      description: "Perfect for celebrations, corporate events, and special occasions"
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      title: "Duration",
      description: "The complete experience lasts approximately 2-3 hours"
    },
    {
      icon: <Info className="w-6 h-6 text-purple-500" />,
      title: "Age Recommendation",
      description: "Suitable for all ages, with special kids menu available"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 pt-24">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full">
              <Info className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 text-gray-800 font-serif ${language === 'ar' ? 'font-arabic' : ''}`}>
            Important Information
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-indigo-400 to-purple-600 mx-auto mb-8"></div>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed ${language === 'ar' ? 'font-arabic' : ''}`}>
            Please review the following important details before making your reservation
          </p>
        </div>

        {/* Main Information Sections */}
        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          {infoSections.map((section, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className={`bg-gradient-to-r ${section.color} p-6 text-white`}>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white/20 rounded-full">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold font-serif">{section.title}</h2>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Guidelines Grid */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-800 font-serif text-center mb-12">
            Additional Guidelines
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {guidelines.map((guideline, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-2 bg-gray-50 rounded-full">
                    {guideline.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{guideline.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{guideline.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 text-white max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-serif text-center mb-8">
            Need to Make Changes?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <a 
                href="tel:+20235671891" 
                className="text-white/90 hover:text-white transition-colors text-lg"
              >
                (+202) 3567 1891
              </a>
              <p className="text-white/80 text-sm mt-2">Available daily for reservations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <a 
                href="mailto:lepetitchef.caf@fourseasons.com" 
                className="text-white/90 hover:text-white transition-colors text-lg break-all"
              >
                lepetitchef.caf@fourseasons.com
              </a>
              <p className="text-white/80 text-sm mt-2">We'll respond within 24 hours</p>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-6 border-t border-white/20">
            <p className="text-white/90 text-lg">
              Remember: Changes must be made at least 48 hours before your original booking date
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 font-serif">
              Ready to Book Your Experience?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact us now to secure your table for this magical dining adventure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+20235671891"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-8 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Call Now
              </a>
              <a
                href="mailto:lepetitchef.caf@fourseasons.com"
                className="border-2 border-indigo-500 text-indigo-700 py-3 px-8 rounded-full font-semibold hover:bg-indigo-50 transition-all duration-300"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;