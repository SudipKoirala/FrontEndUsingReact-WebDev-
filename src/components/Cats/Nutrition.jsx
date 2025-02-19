import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";


const Nutrition = () => {
    const navigate = useNavigate();
  return (
    <div className="pet-info-container">
      <h2>Cat Nutrition & Diet Guide</h2>
      <p>Providing a balanced diet is essential for your cat's **health, energy levels, and longevity**. Cats are **obligate carnivores**, meaning they require **animal-based proteins** to thrive.</p>

      <h3> Essential Nutrients for Cats</h3>
      <ul>
        <li><strong>Protein:</strong> The most critical nutrient. Sources include chicken, turkey, fish, and beef.</li>
        <li><strong>Taurine:</strong> An essential amino acid found in meat. Deficiency can lead to heart and vision problems.</li>
        <li><strong>Fats & Omega-3:</strong> Helps maintain a shiny coat and supports brain function.</li>
        <li><strong>Vitamins & Minerals:</strong> Cats need Vitamin A, D, calcium, and phosphorus for strong bones.</li>
        <li><strong>Water:</strong> Proper hydration is **crucial** to prevent kidney disease and urinary tract infections.</li>
      </ul>

      <h3>🥩 Recommended Cat Diets</h3>
      <ul>
        <li><strong>High-Protein Wet Food:</strong> Contains more moisture, closer to a cat's natural diet.</li>
        <li><strong>Quality Dry Food:</strong> Convenient, but ensure it’s high in **animal protein, not fillers** like corn.</li>
        <li><strong>Raw or Cooked Meat:</strong> Some cats thrive on raw diets, but consult a vet first.</li>
      </ul>

      <h3>🚫 Foods to Avoid</h3>
      <ul>
        <li><strong>Milk & Dairy:</strong> Many cats are **lactose intolerant**, leading to stomach issues.</li>
        <li><strong>Onions & Garlic:</strong> Can cause anemia by damaging red blood cells.</li>
        <li><strong>Chocolate & Caffeine:</strong> Contains theobromine, which is **toxic** to cats.</li>
        <li><strong>Grapes & Raisins:</strong> Can cause **kidney failure**.</li>
        <li><strong>Raw Fish:</strong> Contains enzymes that can **destroy Vitamin B1**, leading to neurological issues.</li>
      </ul>

      <h3>🕰️ Feeding Schedule</h3>
      <ul>
        <li><strong>Kittens (Up to 6 months):</strong> 3-4 small meals per day.</li>
        <li><strong>Adults (1-7 years):</strong> 2 meals per day.</li>
        <li><strong>Seniors (7+ years):</strong> Smaller, more frequent meals to support aging digestion.</li>
      </ul>

      <p>Always ensure fresh **clean water** is available, and choose **high-quality** cat food tailored to your pet’s needs.</p>
      <button className="back-btn" onClick={() => navigate("/home")}>
        Back to Home
      </button>
    </div>
  );
};

export default Nutrition;

