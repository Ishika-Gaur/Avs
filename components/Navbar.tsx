import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';

// ✅ Logo from public/assets
const LogoPath = './images/logo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Vision & Mission', path: '/vision-mission' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300
        ${scrolled ? 'bg-white shadow-md' : 'bg-white'}
      `}
    >
      {/* ✅ FIXED HEIGHT NAVBAR */}
      <div className="h-[88px] flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">

            {/* ✅ LOGO */}
            <Link to="/" className="flex items-center">
              <img
                src={LogoPath}
                alt="AVS Enterprise Logo"
               className={`object-contain transition-all duration-300
  ${scrolled ? 'w-28 md:w-32' : 'w-32 md:w-36'}
`}


             
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-semibold tracking-wide transition-colors hover:text-corporate-600 ${
                    location.pathname === link.path
                      ? 'text-brand underline underline-offset-8'
                      : 'text-gray-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <Link
                to="/contact"
                className="bg-brand text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg hover:bg-corporate-800 transition-all"
              >
                Inquire Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-brand transition-colors"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl transition-all duration-300 transform ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="flex items-center justify-between px-3 py-4 text-base font-semibold text-gray-700 border-b border-gray-50 hover:bg-gray-50"
            >
              {link.name}
              <ChevronRight size={18} className="text-gray-300" />
            </Link>
          ))}

          <div className="pt-4 px-3">
            <Link
              to="/contact"
              className="block w-full text-center bg-brand text-white py-3 rounded-lg font-bold"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
