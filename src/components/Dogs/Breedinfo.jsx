import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const BreedInfo = () => {
    
    const navigate = useNavigate();
  return (
    <div className="pet-info-container">
      <h2>Dog Breeds Information</h2>
      <p>There are over 340 recognized dog breeds worldwide, each with unique characteristics. Below are some of the most popular ones:</p>

      <h3>🐕 Small Breeds</h3>
      <ul>
        <li><strong>Pomeranian:</strong> Energetic, fluffy, and intelligent. Great for apartments.</li>
        <li><strong>French Bulldog:</strong> Playful, affectionate, and loves human companionship.</li>
        <li><strong>Chihuahua:</strong> Tiny but full of personality, perfect for small spaces.</li>
      </ul>

      <h3>🐕 Medium Breeds</h3>
      <ul>
        <li><strong>Cocker Spaniel:</strong> Friendly, loves kids, and needs moderate exercise.</li>
        <li><strong>Border Collie:</strong> Highly intelligent and active; needs mental stimulation.</li>
      </ul>

      <h3>🐕 Large Breeds</h3>
      <ul>
        <li><strong>Golden Retriever:</strong> Loyal, great for families, and loves to play.</li>
        <li><strong>German Shepherd:</strong> Intelligent, protective, and excellent for training.</li>
      </ul>

      <p>Choosing the right breed depends on your lifestyle, space, and experience as a pet owner.</p>
      
      <button className="back-btn" onClick={() => navigate("/home")}>
        Back to Home
      </button>
    </div>
  );
};



export default BreedInfo;
