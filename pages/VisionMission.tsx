import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { Target, Compass, Heart, ShieldCheck, Zap, TrendingUp, Award, Users2, Sparkles } from 'lucide-react';

const VisionMission: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Enhanced Hero Banner */}
      <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
        {/* Background Image with Better Visibility */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
          
          {/* Animated geometric shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-400/20 rounded-full blur-2xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-400/10 rounded-full blur-xl animate-pulse-slow"></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in-up">
            {/* Badge */}
            <div className="inline-block mb-6">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5">
                <Sparkles className="w-4 h-4 text-orange-400" />
                <span className="text-white text-sm font-semibold">Our Purpose & Vision</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
              Defining Our Path to
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-blue-400 animate-gradient drop-shadow-none">
                Excellence
              </span>
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-blue-50 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md">
              Becoming the most trusted name in outsourcing and workforce management through dedication, innovation, and unwavering commitment.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards with Motion */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {/* Vision Card */}
            <div className="group animate-slide-in-left">
              <div className="p-8 md:p-10 bg-gradient-to-br from-blue-50 to-white rounded-3xl relative overflow-hidden border border-blue-100 shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                {/* Background Icon */}
                <div className="absolute top-0 right-0 p-8 text-blue-600/10 group-hover:text-blue-600/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <Target size={120} strokeWidth={1.5} />
                </div>

                {/* Floating particles */}
                <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-float"></div>
                <div className="absolute top-20 right-20 w-3 h-3 bg-teal-400 rounded-full animate-float-delayed"></div>
                <div className="absolute bottom-20 left-20 w-2 h-2 bg-blue-300 rounded-full animate-pulse-slow"></div>

                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-blue-600/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Target size={28} className="group-hover:scale-110 transition-transform duration-500" />
                  </div>

                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-5 group-hover:text-blue-600 transition-colors duration-300">
                    Our Vision
                  </h2>

                  <div className="relative pl-5 border-l-4 border-blue-600">
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed italic font-medium">
                      "To be a globally recognized and trusted partner in manpower and outsourcing services by delivering excellence, reliability, and unparalleled value to every organization we serve."
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="mt-6 pt-6 border-t border-blue-100 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-2xl md:text-3xl font-bold text-blue-600">Global</p>
                      <p className="text-xs md:text-sm text-gray-600">Reach</p>
                    </div>
                    <div>
                      <p className="text-2xl md:text-3xl font-bold text-blue-600">Trusted</p>
                      <p className="text-xs md:text-sm text-gray-600">Partnership</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="group animate-slide-in-right">
              <div className="p-8 md:p-10 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl relative overflow-hidden border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                {/* Background Icon */}
                <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-white/10 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12">
                  <Compass size={120} strokeWidth={1.5} />
                </div>

                {/* Floating particles */}
                <div className="absolute top-10 right-10 w-2 h-2 bg-teal-400 rounded-full animate-float"></div>
                <div className="absolute top-20 left-20 w-3 h-3 bg-orange-400 rounded-full animate-float-delayed"></div>
                <div className="absolute bottom-20 right-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse-slow"></div>

                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-teal-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Compass size={28} className="group-hover:scale-110 transition-transform duration-500" />
                  </div>

                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-5 md:mb-6 group-hover:text-teal-400 transition-colors duration-300">
                    Our Mission
                  </h2>

                  <ul className="space-y-3 md:space-y-4">
                    {[
                      "Provide skilled and unskilled manpower with a focus on quality and reliability.",
                      "Deliver comprehensive outsourcing services that streamline corporate operations.",
                      "Maintain the highest standards of compliance, safety, and ethical practices.",
                      "Foster long-term partnerships built on mutual growth and transparency."
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3 group/item hover:translate-x-2 transition-transform duration-300">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-5 h-5 bg-teal-500/20 rounded-full flex items-center justify-center group-hover/item:bg-teal-500 transition-colors duration-300">
                            <Zap className="text-teal-400 group-hover/item:text-white transition-colors duration-300" size={12} />
                          </div>
                        </div>
                        <span className="text-sm md:text-base text-gray-300 leading-relaxed group-hover/item:text-white transition-colors duration-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section with Enhanced Graphics */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-teal-200 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-100 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <div className="inline-block mb-4">
              <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-5 py-2">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-blue-600 text-sm font-semibold">Our Core Values</span>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              The Principles That <span className="text-blue-600">Guide Us</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Our everyday operations are driven by values that ensure excellence and integrity in everything we do.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { 
                title: 'Integrity', 
                desc: 'Doing what is right, always. We believe in transparency and honesty in all our dealings.', 
                icon: <ShieldCheck />,
                color: 'blue',
                delay: '0'
              },
              { 
                title: 'Client Centricity', 
                desc: 'Our clients are at the heart of everything we do. Their success is our success.', 
                icon: <Heart />,
                color: 'red',
                delay: '100'
              },
              { 
                title: 'Excellence', 
                desc: 'We strive for the highest quality in every service we provide, never settling for less.', 
                icon: <Award />,
                color: 'yellow',
                delay: '200'
              },
              { 
                title: 'Innovation', 
                desc: 'Embracing modern technologies and methodologies to improve service delivery.', 
                icon: <TrendingUp />,
                color: 'teal',
                delay: '300'
              },
              { 
                title: 'Reliability', 
                desc: 'Consistent performance that our clients can depend on, day in and day out.', 
                icon: <ShieldCheck />,
                color: 'green',
                delay: '400'
              },
              { 
                title: 'Empowerment', 
                desc: 'Uplifting our staff through training and fair opportunities, creating a better future.', 
                icon: <Users2 />,
                color: 'purple',
                delay: '500'
              }
            ].map((val, idx) => (
              <div 
                key={idx} 
                className="group bg-white p-6 md:p-7 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${val.delay}ms` }}
              >
                {/* Icon with animated background */}
                <div className="relative mb-5">
                  <div className={`w-12 h-12 md:w-14 md:h-14 bg-${val.color}-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10`}>
                    <div className={`text-${val.color}-600 group-hover:scale-110 transition-transform duration-500`}>
                      {React.cloneElement(val.icon as React.ReactElement, { size: 24 })}
                    </div>
                  </div>
                  {/* Animated ring */}
                  <div className={`absolute top-0 left-0 w-12 h-12 md:w-14 md:h-14 bg-${val.color}-100 rounded-xl opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500`}></div>
                </div>

                <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {val.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {val.desc}
                </p>

                {/* Hover indicator */}
                <div className="mt-4 pt-4 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center text-blue-600 text-sm font-semibold">
                    {/* <span>Learn more</span> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes scroll {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(20px); opacity: 0; }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }

        /* Fix for Tailwind dynamic color classes */
        .bg-blue-50, .text-blue-600, .bg-blue-100 {}
        .bg-red-50, .text-red-600, .bg-red-100 {}
        .bg-yellow-50, .text-yellow-600, .bg-yellow-100 {}
        .bg-teal-50, .text-teal-600, .bg-teal-100 {}
        .bg-green-50, .text-green-600, .bg-green-100 {}
        .bg-purple-50, .text-purple-600, .bg-purple-100 {}
      `}</style>
    </div>
  );
};

export default VisionMission;