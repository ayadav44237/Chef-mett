import { useState } from "react";
import Signature from "./assets/images/signature.png";
import HeroImage from "./assets/images/heroimage.jpeg";

function HeroSection({ menuOpen, setMenuOpen }) {
  return (
    <section className="relative w-full h-auto">
      <div className="relative w-full h-auto">
        <div className="absolute inset-y-0 left-0 w-1/6 bg-black bg-opacity-25 z-10 h-full ">
          <div className="flex justify-center mt-4 bg-transparent cursor-pointer">
            {/* Hamburger Icon - Hidden when menu is open */}
            {!menuOpen && (
              <div
                className="w-10 h-8 flex flex-col justify-between items-center bg-transparent"
                onClick={() => setMenuOpen(true)}
              >
                <div className="w-8 h-1 bg-white rounded-sm"></div>
                <div className="w-8 h-1 bg-white rounded-sm"></div>
                <div className="w-8 h-1 bg-white rounded-sm"></div>
              </div>
            )}
          </div>

          {/* Signature Image - Always Visible */}
          <div
            className={`flex items-center justify-center bg-transparent transition-transform duration-300 ${
              menuOpen ? "mt-4" : "mt-36"
            }`}
          >
            <img
              src={Signature}
              className={`w-64 h-64 object-fill bg-transparent transition-transform duration-300 ${
                menuOpen ? "rotate h-16" : "-rotate-90"
              }`}
              alt="Signature"
            />
          </div>

          {/* Menu - Visible when menu is open */}
          {menuOpen && (
            <div className="mt-8 text-white space-y-4 text-center bg-transparent">
              <a href="#home" className="block bg-transparent">Home</a>
              <a href="#products" className="block bg-transparent">Products</a>
              <a href="#meet-chef-matt" className="block bg-transparent">MEET CHEF MATT</a>
              <a href="#faq" className="block bg-transparent">FAQ</a>
              <a href="#contact" className="block bg-transparent">Connect With Us</a>
            </div>
          )}
        </div>

        {/* Hero Image */}
        <img
          src={HeroImage}
          className="w-full h-auto object-cover"
          alt="Hero"
        />

        {/* Centered Button with Border and Dots Below */}
        <div className="absolute inset-x-0  flex flex-col items-center justify-center mt-[-150px] bg-transparent">
          <button
            className="border-4 border-white bg-transparent text-white py-2 px-4 rounded-md hover:bg-white hover:text-black transition-colors duration-300"
            onClick={() => alert('Button Clicked!')} // Add your onClick functionality here
          >
            Meet Chef Text
          </button>

          {/* Dots Below Button */}
          <div className="flex mt-4 space-x-2 bg-transparent">
            <div className="w-3 h-3 bg-white border-2 border-black rounded-full"></div>
            <div className="w-3 h-3 bg-white border-2 border-black rounded-full"></div>
            <div className="w-3 h-3 bg-white border-2 border-black rounded-full"></div>
            <div className="w-3 h-3 bg-black border-2 border-white rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
