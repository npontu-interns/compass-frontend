import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#2E8BC0] text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">COMPASS</h2>
          <p className="text-sm">
            Your trusted partner in finding and listing beautiful properties across Ghana and beyond.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/buy" className="hover:underline">Home</Link></li>
            <li><Link to="/rent" className="hover:underline">Inventory</Link></li>
            <li><Link to="/sell" className="hover:underline">Contact</Link></li>
            <li><Link to="/agents" className="hover:underline">About Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="text-sm">Email: info@compass.com</p>
          <p className="text-sm">Phone: +233 20 000 0000</p>
          <p className="text-sm">Location: Accra, Ghana</p>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-8 text-center text-xs text-white/80">
        &copy; {new Date().getFullYear()} COMPASS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
