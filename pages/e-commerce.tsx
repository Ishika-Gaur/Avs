import React, { useState, useEffect } from 'react';
import { ShoppingCart, Package, Headphones, TrendingUp, CheckCircle, Award, Clock, Shield } from 'lucide-react';

const AVSEcommerce = () => {
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
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "Online Retail & B2B Marketplace",
      points: [
        "Multi-vendor e-commerce platform for corporate and bulk purchases",
        "Dedicated portals for office supplies, industrial equipment, and consumables",
        "Customizable catalogues with client-specific pricing and product visibility",
        "Seamless ordering, invoicing, and payment gateway integration"
      ]
    },
    {
      icon: <Package className="w-12 h-12" />,
      title: "Order Fulfillment & Logistics",
      points: [
        "End-to-end order processing from placement to delivery",
        "Warehousing, inventory management, and stock replenishment",
        "Real-time tracking and delivery updates for customers",
        "Partnerships with leading courier services for pan-India reach"
      ]
    },
    {
      icon: <Headphones className="w-12 h-12" />,
      title: "Customer Support & Account Management",
      points: [
        "Dedicated customer service teams for query resolution",
        "Multi-channel support via phone, email, chat, and WhatsApp",
        "Account managers for corporate clients and bulk buyers",
        "Returns, refunds, and replacement handling with quick turnaround"
      ]
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Digital Marketing & Brand Promotion",
      points: [
        "SEO optimization and paid advertising for product visibility",
        "Social media campaigns and influencer collaborations",
        "Email marketing, promotional offers, and loyalty programs",
        "Analytics and insights for data-driven sales strategies"
      ]
    }
  ];

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Wide Product Range & Sourcing",
      points: [
        "Extensive catalogue covering office supplies, electronics, furniture, and industrial goods",
        "Direct partnerships with manufacturers and authorized distributors",
        "Competitive pricing with bulk discount options",
        "Quality assurance and authenticity verification for all products"
      ]
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "User-Friendly Platform & Technology",
      points: [
        "Intuitive web and mobile interfaces for easy browsing and purchasing",
        "Advanced search, filters, and product comparison features",
        "Secure payment gateways with multiple payment options",
        "Cloud-based infrastructure ensuring high uptime and scalability"
      ]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fast & Reliable Delivery",
      points: [
        "Express delivery options for urgent requirements",
        "Standard, premium, and scheduled delivery time slots",
        "Strategic warehouse locations for faster regional dispatch",
        "Live tracking and SMS/email notifications for order updates"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Transactions & Data Privacy",
      points: [
        "SSL encryption and PCI-DSS compliance for secure payments",
        "Robust data protection policies adhering to privacy regulations",
        "Regular security audits and vulnerability assessments",
        "Transparent terms of service and buyer protection policies"
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
          background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .service-card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(124, 58, 237, 0.15);
        }

        .service-card-hover::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(to right, #7c3aed, #a855f7);
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
          box-shadow: 0 4px 25px rgba(124, 58, 237, 0.12);
        }

        .grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 100px 100px;
        }

        .hero-gradient {
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
        }

        .cta-gradient {
          background: linear-gradient(135deg, #1e293b 0%, #7c3aed 100%);
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-[75vh] hero-gradient overflow-hidden">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/30"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="text-white/80 text-sm font-medium tracking-wide animate-slide-down">
                HOME <span className="text-pink-400 mx-2">▸</span> E-Commerce Services
              </div>

              <h1 className="font-display text-5xl lg:text-6xl xl:text-3xl font-bold text-white leading-tight animate-slide-up">
                E-Commerce Services
              </h1>

              <h2 className="font-display text-2xl lg:text-3xl font-semibold text-pink-400 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                Complete Digital Commerce Solutions for B2B & Retail Operations
              </h2>

              <p className="text-lg text-white/90 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
                At AVS Enterprise, we provide end-to-end e-commerce solutions designed to help businesses establish, manage, and grow their online presence. From platform development and product management to order fulfillment and customer support, we offer comprehensive services that drive sales and enhance customer satisfaction.
              </p>
            </div>

            {/* Right Image */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-pink-400 rounded-3xl opacity-15 animate-float"></div>
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
                alt="E-commerce and online shopping platform"
                className="relative rounded-2xl shadow-2xl border-4 border-white/10 w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16" id="animate-services">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Our E-Commerce Solutions Include:
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
                <div className="text-purple-600 mb-6 transform transition-transform duration-300 hover:scale-110 inline-block">
                  {service.icon}
                </div>

                <h3 className="font-display text-2xl font-bold text-slate-900 mb-6">
                  {service.title}
                </h3>

                <ul className="space-y-3">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start text-slate-600">
                      <span className="text-purple-600 font-bold mr-3 mt-1">▸</span>
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
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4/5 h-px bg-gradient-to-r from-transparent via-purple-600 to-transparent"></div>

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
                className="border-l-4 border-pink-400 pl-6 pr-6 py-6 bg-gradient-to-br from-slate-50 to-white rounded-xl shadow-md feature-card-hover"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-purple-700">
                    {feature.icon}
                  </div>
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-slate-900">
                    {feature.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-start text-slate-600">
                      <span className="text-purple-700 font-bold mr-3 mt-1">●</span>
                      <span className="text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Platform Features & Capabilities
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Advanced e-commerce features designed for seamless online business operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <ShoppingCart className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Shopping Experience</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Smart Product Recommendations</li>
                <li>• Advanced Search & Filters</li>
                <li>• Wishlist & Favorites</li>
                <li>• One-Click Reordering</li>
                <li>• Guest Checkout Option</li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Inventory Management</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Real-Time Stock Updates</li>
                <li>• Automated Reordering</li>
                <li>• Multi-Warehouse Support</li>
                <li>• SKU & Barcode Tracking</li>
                <li>• Low Stock Alerts</li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Analytics & Reporting</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Sales Performance Dashboard</li>
                <li>• Customer Behavior Insights</li>
                <li>• Product Performance Metrics</li>
                <li>• Revenue & Profit Analysis</li>
                <li>• Custom Report Generation</li>
              </ul>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Payment Solutions</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Multiple Payment Gateways</li>
                <li>• Credit/Debit Card Processing</li>
                <li>• UPI & Digital Wallets</li>
                <li>• Net Banking & EMI Options</li>
                <li>• International Payments</li>
              </ul>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Headphones className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Customer Management</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Customer Profile Management</li>
                <li>• Order History & Tracking</li>
                <li>• Loyalty & Rewards Program</li>
                <li>• Review & Rating System</li>
                <li>• Email & SMS Notifications</li>
              </ul>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Marketing Tools</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Discount & Coupon Codes</li>
                <li>• Flash Sales & Promotions</li>
                <li>• Email Campaign Integration</li>
                <li>• Social Media Connectivity</li>
                <li>• Affiliate Program Support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Product Categories We Handle
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive e-commerce solutions across diverse product segments
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="font-display text-lg font-bold text-slate-900 mb-2">Office Supplies</div>
              <p className="text-sm text-slate-600">Stationery & Equipment</p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="font-display text-lg font-bold text-slate-900 mb-2">Electronics</div>
              <p className="text-sm text-slate-600">Gadgets & Accessories</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="font-display text-lg font-bold text-slate-900 mb-2">Furniture</div>
              <p className="text-sm text-slate-600">Office & Home</p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="font-display text-lg font-bold text-slate-900 mb-2">Industrial Goods</div>
              <p className="text-sm text-slate-600">Tools & Machinery</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="font-display text-lg font-bold text-slate-900 mb-2">Safety Equipment</div>
              <p className="text-sm text-slate-600">PPE & Workwear</p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="font-display text-lg font-bold text-slate-900 mb-2">IT Products</div>
              <p className="text-sm text-slate-600">Computers & Software</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="font-display text-lg font-bold text-slate-900 mb-2">Packaging</div>
              <p className="text-sm text-slate-600">Materials & Supplies</p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="font-display text-lg font-bold text-slate-900 mb-2">Custom Products</div>
              <p className="text-sm text-slate-600">Tailored Solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 cta-gradient overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-15 animate-pulse-glow"
             style={{ background: 'radial-gradient(circle, rgba(244, 114, 182, 0.15) 0%, transparent 70%)' }}>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Launch Your Online Store?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Partner with AVS Enterprise for powerful e-commerce solutions that drive growth, enhance customer experience, and maximize your online revenue.
          </p>
          <button className="px-10 py-4 bg-pink-400 hover:bg-pink-300 text-slate-900 font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Start Your E-Commerce Journey
          </button>
        </div>
      </section>

      {/* Footer
      <footer className="bg-slate-900 text-white/70 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="font-display text-3xl font-bold text-white mb-3">
            AVS ENTERPRISE
          </div>
          <div className="text-pink-400 mb-8">
            Your Digital Commerce Partner for Success
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>
          <p className="text-sm">
            &copy; 2026 AVS Enterprise. All rights reserved. | Empowering Online Business Excellence
          </p>
        </div>
      </footer> */}
    </div>
  );
};

export default AVSEcommerce;