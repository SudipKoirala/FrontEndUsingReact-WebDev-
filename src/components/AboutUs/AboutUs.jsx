import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <nav className="navbar">
        <div className="menu">
          <Link to="/home">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About Us</Link>
          <Link to="/logout">Logout</Link>
        </div>
      </nav>
      <div className="content">
        <h1>About Us</h1>
        <p>PawFur is dedicated to making pet care effortless and fun!</p>
      </div>
    </div>
  );
};

export default AboutUs;
