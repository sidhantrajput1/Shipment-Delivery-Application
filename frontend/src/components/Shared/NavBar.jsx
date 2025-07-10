import React, { useState } from "react";
import deliveryCard from "./../../assets/img/delivery-car.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="shadow-2xs sticky top-0 z-50 h-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center h-full">
        <div className="text-2xl flex gap-1 font-bold ">
          <img className="w-7" src={deliveryCard} alt="shipment-img" />
          <span>TrackSwift</span>
        </div>

        <ul className="hidden md:flex gap-10 text-gray-700">
         
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/services">Service</Link>
          </li>

        </ul>

        <ul className="hidden md:flex gap-8 text-gray-700">
          <li className=" bg-white text-black px-7 border py-1.5 rounded-sm cursor-pointer hover:bg-gray-700 hover:text-amber-100">
            <Link to="login">Login</Link>
          </li>
          <Link to="/signup">
            <li className="bg-white text-black px-7 border py-1.5 rounded-sm cursor-pointer hover:bg-gray-700 hover:text-amber-100">
              Sign Up
            </li>
          </Link>
        </ul>

        <div className="md:hidden" onClick={toggleMenu}>
          <div className="flex flex-col justify-between w-6 h-5 cursor-pointer">
            <span className="h-0.5 bg-black block"></span>
            <span className="h-0.5 bg-black block"></span>
            <span className="h-0.5 bg-black block"></span>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-5 pb-4">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li>
              <a href="#Home" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#service" onClick={toggleMenu}>
                Service
              </a>
            </li>
          </ul>
          <ul className="flex gap-4 mt-3">
            <li className=" bg-white text-black px-7 border py-1.5 rounded-sm cursor-pointer hover:bg-gray-700 hover:text-amber-100">
              <Link to="login">Login</Link>
            </li>
            <Link to="/signup">
              <li className="bg-white text-black px-7 border py-1.5 rounded-sm cursor-pointer hover:bg-gray-700 hover:text-amber-100">
                Sign Up
              </li>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
