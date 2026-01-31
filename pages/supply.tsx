import React, { useState, useEffect } from 'react';
import { Sofa, ShoppingBag, PackageCheck, Truck, CheckCircle, Award, Clock, Shield } from 'lucide-react';

const AVSSupplyServices = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id^="animate-"]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Sofa className="w-12 h-12" />,
      title: "Office & Commercial Furniture",
      points: [
        "Ergonomic workstations, executive desks, and modular office seating",
        "Conference tables, reception counters, and collaborative workspaces",
        "Storage solutions including filing cabinets, shelving units, and lockers",
        "Customizable designs to match corporate branding and space requirements"
      ]
    },
    {
      icon: <PackageCheck className="w-12 h-12" />,
      title: "Institutional & Hospitality Furniture",
      points: [
        "Educational furniture: classroom desks, study tables, and library equipment",
        "Healthcare furnishings: patient beds, waiting area seating, and medical cabinets",
        "Hotel & restaurant furniture: dining sets, lounge chairs, and banquet tables",
        "Durable materials with compliance to safety and quality standards"
      ]
    },
    {
      icon: <ShoppingBag className="w-12 h-12" />,
      title: "Corporate & Industrial Garments",
      points: [
        "Professional uniforms for hospitality, healthcare, and service industries",
        "Industrial workwear: safety jackets, coveralls, and protective clothing",
        "Custom embroidery and branding with company logos and employee details",
        "Fabric options including cotton, polyester blends, and flame-retardant materials"
      ]
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Bulk Supply & Customization",
      points: [
        "Large-scale procurement for corporate offices, factories, and institutions",
        "Tailored solutions based on design specifications and budget requirements",
        "End-to-end service from consultation to delivery and installation",
        "After-sales support including maintenance, repairs, and replacements"
      ]
    }
  ];

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Premium Quality Materials",
      points: [
        "Sourced from certified manufacturers and trusted suppliers",
        "High-grade wood, metal, and upholstery for furniture durability",
        "Industrial-standard fabrics with color fastness and tear resistance",
        "Compliance with ISO standards and quality certifications"
      ]
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Custom Design & Manufacturing",
      points: [
        "In-house design team for bespoke furniture and garment solutions",
        "3D visualization and prototyping before final production",
        "Flexible modification to meet specific client needs and aesthetics",
        "Brand integration with logos, colors, and corporate identity elements"
      ]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Timely Delivery & Installation",
      points: [
        "Efficient logistics network ensuring on-time delivery across India",
        "Professional installation teams for furniture assembly and setup",
        "Coordinated bulk deliveries for large-scale projects and campuses",
        "Minimal disruption to daily operations during installation"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Competitive Pricing & Warranty",
      points: [
        "Cost-effective solutions without compromising on quality",
        "Transparent pricing with detailed quotations and no hidden charges",
        "Warranty coverage on furniture and manufacturing defects",
        "Flexible payment terms and bulk discount options"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Work+Sans:wght@300;400;500;600&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Work Sans', sans-serif;
        }

        .font-display {
          font-family: 'Syne', sans-serif;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            scale: 0.95;
          }
          to {
            opacity: 1;
            scale: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.15;
            transform: scale(1);
          }
          50% {
            opacity: 0.25;
            transform: scale(1.1);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .animate-slide-down {
          animation: slideDown 0.6s ease-out;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out;
        }

        .animate-slide-right {
          animation: slideRight 0.6s ease-out;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse 4s ease-in-out infinite;
        }

        .gradient-text {
          background: linear-gradient(135deg, #059669 0%, #10b981 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .service-card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(5, 150, 105, 0.15);
        }

        .service-card-hover::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(to right, #059669, #10b981);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .service-card-hover:hover::before {
          transform: scaleX(1);
        }

        .feature-card-hover {
          transition: all 0.3s ease;
        }

        .feature-card-hover:hover {
          transform: translateX(10px);
          box-shadow: 0 4px 25px rgba(5, 150, 105, 0.12);
        }

        .grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 100px 100px;
        }

        .hero-gradient {
          background: linear-gradient(135deg, #059669 0%, #047857 100%);
        }

        .cta-gradient {
          background: linear-gradient(135deg, #1e293b 0%, #059669 100%);
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-[75vh] hero-gradient overflow-hidden">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-900/30"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="text-white/80 text-sm font-medium tracking-wide animate-slide-down">
                HOME <span className="text-amber-400 mx-2">▸</span> Supply Services
              </div>

              <h1 className="font-display text-5xl lg:text-6xl xl:text-3xl font-bold text-white leading-tight animate-slide-up">
                Furniture & Garments Supply
              </h1>

              <h2 className="font-display text-2xl lg:text-3xl font-semibold text-amber-400 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                Premium Quality Products for Corporate, Industrial & Institutional Needs
              </h2>

              <p className="text-lg text-white/90 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
                At AVS Enterprise, we specialize in supplying high-quality furniture and garments tailored to meet the diverse requirements of businesses, institutions, and industrial sectors. From ergonomic office furniture to durable workwear, we provide end-to-end solutions with a focus on quality, customization, and timely delivery.
              </p>
            </div>

            {/* Right Image */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-amber-400 rounded-3xl opacity-15 animate-float"></div>
              <img 
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop"
                alt="Modern office furniture and professional garments"
                className="relative rounded-2xl shadow-2xl border-4 border-white/10 w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16" id="animate-services">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Our Supply Solutions Include:
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                id={`animate-service-${index}`}
                className="relative bg-white rounded-2xl p-8 shadow-lg service-card-hover overflow-hidden"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="text-emerald-600 mb-6 transform transition-transform duration-300 hover:scale-110 inline-block">
                  {service.icon}
                </div>

                <h3 className="font-display text-2xl font-bold text-slate-900 mb-6">
                  {service.title}
                </h3>

                <ul className="space-y-3">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start text-slate-600">
                      <span className="text-emerald-600 font-bold mr-3 mt-1">▸</span>
                      <span className="text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4/5 h-px bg-gradient-to-r from-transparent via-emerald-600 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16" id="animate-features">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate-900">
              Why Choose AVS Enterprise
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                id={`animate-feature-${index}`}
                className="border-l-4 border-amber-400 pl-6 pr-6 py-6 bg-gradient-to-br from-slate-50 to-white rounded-xl shadow-md feature-card-hover"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-emerald-700">
                    {feature.icon}
                  </div>
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-slate-900">
                    {feature.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-start text-slate-600">
                      <span className="text-emerald-700 font-bold mr-3 mt-1">●</span>
                      <span className="text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Product Categories
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We supply a comprehensive range of furniture and garments to meet diverse industry requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Furniture Categories */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Sofa className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Office Furniture</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Executive & Workstation Desks</li>
                <li>• Ergonomic Office Chairs</li>
                <li>• Conference & Meeting Tables</li>
                <li>• Filing Cabinets & Storage</li>
                <li>• Reception & Lounge Seating</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <PackageCheck className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Institutional Furniture</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Classroom Desks & Benches</li>
                <li>• Library Shelving & Tables</li>
                <li>• Healthcare Furniture</li>
                <li>• Hostel & Dormitory Furnishings</li>
                <li>• Cafeteria & Dining Sets</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <ShoppingBag className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Corporate Garments</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Corporate Uniforms</li>
                <li>• Hotel & Hospitality Wear</li>
                <li>• Healthcare Scrubs & Coats</li>
                <li>• Security Guard Uniforms</li>
                <li>• Retail & Service Apparel</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Industrial Workwear</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Safety Jackets & Coveralls</li>
                <li>• High-Visibility Clothing</li>
                <li>• Flame-Retardant Garments</li>
                <li>• Factory Worker Uniforms</li>
                <li>• Protective Aprons & Gloves</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Sofa className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Hospitality Furniture</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Hotel Room Furnishings</li>
                <li>• Restaurant Seating</li>
                <li>• Banquet Chairs & Tables</li>
                <li>• Outdoor Patio Furniture</li>
                <li>• Bar Stools & Counters</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <PackageCheck className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Custom Solutions</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Bespoke Furniture Designs</li>
                <li>• Branded Garment Production</li>
                <li>• Logo Embroidery & Printing</li>
                <li>• Bulk Customization Services</li>
                <li>• Prototype Development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 cta-gradient overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-15 animate-pulse-glow"
             style={{ background: 'radial-gradient(circle, rgba(251, 191, 36, 0.15) 0%, transparent 70%)' }}>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Upgrade Your Space?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Partner with AVS Enterprise for premium furniture and garments that combine quality, durability, and style for your business needs.
          </p>
          <button className="px-10 py-4 bg-amber-400 hover:bg-amber-300 text-slate-900 font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Request a Quote
          </button>
        </div>
      </section>

      {/* Footer
      <footer className="bg-slate-900 text-white/70 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="font-display text-3xl font-bold text-white mb-3">
            AVS ENTERPRISE
          </div>
          <div className="text-amber-400 mb-8">
            Your Trusted Partner for Quality Furniture & Garments Supply
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>
          <p className="text-sm">
            &copy; 2026 AVS Enterprise. All rights reserved. | Excellence in Supply Solutions
          </p>
        </div>
      </footer> */}
    </div>
  );
};

export default AVSSupplyServices;