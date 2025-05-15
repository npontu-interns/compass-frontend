import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="shadow" style={{ backgroundColor: '#2E8BC0' }}>
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Compass Logo" className="h-10 w-auto" />
          <div className="text-xl font-bold text-white">COMPASS</div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-4">
          <Link to="/landingpage" className="text-white font-bold hover:text-orange-200">Home</Link>
          <Link to="/inventry" className="text-white font-bold hover:text-orange-200">Inventory</Link>
          <Link to="/contact" className="text-white font-bold hover:text-orange-200">Contact</Link>
          <Link to="/about us" className="text-white font-bold hover:text-orange-200">About Us</Link>
          <Link to="/login" className="text-white font-bold hover:text-orange-200">Listing Your House</Link>
        </nav>

        {/* Sign In / Advertise */}
        <div className="hidden md:flex space-x-4">
          <Link to="/login" className="text-white font-bold hover:text-orange-200">Login/Register</Link>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
