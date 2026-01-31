
import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <div className="bg-white">
      {/* Contact Header */}
      <section className="bg-gray-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand/5 -skew-x-12 translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <SectionTitle 
            light 
            centered 
            title="Get in Touch" 
            subtitle="Have questions about our services or looking for a partnership? We are here to help."
          />
        </div>
      </section>

      <section className="py-24 -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-corporate-50 rounded-2xl flex items-center justify-center text-brand">
                    <Phone />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Call Us</h4>
                    <p className="text-gray-600 text-sm">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-corporate-50 rounded-2xl flex items-center justify-center text-brand">
                    <Mail />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Email Us</h4>
                    <p className="text-gray-600 text-sm">info@avsenterprise.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-corporate-50 rounded-2xl flex items-center justify-center text-brand">
                    <Clock />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Working Hours</h4>
                    <p className="text-gray-600 text-sm">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="bg-brand p-8 rounded-3xl shadow-xl text-white overflow-hidden relative group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform duration-500">
                  <MessageSquare size={100} />
                </div>
                <h4 className="text-2xl font-bold mb-4">Corporate Office</h4>
                <div className="flex items-start space-x-4">
                  <MapPin className="text-corporate-400 mt-1 flex-shrink-0" />
                  <p className="text-corporate-100 leading-relaxed">
                    AVS Enterprise Pvt. Ltd.<br />
                    123 Corporate Plaza, Business Hub,<br />
                    Sector 44, New Delhi - 110001
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
                {!isSent ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Full Name</label>
                        <input required type="text" className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand/20 outline-none transition-all" placeholder="Enter your name" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Email Address</label>
                        <input required type="email" className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand/20 outline-none transition-all" placeholder="Enter your email" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Subject</label>
                      <input required type="text" className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand/20 outline-none transition-all" placeholder="Inquiry about..." />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Message</label>
                      <textarea required rows={5} className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand/20 outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
                    </div>
                    <button type="submit" className="bg-brand text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-corporate-800 transition-all flex items-center justify-center space-x-2 w-full md:w-auto">
                      <span>Send Message</span>
                      <Send size={18} />
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send size={40} />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                    <p className="text-gray-600 text-lg mb-8">
                      Thank you for reaching out to us. Our representative will get back to you within 24 business hours.
                    </p>
                    <button onClick={() => setIsSent(false)} className="text-brand font-bold">
                      Send another message
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-gray-200 relative">
        {/* Placeholder for Google Map Embed */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.114827116631!2d77.2065107!3d28.6290108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5d3476635b%3A0xd310d44839c9938e!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1715600000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="AVS Enterprise Location"
        ></iframe>
        <div className="absolute bottom-10 left-10 z-10 hidden md:block">
          <div className="bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 max-w-sm">
            <h4 className="font-bold text-gray-900 mb-2">Our Presence</h4>
            <p className="text-gray-600 text-sm">We operate across 20+ major cities in India, ensuring local support for all our clients.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
