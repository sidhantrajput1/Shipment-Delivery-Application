import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5 ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-400">ParcelPath</h2>
          <p className="text-sm text-gray-300">
            Your trusted partner in fast, reliable shipment and delivery solutions across the globe.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#home" className="hover:text-blue-400">Home</a></li>
            <li><a href="#services" className="hover:text-blue-400">Services</a></li>
            <li><a href="#tracking" className="hover:text-blue-400">Track Order</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li>
              📍 123 Delivery St, New Delhi, India
            </li>
            <li>
              📞 +91 9876543210
            </li>
            <li>
              ✉️ support@shipease.com
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} ShipEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
