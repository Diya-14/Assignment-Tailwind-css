// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => (
  <nav className="bg-gradient-to-r from-primaryBlue to-primaryPurple p-4 shadow fixed top-0 w-full z-10">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-2xl font-bold text-white">EduPlatform</div>
      <div className="space-x-6">
        <Link to="/" className="text-white hover:text-accentYellow transition-all duration-200">Home</Link>
        <Link to="/about" className="text-white hover:text-accentYellow transition-all duration-200">About</Link>
        <Link to="/courses" className="text-white hover:text-accentYellow transition-all duration-200">Courses</Link>
        <Link to="/contact" className="text-white hover:text-accentYellow transition-all duration-200">Contact</Link>
        <Link to="/jobs" className="text-white hover:text-accentYellow transition-all duration-200">Jobs</Link>
        <Link to="/services" className="text-white hover:text-accentYellow transition-all duration-200">Services</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;

