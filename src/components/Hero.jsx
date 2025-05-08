import React from 'react';
import heroImage from '../assets/heroimage.png'; 
import '../styles/Hero.css'; 

function HeroSection() {
  return (
    <section className="hero-section flex items-center justify-between px-6 md:px-16 py-12">
      <div className="text-content">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Powering Global Talent, <span style={{ color: '#49B85F' }}>Driving Business Growth</span>
        </h1>
        <p className="mt-4 text-gray-300">
        🔹 Your Strategic Outsourcing Partner for Remote Excellence 🔹
        </p>
        <p className="mt-4 text-gray-300">
          At Consult Park, we connect businesses with world-class remote talent,
          helping them scale, optimize, and thrive.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-lime-400 text-black font-semibold py-3 px-6 rounded-full hover:scale-105 transition"
        >
          Get Started
        </a>
        <a
          href="/contact"
          className="mt-4 contact-button"
        >
          Contact Us
        </a>
      </div>
      <div className="image-content">
        <img src={heroImage} alt="Hero" className="w-full max-w-md md:max-w-lg" />
      </div>
    </section>
  );


}
export default HeroSection;

