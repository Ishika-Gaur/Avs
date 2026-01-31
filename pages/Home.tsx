import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import {
  ShieldCheck,
  Users2,
  Building2,
  Factory,
  Monitor,
  ShoppingBag,
  Sparkles,
  Target,
  Eye,
  Award,
} from 'lucide-react';

// Type definitions
interface IndustryItem {
  name: string;
  icon: React.ReactNode;
}

interface AboutFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Slide {
  id: number;
  image: string;
  alt: string;
}

interface Statistic {
  value: string;
  label: string;
  image: string;
}

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  fullDescription: string;
  route: string; // Added route property
}

// Hero Carousel Component
const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2000&auto=format&fit=crop',
      alt: 'Professional team meeting',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2000&auto=format&fit=crop',
      alt: 'Office workers collaboration',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop',
      alt: 'Skilled workforce',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000&auto=format&fit=crop',
      alt: 'Business professionals',
    },
  ];

  const statistics: Statistic[] = [
    {
      value: '19+',
      label: 'Year of Operation',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop',
    },
    {
      value: '21,000+',
      label: 'Count of Employee',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    },
    {
      value: '300+',
      label: 'Count of Client',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
    },
    {
      value: '50+',
      label: 'Count of Cities',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=800&auto=format&fit=crop',
    },
    {
      value: '276 CR+',
      label: 'Annual Turn-Over',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    },
  ];


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Reliable Security and Facility
            <br />
            <span className="text-blue-400">Solutions for Every Need</span>
          </h1>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-blue-900 via-blue-900 to-blue-900/95 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="hidden md:flex md:gap-6 md:overflow-x-auto md:pb-2 scrollbar-hide">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="relative h-48">
                  <img
                    src={stat.image}
                    alt={stat.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-4xl font-bold mb-1">{stat.value}</p>
                    <p className="text-sm font-medium text-gray-200">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 md:hidden">
            {statistics.slice(0, 4).map((stat, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-32">
                  <img src={stat.image} alt={stat.label} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-2xl font-bold mb-0.5">{stat.value}</p>
                    <p className="text-xs font-medium text-gray-200">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/75'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 1s ease-out; }
      `}</style>
    </section>
  );
};

const Home: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  // Services data with hover descriptions and routes
  const services: Service[] = [
    {
      id: 1,
      title: 'Manpower Outsourcing',
      description: 'Skilled workforce solutions for all industries',
      icon: '👥',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop',
      fullDescription: 'End-to-end manpower outsourcing with trained, verified, and dedicated staff for security, maintenance, and operations',
      route: '/manpower',
    },
    {
      id: 2,
      title: 'Supply (Furniture & Garments)',
      description: 'Quality furniture and garment supply solutions',
      icon: '🪑',
      image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=800&auto=format&fit=crop',
      fullDescription: 'End-to-end supply chain solutions for furniture, garments, and essential equipment for corporate and industrial needs',
      route: '/supply',
    },
    {
      id: 3,
      title: 'IT Infrastructure',
      description: 'Complete IT infrastructure setup and management',
      icon: '💻',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop',
      fullDescription: 'Professional IT infrastructure solutions including network setup, hardware deployment, and technical support services',
      route: '/it',
    },
    {
      id: 4,
      title: 'Food Supply',
      description: 'Quality food supply and catering services',
      icon: '🍽️',
      image: 'https://i.pinimg.com/1200x/78/72/4d/78724d93527167a907356c01a096017c.jpg',
      fullDescription: 'Reliable food supply and catering services for corporate cafeterias, industrial canteens, and institutional facilities',
      route: '/food',
    },
    {
      id: 5,
      title: 'Consultancy',
      description: 'Expert business and operational consultancy',
      icon: '💼',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
      fullDescription: 'Strategic consultancy services for business optimization, process improvement, and operational excellence',
      route: '/consultancy',
    },
    {
      id: 6,
      title: 'Project Management',
      description: 'End-to-end project execution and oversight',
      icon: '📊',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
      fullDescription: 'Professional project management services ensuring timely delivery, quality control, and efficient resource utilization',
      route: '/project',
    },
    {
      id: 7,
      title: 'E-commerce',
      description: 'Digital commerce solutions and support',
      icon: '🛒',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop',
      fullDescription: 'Complete e-commerce solutions including platform management, logistics support, and warehouse operations',
      route: '/e-commerce',
    },
    {
      id: 8,
      title: 'Cleaning & Sanitization Services',
      description: 'Professional cleaning and hygiene solutions',
      icon: '🧹',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop',
      fullDescription: 'Reliable cleaning and sanitization services delivered by trained professionals',
      route: '/cleaning',
    },
  ];

  const aboutFeatures: AboutFeature[] = [
    {
      icon: <ShieldCheck />,
      title: 'Compliance & Safety',
      description: 'Strict adherence to labor laws and high safety standards for all deployed staff.',
    },
    {
      icon: <Users2 />,
      title: 'Skilled Professionals',
      description: 'Rigorous selection process ensuring you get the best talent for every role.',
    },
    {
      icon: <Award />,
      title: 'Quality Assurance',
      description: 'Continuous training and performance monitoring for excellence.',
    },
    {
      icon: <Sparkles />,
      title: 'Rapid Deployment',
      description: 'Fast turnaround for urgent manpower requirements.',
    },
  ];

  const industries: IndustryItem[] = [
    { name: 'Corporate', icon: <Building2 className="w-8 h-8" /> },
    { name: 'Industrial', icon: <Factory className="w-8 h-8" /> },
    { name: 'E-commerce', icon: <ShoppingBag className="w-8 h-8" /> },
    { name: 'IT Sector', icon: <Monitor className="w-8 h-8" /> },
  ];

  return (
    <div className="overflow-hidden">
      <HeroCarousel />

      {/* Compact About Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Compact Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg group">
                  <img
                    src="https://i.pinimg.com/736x/a3/a3/31/a3a331e344f0eee2c1b1c84ffad19cb6.jpg"
                    alt="Professional team"
                    className="w-full h-full object-top object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg group">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop"
                    alt="Team collaboration"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg group">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600&auto=format&fit=crop"
                    alt="Business meeting"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="bg-blue-600 p-6 rounded-2xl text-white shadow-xl">
                  <p className="text-4xl font-bold mb-1">15+</p>
                  <p className="text-sm uppercase tracking-widest font-semibold">Years Excellence</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4">
                About AVS Enterprise
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Your Trusted Partner in <span className="text-blue-900">Manpower Excellence</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                AVS Enterprise stands as a pillar of reliability in the recruitment and business support landscape.
                We don't just provide staff; we provide the foundation for your operational success.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {aboutFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 group">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0 group-hover:bg-blue-900 group-hover:text-white transition-all duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1 text-sm">{feature.title}</h4>
                      <p className="text-gray-600 text-xs leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Hover Effects - Updated with Links */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-900 rounded-full text-sm font-semibold mb-4">
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive <span className="text-blue-900">Solutions</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Explore our wide range of services designed to meet the diverse needs of modern enterprises
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Always visible gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Default State - Title at bottom */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 p-6 text-white transition-opacity duration-300 ${hoveredService === service.id ? 'opacity-0' : 'opacity-100'
                      }`}
                  >
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>

                  {/* Hover State - Card with blue background and orange button */}
                  <div
                    className={`absolute inset-x-0 bottom-0 transition-all duration-300 ${hoveredService === service.id ? 'opacity-100' : 'opacity-0'
                      }`}
                  >
                    <div className="bg-blue-900 rounded-t-3xl p-6 m-4">
                      <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-white/90 text-sm leading-relaxed mb-4">
                        {service.fullDescription}
                      </p>

                      <Link to={service.route}>
                        <button className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center gap-2">
                          Read more
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-slate-800 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-blue-900/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-blue-900" />
                </div>
                <div>
                  {/* <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-1">
                    King Group
                  </p> */}
                  <h3 className="text-4xl font-bold">Mission</h3>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                To Build Up a vibrant pool of motivated manpower resources empowered through extensive
                training, personnel development ready to take up any challenge in fast changing global environment.
              </p>

              {/* Mission Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop"
                    alt="Mission team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600&auto=format&fit=crop"
                    alt="Training session"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-orange-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <Eye className="w-8 h-8 text-orange-400" />
                </div>
                <div>
                  {/* <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-1">
                    King Group
                  </p> */}
                  <h3 className="text-4xl font-bold">Vision</h3>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                To deliver highly dedicated and skilled manpower solutions that meet the evolving expectations
                of emerging sectors across the economy, while contributing meaningfully to national growth and development.
              </p>

              {/* Vision Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600&auto=format&fit=crop"
                    alt="Vision team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=600&auto=format&fit=crop"
                    alt="Business growth"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Dots */}
          <div className="absolute top-20 left-10 opacity-20">
            <div className="grid grid-cols-3 gap-2">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-white rounded-full" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4">
              Industries We Serve
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tailored Solutions for <span className="text-blue-900">Every Sector</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl text-center group hover:from-blue-600 hover:to-blue-700 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl"
              >
                <div className="text-blue-900 group-hover:text-white mb-4 flex justify-center transition-colors duration-300 transform group-hover:scale-110">
                  {industry.icon}
                </div>
                <h4 className="font-bold text-gray-900 group-hover:text-white text-lg transition-colors duration-300">
                  {industry.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;