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
          <Link to="/logout">Logout</Link>
        </div>
      </nav>
      <div className="content">
        <h1>Contact Us</h1>
        <p>Email: support@pawfur.com</p>
        <p>Phone: +123 456 7890</p>
      </div>
    </div>
  );
};

export default ContactUs;
