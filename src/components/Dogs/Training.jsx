import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";


const Training = () => {
    const navigate = useNavigate();
  return (
    <div className="pet-info-container">
      <h2>Dog Training & Behavioral Tips</h2>
      <p>Training your dog ensures good behavior, strengthens bonding, and makes social interactions easier.</p>

      <h3>📌 Basic Training Commands</h3>
      <ul>
        <li><strong>“Sit”:</strong> Helps control excitement and teaches patience.</li>
        <li><strong>“Stay”:</strong> Ensures safety and discipline in open areas.</li>
        <li><strong>“Come”:</strong> Vital for recall training and safety.</li>
        <li><strong>“Leave It”:</strong> Prevents them from eating harmful objects.</li>
      </ul>

      <h3>🐾 Housebreaking & Crate Training</h3>
      <ul>
        <li>Use positive reinforcement with treats and praise.</li>
        <li>Take them outside at regular intervals.</li>
        <li>Keep a consistent routine for feeding and bathroom breaks.</li>
      </ul>

      <h3>⚠️ Common Training Mistakes</h3>
      <ul>
        <li>Yelling instead of using firm but calm commands.</li>
        <li>Not rewarding good behavior immediately.</li>
        <li>Being inconsistent with rules and expectations.</li>
      </ul>

      <p>Patience, consistency, and positive reinforcement are key to effective training.</p>
      <button className="back-btn" onClick={() => navigate("/home")}>
        Back to Home
      </button>
    </div>
  );
};

export default Training;
