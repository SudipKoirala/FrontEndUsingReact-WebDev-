import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Grooming = () => {
    const navigate = useNavigate();
  return (
    <div className="pet-info-container">
      <h2>Cat Grooming & Hygiene</h2>
      <p>Although cats groom themselves, additional care is needed for their health.</p>

      <h3>🪮 Essential Grooming Tips</h3>
      <ul>
        <li><strong>Brushing:</strong> Reduces shedding and prevents hairballs.</li>
        <li><strong>Nail Clipping:</strong> Helps avoid scratching and furniture damage.</li>
        <li><strong>Ear Cleaning:</strong> Prevents infections and wax buildup.</li>
        <li><strong>Bathing:</strong> Only needed for certain breeds or medical conditions.</li>
      </ul>

      <h3>🚫 Common Grooming Mistakes</h3>
      <ul>
        <li>Using human shampoo instead of cat-specific ones.</li>
        <li>Not brushing long-haired cats regularly, leading to mats.</li>
        <li>Ignoring signs of ear infections or dental issues.</li>
      </ul>

      <p>Regular grooming helps keep your cat healthy and comfortable.</p>
      <button className="back-btn" onClick={() => navigate("/home")}>
        Back to Home
      </button>
    </div>
  );
};

export default Grooming;

