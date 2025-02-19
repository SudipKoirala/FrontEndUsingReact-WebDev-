import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="menu">
          <Link to="/home">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About Us</Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="landing-container">
        <div className="content-wrapper">
          {/* Header Section */}
          <header className="header">
            <h1>Welcome to PawFur</h1>
            <p className="subtitle">
              Your trusted partner in pet care – expert guidance & a supportive community.
            </p>
          </header>

          {/* Mission Section */}
          <section className="card mission-section">
            <h2>Our Mission</h2>
            <p>
              At PawFur, we believe that pet care is a journey, and every pet parent deserves reliable support. 
              We offer a knowledge-driven platform where pet owners can access expert advice, 
              discover valuable resources, and engage with a passionate community of fellow pet lovers.
            </p>
          </section>

          {/* Services Section */}
          <section className="card services-section">
            <h2>What We Offer</h2>
            <div className="services-grid">
              <div className="service-item">
                <div className="service-header">
                  <span className="service-icon">📚</span>
                  <h3>Expert Consultation</h3>
                </div>
                <p>Get professional advice from veterinarians and pet care specialists.</p>
              </div>

              <div className="service-item">
                <div className="service-header">
                  <span className="service-icon">🔍</span>
                  <h3>Resource Library</h3>
                </div>
                <p>Access well-researched guides, training tips, and health recommendations.</p>
              </div>

              <div className="service-item">
                <div className="service-header">
                  <span className="service-icon">📊</span>
                  <h3>Health Tracking</h3>
                </div>
                <p>Monitor your pet’s diet, exercise, and medical history with ease.</p>
              </div>

              <div className="service-item">
                <div className="service-header">
                  <span className="service-icon">👥</span>
                  <h3>Community Support</h3>
                </div>
                <p>Connect with fellow pet owners, share experiences, and seek advice.</p>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="card cta-section">
            <h2>Join Our Community</h2>
            <p>
              Become a part of a thriving pet-care network. Whether you need guidance, want to share your experience, 
              or simply celebrate the love of pets – PawFur is here for you.
            </p>
            <button className="cta-button">Get Started Today</button>
          </section>

          
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
