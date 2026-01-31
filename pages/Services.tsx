
import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div>
      <Hero 
        title="Our Specialized Services" 
        subtitle="End-to-end business support solutions tailored for your industry."
        backgroundImage="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2000&auto=format&fit=crop"
        showButtons={false}
      />

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

      {/* Call to Action */}
      {/* <section className="py-20 bg-brand relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[800px] border-[50px] border-white rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-white max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Looking for a customized service package?</h2>
            <p className="text-corporate-200 text-lg">Contact our consultants today to design a business support plan that fits your requirements perfectly.</p>
          </div>
          <button className="bg-white text-brand px-10 py-4 rounded-full font-bold text-lg hover:bg-corporate-50 transition-colors shadow-2xl">
            Get a Free Quote
          </button>
        </div>
      </section> */}
    </div>
  );
};

export default Services;
