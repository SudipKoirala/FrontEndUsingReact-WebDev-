import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Behavior = () => {
    const navigate = useNavigate();
  return (
    <div className="pet-info-container">
      <h2>Understanding Cat Behavior</h2>
      <p>Cats communicate through body language and vocalizations. Here's what their actions mean:</p>

      <h3>🐱 Common Cat Behaviors & Meaning</h3>
      <ul>
        <li><strong>Purring:</strong> A sign of relaxation, but can also indicate pain.</li>
        <li><strong>Slow Blinking:</strong> A way of showing trust and affection.</li>
        <li><strong>Kneading:</strong> Instinctive behavior from kittenhood, showing comfort.</li>
        <li><strong>Tail Flicking:</strong> Can indicate irritation or excitement.</li>
      </ul>

      <h3>🐾 Socialization & Play</h3>
      <ul>
        <li>Play is crucial for kittens' development and adult cats' mental health.</li>
        <li>Use interactive toys like feather wands to stimulate their hunting instincts.</li>
      </ul>

      <p>Understanding these behaviors helps build a strong bond with your cat.</p>
      <button className="back-btn" onClick={() => navigate("/home")}>
        Back to Home
      </button>
    </div>
  );
};

export default Behavior;
