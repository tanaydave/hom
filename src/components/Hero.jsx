// src/components/HeroSection.jsx
import React from 'react';
import heroImage from '../assets/view-3d-blooming-flowers.jpg'

const Hero = () => {
  return (
    <div
    className="relative h-screen min-h-[600px] w-full bg-cover bg-center"
    style={{
      backgroundImage: `url(${heroImage})`,
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent">
      <div className="container mx-auto px-6 py-32">
        <div className="max-w-2xl">
          <h1 className="mb-8 text-5xl font-bold text-white">
            Transform Your Business with Next-Gen Technology
          </h1>
          <p className="mb-12 text-xl text-gray-200">
            Empower your enterprise with cutting-edge solutions that drive
            growth and innovation in the digital age.
          </p>
          <button className="!rounded-button cursor-pointer bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-700 whitespace-nowrap">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

  export default Hero;