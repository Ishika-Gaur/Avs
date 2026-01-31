import React, { useState, useEffect } from 'react';
import { Server, Network, Cloud, Shield, Zap, HardDrive, Monitor, Lock } from 'lucide-react';

const ITInfrastructure = () => {
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
      icon: <Server className="w-12 h-12" />,
      title: "Network Infrastructure & Design",
      points: [
        "Enterprise network architecture planning and implementation",
        "LAN/WAN setup with high-speed connectivity solutions",
        "Structured cabling (Cat6, Cat6a, fiber optics) for data centers",
        "Network optimization and performance monitoring"
      ]
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Cloud & Data Center Solutions",
      points: [
        "Cloud migration services (AWS, Azure, Google Cloud)",
        "Hybrid and multi-cloud infrastructure management",
        "Data center setup with redundancy and disaster recovery",
        "Virtual server deployment and containerization (Docker, Kubernetes)"
      ]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Cybersecurity & Compliance",
      points: [
        "Firewall configuration, intrusion detection, and prevention systems",
        "End-to-end encryption and secure VPN setup",
        "Regular security audits and vulnerability assessments",
        "Compliance with ISO 27001, GDPR, and industry standards"
      ]
    },
    {
      icon: <Monitor className="w-12 h-12" />,
      title: "IT Support & Maintenance",
      points: [
        "24/7 helpdesk support for hardware and software issues",
        "Proactive system monitoring and incident management",
        "Hardware procurement, installation, and asset management",
        "Regular software updates, patches, and system optimization"
      ]
    }
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Scalable & Future-Ready Solutions",
      points: [
        "Infrastructure designed to grow with your business needs",
        "Latest technologies including 5G, IoT, and edge computing",
        "Seamless integration with existing systems and workflows",
        "Modular architecture for easy upgrades and expansion"
      ]
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Enterprise-Grade Security",
      points: [
        "Multi-layered security approach with zero-trust architecture",
        "Advanced threat detection and real-time incident response",
        "Regular penetration testing and security training",
        "Encrypted data storage and secure backup solutions"
      ]
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: "High Availability & Reliability",
      points: [
        "99.9% uptime guarantee with redundant systems",
        "Automated failover and load balancing mechanisms",
        "Comprehensive disaster recovery and business continuity planning",
        "Regular system health checks and preventive maintenance"
      ]
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Expert Technical Team",
      points: [
        "Certified professionals (CCNA, CCNP, AWS, Azure, CompTIA)",
        "Extensive experience across diverse industry verticals",
        "Dedicated project managers for seamless implementation",
        "Ongoing training and knowledge transfer programs"
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
          background: linear-gradient(135deg, #1a5490 0%, #0891b2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .service-card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(26, 84, 144, 0.15);
        }

        .service-card-hover::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(to right, #1a5490, #0891b2);
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
          box-shadow: 0 4px 25px rgba(26, 84, 144, 0.12);
        }

        .grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 100px 100px;
        }

        .hero-gradient {
          background: linear-gradient(135deg, #1a5490 0%, #0f3460 100%);
        }

        .cta-gradient {
          background: linear-gradient(135deg, #1e293b 0%, #1a5490 100%);
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-[75vh] hero-gradient overflow-hidden">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/30"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="text-white/80 text-sm font-medium tracking-wide animate-slide-down">
                HOME <span className="text-amber-500 mx-2">▸</span> IT Infrastructure Services
              </div>

              <h1 className="font-display text-5xl lg:text-6xl xl:text-3xl font-bold text-white leading-tight animate-slide-up">
                IT Infrastructure Services
              </h1>

              <h2 className="font-display text-2xl lg:text-3xl font-semibold text-amber-500 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                Robust, Secure & Scalable Technology Solutions for Modern Enterprises
              </h2>

              <p className="text-lg text-white/90 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
                At AVS Enterprise, we deliver comprehensive IT infrastructure solutions designed to power your digital transformation. From network architecture to cloud deployment, our expert team ensures seamless integration, maximum uptime, and enterprise-grade security across all your technology assets.
              </p>
            </div>

            {/* Right Image */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-amber-500 rounded-3xl opacity-15 animate-float"></div>
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop"
                alt="Modern data center infrastructure"
                className="relative rounded-2xl shadow-2xl border-4 border-white/10 w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16" id="animate-services">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Our IT Infrastructure Solutions Include:
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
                <div className="text-amber-500 mb-6 transform transition-transform duration-300 hover:scale-110 inline-block">
                  {service.icon}
                </div>

                <h3 className="font-display text-2xl font-bold text-slate-900 mb-6">
                  {service.title}
                </h3>

                <ul className="space-y-3">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start text-slate-600">
                      <span className="text-amber-500 font-bold mr-3 mt-1">▸</span>
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
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4/5 h-px bg-gradient-to-r from-transparent via-cyan-600 to-transparent"></div>

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
                className="border-l-4 border-amber-500 pl-6 pr-6 py-6 bg-gradient-to-br from-slate-50 to-white rounded-xl shadow-md feature-card-hover"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-blue-900">
                    {feature.icon}
                  </div>
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-slate-900">
                    {feature.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-start text-slate-600">
                      <span className="text-blue-900 font-bold mr-3 mt-1">●</span>
                      <span className="text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 cta-gradient overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-15 animate-pulse-glow"
             style={{ background: 'radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, transparent 70%)' }}>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Partner with AVS Enterprise for cutting-edge IT infrastructure solutions that drive innovation, efficiency, and business growth.
          </p>
          <button className="px-10 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Get In Touch Today
          </button>
        </div>
      </section>

      {/* Footer
      <footer className="bg-slate-900 text-white/70 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="font-display text-3xl font-bold text-white mb-3">
            AVS ENTERPRISE
          </div>
          <div className="text-amber-500 mb-8">
            Powering Business Growth with Advanced IT Infrastructure
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>
          <p className="text-sm">
            &copy; 2026 AVS Enterprise. All rights reserved. | Your Trusted Technology Partner
          </p>
        </div>
      </footer> */}
    </div>
  );
};

export default ITInfrastructure;