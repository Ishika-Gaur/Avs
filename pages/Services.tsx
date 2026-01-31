import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div>
      {/* About AVS Enterprise Hero Section - Improved */}
      <section className="relative min-h-[650px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2000&auto=format&fit=crop')"
          }}
        />
        
        {/* Enhanced Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/90" />
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-10 shadow-lg">
            <span className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-white/95 text-sm font-semibold tracking-wider uppercase">
              Established Excellence Since 2009
            </span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-white block mb-2">About</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
              AVS Enterprise
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-20 max-w-4xl mx-auto leading-relaxed font-light">
            A legacy of commitment, a future of excellence in business support services.
          </p>
          
          {/* Stats - Improved Design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Stat 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 hover:bg-white/10 hover:border-blue-400/40 transition-all duration-300 shadow-xl">
                <div className="text-6xl md:text-7xl font-black mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-cyan-400">
                    15+
                  </span>
                </div>
                <div className="text-lg text-gray-200 font-medium tracking-wide">
                  Years Experience
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 hover:bg-white/10 hover:border-blue-400/40 transition-all duration-300 shadow-xl">
                <div className="text-6xl md:text-7xl font-black mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-cyan-400">
                    500+
                  </span>
                </div>
                <div className="text-lg text-gray-200 font-medium tracking-wide">
                  Happy Clients
                </div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 hover:bg-white/10 hover:border-blue-400/40 transition-all duration-300 shadow-xl">
                <div className="text-6xl md:text-7xl font-black mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-cyan-400">
                    5000+
                  </span>
                </div>
                <div className="text-lg text-gray-200 font-medium tracking-wide">
                  Staff Deployed
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            centered 
            title="Custom Solutions for Your Business" 
            subtitle="We provide a diverse portfolio of services that allow you to focus on your core business while we handle the rest."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle centered title="Our Service Delivery Process" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative mt-16">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-brand/10 -z-10"></div>
            {[
              { step: '01', title: 'Consultation', desc: 'Understanding your specific needs and operational context.' },
              { step: '02', title: 'Selection', desc: 'Rigorous vetting and matching of the right staff or resources.' },
              { step: '03', title: 'Deployment', desc: 'Seamless integration and onboarding of services.' },
              { step: '04', title: 'Monitoring', desc: 'Ongoing quality checks and performance management.' }
            ].map((item, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-16 h-16 bg-white border-4 border-brand/20 text-brand font-black text-xl rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand group-hover:text-white transition-all">
                  {item.step}
                </div>
                <h4 className="font-bold text-xl mb-3">{item.title}</h4>
                <p className="text-gray-600 text-sm px-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;