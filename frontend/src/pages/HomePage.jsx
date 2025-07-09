import React from "react";
import heroImg from "./../assets/img/hero-page-shipment.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          
          {/* Left Content */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Track Your Shipments with Ease
            </h3>
            <p className="text-gray-600 text-base sm:text-lg md:text-lg">
              Manage and track your deliveries in real-time. Our platform provides end-to-end visibility for all your shipments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/signup"
                className="bg-black text-white py-3 px-6 rounded-xl hover:bg-gray-800 hover:text-amber-100 text-center"
              >
                Get Started <span>&#8594;</span>
              </Link>
              <button className="border border-gray-400 bg-white text-gray-800 py-3 px-6 rounded-xl hover:bg-gray-200">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={heroImg}
              alt="Hero"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
