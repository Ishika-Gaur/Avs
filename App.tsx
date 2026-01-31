import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import VisionMission from './pages/VisionMission';
import Services from './pages/Services';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

// Service Pages
import Manpower from './pages/manpower';
import It from './pages/it';
import Supply from './pages/supply';
import Food from './pages/food';
import Cleaning from './pages/cleaning';
import Consultancy from './pages/Consultancy';
import Project from './pages/project';
import Ecommerce from './pages/e-commerce';

// ✅ Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />

        {/* Navbar */}
        <Navbar />

        {/* Main content (navbar height compensation) */}
        <main className="flex-grow pt-[96px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vision-mission" element={<VisionMission />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />

            {/* Service Routes */}
            <Route path="/manpower" element={<Manpower />} />
            <Route path="/it" element={<It />} />
            <Route path="/supply" element={<Supply />} />
            <Route path="/food" element={<Food />} />
            <Route path="/cleaning" element={<Cleaning />} />
            <Route path="/consultancy" element={<Consultancy />} />
            <Route path="/project" element={<Project />} />
            <Route path="/e-commerce" element={<Ecommerce />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
