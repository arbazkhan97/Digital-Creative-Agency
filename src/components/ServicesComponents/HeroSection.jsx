import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Our Premium Services</h1>
          <p className="hero-description">
            Explore top-notch services designed to meet all your needs with unparalleled quality and innovation.
          </p>
          <button className="hero-button">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;