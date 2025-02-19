import React from 'react';
import { Link } from 'react-router-dom';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <nav className="navbar">
        <div className="menu">
          <Link to="/home">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About Us</Link>
        </div>
      </nav>

      <div className="landing-container">
        <div className="content-wrapper">
          <header className="header">
            <h1>Contact Us</h1>
            <p className="subtitle">
              We're here to assist you with anything related to pet care.
            </p>
          </header>

          <section className="card contact-info-section">
            <h2>Get in Touch</h2>
            <p>
              Our team is available to answer all your questions and provide the support you need for your pet care journey.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <h3>Phone</h3>
                <p>Call us at <strong>01-42312</strong> for immediate support.</p>
              </div>
              <div className="contact-item">
                <h3>Email</h3>
                <p>Send us an email at <strong>support@pawfur.com</strong> for inquiries and assistance.</p>
              </div>
            </div>
          </section>

         
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
