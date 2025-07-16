import React from 'react';
import { MapPin, Phone, Mail, Clock, Car, Navigation, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LocationPage: React.FC = () => {
  const { language } = useLanguage();

  const locationDetails = [
    {
      icon: <MapPin className="w-6 h-6 text-blue-500" />,
      title: "Address",
      content: "Four Seasons Hotel Cairo at the First Residence, Giza\nFirst Nile Boat, 35 El Nile Street (Giza)"
    },
    {
      icon: <Phone className="w-6 h-6 text-green-500" />,
      title: "Phone",
      content: "(+202) 3567 1891"
    },
    {
      icon: <Mail className="w-6 h-6 text-purple-500" />,
      title: "Email",
      content: "lepetitchef.caf@fourseasons.com"
    },
    {
      icon: <Clock className="w-6 h-6 text-amber-500" />,
      title: "Operating Hours",
      content: "Daily: 7:00 PM - 10:00 PM\nReservations Required"
    }
  ];

  const directions = [
    {
      icon: <Car className="w-6 h-6 text-blue-500" />,
      title: "By Car",
      description: "Valet parking available at Four Seasons Hotel Cairo. Located on the prestigious Nile Corniche."
    },
    {
      icon: <Navigation className="w-6 h-6 text-green-500" />,
      title: "By Taxi/Uber",
      description: "Easy access via ride-sharing services. Show driver: Four Seasons Hotel Cairo, First Residence."
    },
    {
      icon: <MapPin className="w-6 h-6 text-purple-500" />,
      title: "Landmarks",
      description: "Near Cairo Opera House and Egyptian Museum. Overlooking the Nile River."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 pt-24">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-full">
              <MapPin className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 text-gray-800 font-serif ${language === 'ar' ? 'font-arabic' : ''}`}>
            Find Us Here
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-blue-600 mx-auto mb-8"></div>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed ${language === 'ar' ? 'font-arabic' : ''}`}>
            Located in the heart of Cairo at the prestigious Four Seasons Hotel
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Location Details Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {locationDetails.map((detail, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-gray-50 rounded-full mb-4">
                    {detail.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{detail.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                    {detail.content}
                  </p>
                  {detail.title === "Phone" && (
                    <a 
                      href={`tel:${detail.content.replace(/[^\d+]/g, '')}`}
                      className="mt-2 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      Call Now
                    </a>
                  )}
                  {detail.title === "Email" && (
                    <a 
                      href={`mailto:${detail.content}`}
                      className="mt-2 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      Send Email
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Map Section */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16">
            <div className="bg-gradient-to-r from-green-500 to-blue-600 p-6 text-white">
              <h2 className="text-3xl font-bold font-serif text-center">Location Map</h2>
              <p className="text-center text-white/90 mt-2">Four Seasons Hotel Cairo at the First Residence</p>
            </div>
            
            <div className="p-8">
              <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden relative">
                {/* Interactive Map Placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Interactive Map</h3>
                    <p className="text-gray-600 mb-4">Four Seasons Hotel Cairo at the First Residence</p>
                    <a
                      href="https://maps.google.com/?q=Four+Seasons+Hotel+Cairo+First+Residence+Giza"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-2 px-6 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
                
                {/* Map overlay with location pin */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Directions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 font-serif text-center mb-12">
              How to Get Here
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {directions.map((direction, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-2 bg-gray-50 rounded-full">
                      {direction.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">{direction.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{direction.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hotel Information */}
          <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold font-serif mb-4">Four Seasons Hotel Cairo</h2>
                <p className="text-white/90 leading-relaxed mb-6">
                  Experience Le Petit Chef in the luxurious setting of Four Seasons Hotel Cairo at the First Residence. 
                  Located on the banks of the Nile River, this prestigious venue provides the perfect backdrop for your magical dining experience.
                </p>
                
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-white/90">5-Star Luxury Hotel</span>
                </div>
                
                <div className="space-y-2">
                  <p className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>Prime Nile River location</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <Car className="w-4 h-4" />
                    <span>Valet parking available</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>Concierge services</span>
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-white/10 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
                    alt="Four Seasons Hotel Cairo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 font-serif">
                Ready to Visit Us?
              </h3>
              <p className="text-gray-600 mb-6">
                Make your reservation now for an unforgettable evening at Le Petit Chef
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+20235671891"
                  className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 px-8 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Call for Reservation
                </a>
                <a
                  href="mailto:lepetitchef.caf@fourseasons.com"
                  className="border-2 border-green-500 text-green-700 py-3 px-8 rounded-full font-semibold hover:bg-green-50 transition-all duration-300"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;