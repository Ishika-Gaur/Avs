
import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { JOB_CATEGORIES } from '../constants';
import { CheckCircle2, Upload, Send } from 'lucide-react';

const Careers: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle 
                title="Build Your Career With AVS Enterprise" 
                subtitle="Join a dynamic team that values integrity, hard work, and professional growth."
              />
              <div className="space-y-8 mt-10">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start space-x-4">
                  <div className="bg-green-50 p-3 rounded-xl text-green-600">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Growth Opportunities</h4>
                    <p className="text-gray-600 text-sm">We provide regular training and clear paths for advancement within our organization.</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start space-x-4">
                  <div className="bg-blue-50 p-3 rounded-xl text-brand">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Supportive Environment</h4>
                    <p className="text-gray-600 text-sm">Work in a respectful culture where every contribution is recognized.</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start space-x-4">
                  <div className="bg-orange-50 p-3 rounded-xl text-orange-600">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Stability & Benefits</h4>
                    <p className="text-gray-600 text-sm">Reliable pay, comprehensive compliance, and worker welfare programs.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1000&auto=format&fit=crop" 
                alt="Working at AVS" 
                className="rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center space-x-4 border border-gray-100">
                <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center text-white font-bold">5k+</div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">Join Our Workforce</p>
                  <p className="text-gray-900 font-bold">Strong Community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle centered title="Current Job Categories" subtitle="Explore opportunities across our diverse service domains." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {JOB_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-brand/30 hover:shadow-xl transition-all h-full flex flex-col">
                <h4 className="font-bold text-xl text-gray-900 mb-4">{cat.title}</h4>
                <p className="text-gray-600 text-sm mb-6 flex-grow">{cat.description}</p>
                <button className="w-full py-2 text-brand font-bold border-b border-brand text-sm hover:text-corporate-800 transition-colors text-left">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900" id="apply-form">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="text-center mb-10">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Submit Your Application</h3>
                  <p className="text-gray-600">Tell us about yourself and we'll get back to you with the right opportunity.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                    <input required type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                    <input required type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                    <input required type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all" placeholder="+91 00000 00000" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Position Applied For</label>
                    <select required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all appearance-none">
                      <option value="">Select a category</option>
                      {JOB_CATEGORIES.map((c, i) => <option key={i} value={c.title}>{c.title}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Upload Resume (PDF/DOC)</label>
                  <div className="relative group">
                    <input required type="file" className="hidden" id="resume-upload" />
                    <label htmlFor="resume-upload" className="flex flex-col items-center justify-center w-full h-40 px-4 transition bg-gray-50 border-2 border-gray-300 border-dashed rounded-2xl cursor-pointer group-hover:bg-gray-100 group-hover:border-brand/40">
                      <Upload className="w-10 h-10 text-gray-400 group-hover:text-brand transition-colors mb-2" />
                      <span className="text-sm text-gray-500 group-hover:text-brand">Click to browse file</span>
                    </label>
                  </div>
                </div>

                <button type="submit" className="w-full bg-brand text-white py-4 rounded-xl font-bold text-lg hover:bg-corporate-800 transition-all flex items-center justify-center space-x-2">
                  <span>Send Application</span>
                  <Send size={20} />
                </button>
              </form>
            ) : (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Application Received!</h3>
                <p className="text-gray-600 text-lg mb-8">
                  Thank you for your interest in AVS Enterprise. Our recruitment team will review your profile and contact you shortly.
                </p>
                <button onClick={() => setSubmitted(false)} className="text-brand font-bold hover:underline">
                  Submit another application
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
