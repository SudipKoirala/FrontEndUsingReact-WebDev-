import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
    
  
const Foods = () => {
    const navigate = useNavigate();
  return (
    <div className="pet-info-container">
      <h2>Dog Nutrition & Best Foods</h2>
      <p>Proper nutrition is essential for your dog's health, growth, and energy levels. Here's what to include:</p>

      <h3>✅ Healthy Food Choices</h3>
      <ul>
        <li><strong>Protein:</strong> Chicken, turkey, fish, eggs, and lean beef.</li>
        <li><strong>Vegetables:</strong> Carrots, spinach, sweet potatoes, and peas.</li>
        <li><strong>Fruits:</strong> Apples, bananas, and blueberries (in moderation).</li>
        <li><strong>Healthy Fats:</strong> Omega-3 from fish oil or flaxseeds.</li>
      </ul>

      <h3>❌ Foods to Avoid</h3>
      <ul>
        <li><strong>Chocolate:</strong> Contains theobromine, toxic to dogs.</li>
        <li><strong>Grapes & Raisins:</strong> Can cause kidney failure.</li>
        <li><strong>Onions & Garlic:</strong> Harm red blood cells and cause anemia.</li>
        <li><strong>Avocado:</strong> Contains persin, which is toxic to dogs.</li>
      </ul>

      <p>Ensure a balanced diet, and consult your vet for specific dietary needs.</p>
      <button className="back-btn" onClick={() => navigate("/home")}>
        Back to Home
      </button>
    </div>
  );
};

export default Foods;
