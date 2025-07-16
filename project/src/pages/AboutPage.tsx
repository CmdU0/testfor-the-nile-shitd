import React from 'react';
import { Sparkles, Eye, Music, Utensils, MapPin, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutPage: React.FC = () => {
  const { language } = useLanguage();

  const features = [
    {
      icon: <Eye className="w-8 h-8 text-blue-500" />,
      title: "3D Projection Mapping",
      description: "Advanced optical techniques create stunning 3D illusions on your dining table"
    },
    {
      icon: <Music className="w-8 h-8 text-purple-500" />,
      title: "Themed Music & Props",
      description: "Immersive audio and visual elements enhance the storytelling experience"
    },
    {
      icon: <Utensils className="w-8 h-8 text-amber-500" />,
      title: "Exquisite Menu",
      description: "Carefully crafted dishes that complement the magical dining show"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-pink-500" />,
      title: "Interactive Storytelling",
      description: "Watch Le Petit Chef come to life and prepare your meal on your plate"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-24">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Sparkles className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-400 rounded-full animate-pulse"></div>
            </div>
          </div>
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 text-gray-800 font-serif ${language === 'ar' ? 'font-arabic' : ''}`}>
            About Le Petit Chef
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-8"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">6cm</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 font-serif">Meet Le Petit Chef</h2>
                    <p className="text-gray-600">Born in Marseille, France - April 2015</p>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  Le Petit Chef is just 6 cm tall, and he will not grow any bigger. According to legend, he was born in April 2015 in Marseille, France. Enjoy an unforgettable experience with delightful dining and entertainment.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  By using profound artistic knowledge, and combining it with the latest technology, his "parents" - the art directors of Skullmapping - tell stories with stunning bespoke visuals, such as "Le Petit Chef". The technology they use is called 3D Projection Mapping. Promised! It will capture your imagination :)
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Le Petit Chef Experience"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-lg font-semibold">Experience the Magic</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-amber-400 rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-blue-500 rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Technology Section */}
          <div className="bg-white rounded-3xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-800 font-serif text-center mb-8">
              The Technology Behind the Magic
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  The show is paired with themed music, props, and an exquisite menu. A miniature chef comes to life on your dinner table, all through the magic of visual mapping.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  By mapping your dining table and the objects on it (e.g. your plates and cutlery), we are able to project a virtual story onto the tabletop. The 3D effect is often thought of as a hologram or a 3D projection.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  In fact, the use of special optical techniques, length distortions from the right angle produce the effect or illusion of 3D.
                </p>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 flex items-center justify-center">
                  <div className="text-center">
                    <Eye className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">3D Projection Mapping</h3>
                    <p className="text-gray-600">Advanced visual technology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-gray-50 rounded-full mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Experience Timeline */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
            <h2 className="text-3xl font-bold font-serif text-center mb-8">Your Evening Timeline</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Arrival</h3>
                <p className="text-white/90">Welcome to Four Seasons Cairo and settle into your specially mapped table</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">The Show Begins</h3>
                <p className="text-white/90">Watch Le Petit Chef come to life and begin preparing your meal</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Utensils className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Dining Experience</h3>
                <p className="text-white/90">Enjoy your exquisite meal as the story unfolds around you</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;