import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';

const About: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-white">
      {/* Enhanced Hero Section */}
      <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.pinimg.com/1200x/af/59/10/af59108e0b74903790daefa8d91e0651.jpg" 
            alt="About AVS Enterprise"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/40"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fadeIn">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-white/90 tracking-wide uppercase">Established Excellence Since 2009</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight">
              About <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">AVS Enterprise</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl lg:text-3xl text-slate-200 max-w-4xl mx-auto font-light leading-relaxed">
              A legacy of commitment, a future of excellence in business support services.
            </p>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-12">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-blue-400 mb-2">15+</div>
                <div className="text-sm text-slate-300 font-medium">Years Experience</div>
              </div>
              <div className="text-center border-x border-white/20">
                <div className="text-4xl md:text-5xl font-black text-blue-400 mb-2">500+</div>
                <div className="text-sm text-slate-300 font-medium">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-blue-400 mb-2">5000+</div>
                <div className="text-sm text-slate-300 font-medium">Staff Deployed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full"></div>
          </div>
        </div> */}
      </div>

      {/* Main Content Section */}
      <section className="py-32 relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="text-sm font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-4 py-2 rounded-full">Our Story</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                  Driven by Excellence, <span className="text-blue-600">Rooted in Trust</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  At AVS Enterprise, we understand that the backbone of any successful organization is its people and the systems that support them.
                </p>
              </div>

              <div className="space-y-6 text-slate-700 leading-relaxed">
                <p>
                  Established with a vision to redefine the manpower outsourcing industry, AVS Enterprise has grown into a comprehensive business support services partner. We cater to corporate, industrial, and commercial clients with a focus on delivering high-quality, compliant, and reliable workforce solutions.
                </p>
                <p>
                  Our expertise spans across security services, IT infrastructure, supply chain management, and facility maintenance. We believe in a client-centric approach, where every solution is tailored to the specific operational needs of our partners.
                </p>
              </div>

              {/* Quote Card */}
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <svg className="w-12 h-12 text-blue-400/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                  </svg>
                  <p className="text-lg text-white/90 leading-relaxed mb-6 font-light">
                    Our goal is not just to fill roles, but to provide talent that integrates seamlessly into your company culture and contributes to your long-term success.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-px bg-blue-400"></div>
                    <p className="text-sm font-bold text-blue-400 tracking-wide">Leadership Team, AVS Enterprise</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {/* Top Left */}
                <div className="space-y-6">
                  <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800&auto=format&fit=crop" 
                      className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700" 
                      alt="Team Work" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop" 
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" 
                      alt="Industrial Team" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Top Right */}
                <div className="space-y-6 pt-12">
                  <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                    <img 
                      src="https://i.pinimg.com/1200x/af/59/10/af59108e0b74903790daefa8d91e0651.jpg" 
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700" 
                      alt="Office Staff" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop" 
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700" 
                      alt="Corporate Environment" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced */}
      <section className="py-32 relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20 space-y-6">
            <div className="inline-block">
              <span className="text-sm font-bold tracking-wider uppercase text-blue-400 bg-blue-400/10 px-4 py-2 rounded-full">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Experience & <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Why we are the preferred choice for leading enterprises across India.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: '15+',
                title: 'Years of Experience',
                description: 'A rich history of navigating diverse industrial and corporate challenges.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                number: '500+',
                title: 'Happy Clients',
                description: 'Trusted by Fortune 500 companies and local industry leaders alike.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                gradient: 'from-blue-500 to-indigo-500'
              },
              {
                number: '5000+',
                title: 'Staff Deployed',
                description: 'Managing a massive, skilled workforce across multiple domains.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                gradient: 'from-cyan-500 to-blue-500'
              }
            ].map((stat, index) => (
              <div 
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>

                {/* Number */}
                <h4 className="text-6xl font-black text-transparent bg-gradient-to-br from-white to-white/60 bg-clip-text mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </h4>

                {/* Title */}
                <h5 className="font-bold text-2xl text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {stat.title}
                </h5>

                {/* Description */}
                <p className="text-slate-300 leading-relaxed">
                  {stat.description}
                </p>

                {/* Hover Arrow */}
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  {/* <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Decorative Line */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default About;