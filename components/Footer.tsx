
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* About Section */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-white w-8 h-8 flex items-center justify-center rounded shadow-md">
              <span className="text-brand font-bold text-lg italic">A</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">AVS ENTERPRISE</span>
          </Link>
          <p className="text-sm leading-relaxed text-gray-400">
            India's leading provider of Manpower Outsourcing and Business Support Services. Delivering excellence and reliability to corporate, industrial, and commercial clients nationwide.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand transition-colors text-white">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand transition-colors text-white">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand transition-colors text-white">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand transition-colors text-white">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6 relative">
            Quick Links
            <span className="block w-12 h-1 bg-brand mt-2"></span>
          </h3>
          <ul className="space-y-4 text-sm">
            <li><Link to="/about" className="hover:text-brand transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-brand transition-colors">Our Services</Link></li>
            <li><Link to="/vision-mission" className="hover:text-brand transition-colors">Vision & Mission</Link></li>
            <li><Link to="/careers" className="hover:text-brand transition-colors">Career Opportunities</Link></li>
            <li><Link to="/contact" className="hover:text-brand transition-colors">Contact Support</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6 relative">
            Key Services
            <span className="block w-12 h-1 bg-brand mt-2"></span>
          </h3>
          <ul className="space-y-4 text-sm">
            <li><Link to="/services" className="hover:text-brand transition-colors">Manpower Outsourcing</Link></li>
            <li><Link to="/services" className="hover:text-brand transition-colors">IT Infrastructure</Link></li>
            <li><Link to="/services" className="hover:text-brand transition-colors">Supply Services</Link></li>
            <li><Link to="/services" className="hover:text-brand transition-colors">Cleaning & Sanitization</Link></li>
            <li><Link to="/services" className="hover:text-brand transition-colors">Project Management</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6 relative">
            Contact Us
            <span className="block w-12 h-1 bg-brand mt-2"></span>
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-brand flex-shrink-0 mt-1" />
              <span>123 Corporate Plaza, Business Hub, Sector 44, New Delhi, India - 110001</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-brand flex-shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-brand flex-shrink-0" />
              <span>info@avsenterprise.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} AVS Enterprise Private Limited. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
