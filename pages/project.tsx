import React, { useState, useEffect } from 'react';
import { Clipboard, Calendar, Users, BarChart2, CheckSquare, Target, Clock, TrendingUp } from 'lucide-react';

const ProjectManagement = () => {
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
      icon: <Clipboard className="w-12 h-12" />,
      title: "Project Planning & Strategy",
      points: [
        "Comprehensive project scope definition and requirements gathering",
        "Detailed work breakdown structure (WBS) and task planning",
        "Resource allocation and budget estimation with contingency planning",
        "Risk identification, assessment, and mitigation strategies"
      ]
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Team Leadership & Coordination",
      points: [
        "Cross-functional team management and stakeholder engagement",
        "Clear communication channels and reporting structures",
        "Conflict resolution and team motivation strategies",
        "Vendor and contractor coordination for seamless collaboration"
      ]
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      title: "Execution & Monitoring",
      points: [
        "Agile, Waterfall, and Hybrid project methodology implementation",
        "Real-time progress tracking with KPIs and performance metrics",
        "Quality assurance and compliance monitoring throughout project lifecycle",
        "Issue management and proactive problem-solving"
      ]
    },
    {
      icon: <BarChart2 className="w-12 h-12" />,
      title: "Reporting & Closure",
      points: [
        "Regular status reports and executive dashboards",
        "Milestone-based deliverables and client sign-offs",
        "Post-project reviews and lessons learned documentation",
        "Knowledge transfer and operational handover support"
      ]
    }
  ];

  const features = [
    {
      icon: <CheckSquare className="w-8 h-8" />,
      title: "Certified Project Professionals",
      points: [
        "PMP, PRINCE2, and Agile-certified project managers",
        "Extensive experience across IT, construction, manufacturing, and services",
        "Proven track record delivering projects on-time and within budget",
        "Industry best practices and standardized frameworks"
      ]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Goal-Oriented Approach",
      points: [
        "Clear project objectives aligned with business goals",
        "SMART milestones with measurable success criteria",
        "Continuous alignment with stakeholder expectations",
        "Focus on delivering business value, not just completing tasks"
      ]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "On-Time, On-Budget Delivery",
      points: [
        "95%+ project completion rate within agreed timelines",
        "Robust cost control and budget tracking mechanisms",
        "Early warning systems for potential delays or overruns",
        "Flexible resource management to handle changing priorities"
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Advanced Project Tools & Technology",
      points: [
        "Project management software: Jira, MS Project, Asana, Monday.com",
        "Collaboration platforms: Slack, Teams, Confluence",
        "Real-time dashboards and automated reporting",
        "Cloud-based document management and version control"
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
          font-family: sans-serif;
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
                HOME <span className="text-amber-500 mx-2">▸</span> Project Management Services
              </div>

              <h1 className="font-display text-5xl lg:text-6xl xl:text-3xl font-bold text-white leading-tight animate-slide-up">
                Project Management Services
              </h1>

              <h2 className="font-display text-2xl lg:text-3xl font-semibold text-amber-500 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                Professional Project Execution for On-Time, On-Budget Success
              </h2>

              <p className="text-lg text-white/90 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
                At AVS Enterprise, we deliver comprehensive project management services that turn complex initiatives into successful outcomes. Our certified project managers bring proven methodologies, cutting-edge tools, and hands-on leadership to ensure your projects are delivered with precision, quality, and maximum business value.
              </p>
            </div>

            {/* Right Image */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-amber-500 rounded-3xl opacity-15 animate-float"></div>
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
                alt="Project management team planning"
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
              Our Project Management Solutions Include:
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
            Ready to Bring Your Project to Life?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Partner with AVS Enterprise for professional project management that delivers results, exceeds expectations, and drives your business forward.
          </p>
          <button className="px-10 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Get In Touch Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white/70 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="font-display text-3xl font-bold text-white mb-3">
            AVS ENTERPRISE
          </div>
          <div className="text-amber-500 mb-8">
            Delivering Projects with Precision and Excellence
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>
          {/* <p className="text-sm">
            &copy; 2026 AVS Enterprise. All rights reserved. | Your Trusted Project Management Partner
          </p> */}
        </div>
      </footer>
    </div>
  );
};

export default ProjectManagement;