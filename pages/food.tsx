import React, { useState, useEffect } from 'react';
import { UtensilsCrossed, Coffee, Salad, ChefHat, CheckCircle, Award, Clock, Shield } from 'lucide-react';

const AVSFoodSupply = () => {
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
      icon: <UtensilsCrossed className="w-12 h-12" />,
      title: "Corporate & Industrial Catering",
      points: [
        "Daily meal services for office employees, factory workers, and staff canteens",
        "Nutritionally balanced menus with vegetarian and non-vegetarian options",
        "Breakfast, lunch, dinner, and snack services tailored to shift timings",
        "Scalable solutions for 50 to 5000+ employees across multiple locations"
      ]
    },
    {
      icon: <ChefHat className="w-12 h-12" />,
      title: "Institutional Food Services",
      points: [
        "Catering for schools, colleges, hospitals, and hostels",
        "Age-appropriate and dietary-compliant meal planning",
        "Special menus for patients, students, and residential communities",
        "Continuous service with dedicated kitchen staff and supervisors"
      ]
    },
    {
      icon: <Coffee className="w-12 h-12" />,
      title: "Event & Bulk Catering",
      points: [
        "Large-scale catering for conferences, seminars, training programs, and corporate events",
        "Buffet, plated meals, and live cooking stations",
        "Customizable menus for breakfast meetings, gala dinners, and celebrations",
        "Professional service staff, setup, and post-event cleanup"
      ]
    },
    {
      icon: <Salad className="w-12 h-12" />,
      title: "Canteen Management & Operations",
      points: [
        "End-to-end cafeteria and canteen management services",
        "Menu planning, procurement, cooking, and service operations",
        "Hygienic kitchen setup with modern equipment and trained chefs",
        "Subsidy management and cashless payment integration"
      ]
    }
  ];

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "FSSAI Certified & Hygienic Practices",
      points: [
        "Full compliance with Food Safety and Standards Authority of India (FSSAI) regulations",
        "Regular health inspections and quality audits",
        "Trained kitchen staff with food handling certifications",
        "Strict adherence to hygiene protocols in procurement, storage, and cooking"
      ]
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Fresh Ingredients & Quality Sourcing",
      points: [
        "Daily procurement of fresh vegetables, grains, dairy, and proteins",
        "Partnerships with verified suppliers and local markets",
        "Chemical-free produce and premium-grade ingredients",
        "Regular quality checks and storage in temperature-controlled environments"
      ]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Customizable Menus & Dietary Options",
      points: [
        "Weekly/monthly rotating menus to ensure variety and nutrition",
        "Special dietary accommodations: Jain, vegan, gluten-free, low-carb, diabetic-friendly",
        "Regional cuisine options including North Indian, South Indian, Continental, and Chinese",
        "Feedback-driven menu improvements and seasonal specialties"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Professional Staff & Service Excellence",
      points: [
        "Experienced chefs, cooks, and service staff with hospitality training",
        "Dedicated supervisors for quality control and operations management",
        "Timely meal preparation and service aligned with client schedules",
        "24/7 support for multi-shift operations and emergency requirements"
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
          font-family:  sans-serif;
        }

        .font-display {
          font-family:  sans-serif;
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
          background: linear-gradient(135deg, #dc2626 0%, #f97316 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .service-card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(220, 38, 38, 0.15);
        }

        .service-card-hover::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(to right, #dc2626, #f97316);
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
          box-shadow: 0 4px 25px rgba(220, 38, 38, 0.12);
        }

        .grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 100px 100px;
        }

        .hero-gradient {
          background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
        }

        .cta-gradient {
          background: linear-gradient(135deg, #1e293b 0%, #dc2626 100%);
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-[75vh] hero-gradient overflow-hidden">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-900/30"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="text-white/80 text-sm font-medium tracking-wide animate-slide-down">
                HOME <span className="text-orange-400 mx-2">▸</span> Food Supply Services
              </div>

              <h1 className="font-display text-5xl lg:text-6xl xl:text-3xl font-bold text-white leading-tight animate-slide-up">
                Food Supply Services
              </h1>

              <h2 className="font-display text-2xl lg:text-3xl font-semibold text-orange-400 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                Hygienic, Nutritious Catering Solutions for Corporates, Institutions & Events
              </h2>

              <p className="text-lg text-white/90 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
                At AVS Enterprise, we provide comprehensive food supply and catering services designed to meet the diverse needs of businesses, educational institutions, healthcare facilities, and industrial operations. With a focus on hygiene, nutrition, and taste, we deliver freshly prepared meals that keep your workforce energized and satisfied.
              </p>
            </div>

            {/* Right Image */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-orange-400 rounded-3xl opacity-15 animate-float"></div>
              <img 
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop"
                alt="Professional catering and food service"
                className="relative rounded-2xl shadow-2xl border-4 border-white/10 w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16" id="animate-services">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Our Food Supply Solutions Include:
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
                <div className="text-red-600 mb-6 transform transition-transform duration-300 hover:scale-110 inline-block">
                  {service.icon}
                </div>

                <h3 className="font-display text-2xl font-bold text-slate-900 mb-6">
                  {service.title}
                </h3>

                <ul className="space-y-3">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start text-slate-600">
                      <span className="text-red-600 font-bold mr-3 mt-1">▸</span>
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
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4/5 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>

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
                className="border-l-4 border-orange-400 pl-6 pr-6 py-6 bg-gradient-to-br from-slate-50 to-white rounded-xl shadow-md feature-card-hover"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-red-700">
                    {feature.icon}
                  </div>
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-slate-900">
                    {feature.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-start text-slate-600">
                      <span className="text-red-700 font-bold mr-3 mt-1">●</span>
                      <span className="text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Highlights Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-red-50/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Our Service Highlights
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive food service solutions designed for excellence and reliability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Highlight 1 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <UtensilsCrossed className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Meal Services</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Breakfast, Lunch & Dinner</li>
                <li>• Mid-Shift Snacks & Refreshments</li>
                <li>• Packed Meals & Tiffin Service</li>
                <li>• Special Occasion Menus</li>
                <li>• Festival & Celebration Catering</li>
              </ul>
            </div>

            {/* Service Highlight 2 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <ChefHat className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Kitchen Infrastructure</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Modern Kitchen Setup & Equipment</li>
                <li>• Commercial-Grade Appliances</li>
                <li>• Hygienic Food Prep Areas</li>
                <li>• Cold Storage Facilities</li>
                <li>• Regular Maintenance & Cleaning</li>
              </ul>
            </div>

            {/* Service Highlight 3 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Salad className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Menu Variety</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• North & South Indian Cuisine</li>
                <li>• Continental & Chinese Options</li>
                <li>• Vegetarian & Non-Vegetarian</li>
                <li>• Regional Specialty Dishes</li>
                <li>• Healthy & Diet-Conscious Meals</li>
              </ul>
            </div>

            {/* Service Highlight 4 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Food Safety</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• FSSAI Licensed Operations</li>
                <li>• Regular Health & Safety Audits</li>
                <li>• Staff Medical Certifications</li>
                <li>• Temperature-Controlled Storage</li>
                <li>• Traceability & Quality Control</li>
              </ul>
            </div>

            {/* Service Highlight 5 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Coffee className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Beverage Services</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Tea & Coffee Stations</li>
                <li>• Fresh Juice & Smoothies</li>
                <li>• Flavored Milk & Shakes</li>
                <li>• Seasonal Refreshments</li>
                <li>• Hydration & Water Supply</li>
              </ul>
            </div>

            {/* Service Highlight 6 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Professional Team</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Experienced Head Chefs</li>
                <li>• Trained Cooking Staff</li>
                <li>• Service & Serving Personnel</li>
                <li>• Kitchen Helpers & Cleaners</li>
                <li>• On-Site Supervisors</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Industries We Serve
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Trusted food supply partner across diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="font-display text-xl font-bold text-slate-900 mb-2">Manufacturing</div>
              <p className="text-sm text-slate-600">Factory & Plant Canteens</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="font-display text-xl font-bold text-slate-900 mb-2">Corporate</div>
              <p className="text-sm text-slate-600">Office Cafeterias</p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="font-display text-xl font-bold text-slate-900 mb-2">Education</div>
              <p className="text-sm text-slate-600">Schools & Colleges</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="font-display text-xl font-bold text-slate-900 mb-2">Healthcare</div>
              <p className="text-sm text-slate-600">Hospitals & Clinics</p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="font-display text-xl font-bold text-slate-900 mb-2">Hospitality</div>
              <p className="text-sm text-slate-600">Hotels & Resorts</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="font-display text-xl font-bold text-slate-900 mb-2">Construction</div>
              <p className="text-sm text-slate-600">Site Mess Services</p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="font-display text-xl font-bold text-slate-900 mb-2">IT/ITES</div>
              <p className="text-sm text-slate-600">Tech Parks & Campuses</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="font-display text-xl font-bold text-slate-900 mb-2">Government</div>
              <p className="text-sm text-slate-600">Public Sector Units</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 cta-gradient overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-15 animate-pulse-glow"
             style={{ background: 'radial-gradient(circle, rgba(251, 146, 60, 0.15) 0%, transparent 70%)' }}>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Elevate Your Food Services?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Partner with AVS Enterprise for hygienic, delicious, and reliable food supply solutions that keep your team satisfied and productive.
          </p>
          <button className="px-10 py-4 bg-orange-400 hover:bg-orange-300 text-slate-900 font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Schedule a Tasting Session
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white/70 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="font-display text-3xl font-bold text-white mb-3">
            AVS ENTERPRISE
          </div>
          <div className="text-orange-400 mb-8">
            Serving Excellence, One Meal at a Time
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>
          {/* <p className="text-sm">
            &copy; 2026 AVS Enterprise. All rights reserved. | Your Trusted Food Service Partner
          </p> */}
        </div>
      </footer>
    </div>
  );
};

export default AVSFoodSupply;