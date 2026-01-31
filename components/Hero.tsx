
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  showButtons?: boolean;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, backgroundImage, showButtons = true }) => {
  return (
    <div className="relative h-[85vh] w-full flex items-center overflow-hidden">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 animate-fadeInUp">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-gray-200 mb-8 leading-relaxed animate-fadeInUp animation-delay-200">
              {subtitle}
            </p>
          )}
          {showButtons && (
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp animation-delay-400">
              <Link 
                to="/contact" 
                className="bg-brand text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center hover:bg-corporate-800 transition-all shadow-xl shadow-brand/20"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/services" 
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-brand transition-all flex items-center justify-center"
              >
                Our Services
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
