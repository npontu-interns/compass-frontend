// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

// Navbar now accepts isLoggedIn and onLogout as props
const Navbar = ({ isLoggedIn, onLogout }) => {
  return (
    <header className="shadow" style={{ backgroundColor: '#2E8BC0' }}>
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Compass Logo" className="h-10 w-auto" />
          <div className="text-xl font-bold text-white">COMPASS</div>
        </Link>

        {/* Navigation Links (Visible on larger screens) */}
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="text-white font-bold hover:text-orange-200">Home</Link>
          <Link to="/inventory" className="text-white font-bold hover:text-orange-200">Inventory</Link>
          <Link to="/contact" className="text-white font-bold hover:text-orange-200">Contact</Link>
          <Link to="/about-us" className="text-white font-bold hover:text-orange-200">About Us</Link>

          {/* Conditional "Listing Your House" link */}
          {isLoggedIn ? (
            <Link to="/list-property" className="text-white font-bold hover:text-orange-200">List Your House</Link>
          ) : (
            // If not logged in, clicking "Listing Your House" takes them to login
            <Link to="/login" className="text-white font-bold hover:text-orange-200">List Your House</Link>
          )}
        </nav>

        {/* Sign In / Advertise (Visible on larger screens) */}
        <div className="hidden md:flex space-x-4">
          {isLoggedIn ? (
            <button
              onClick={onLogout}
              className="text-white font-bold hover:text-orange-200 bg-transparent border-none cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="text-white font-bold hover:text-orange-200">Login/Register</Link>
          )}
        </div>

        {/* Mobile Menu Icon (You'll implement its functionality later) */}
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