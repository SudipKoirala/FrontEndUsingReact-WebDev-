import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Settings.css";

const Settings = () => {
  const [profilePic, setProfilePic] = useState("");
  const [username, setUsername] = useState("");
  const [petType, setPetType] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    // Load stored profile data
    const storedData = JSON.parse(localStorage.getItem("userProfile"));
    if (storedData) {
      setProfilePic(storedData.profilePic || "");
      setUsername(storedData.username || "");
      setPetType(storedData.petType || "");
      setBreed(storedData.breed || "");
      setAge(storedData.age || "");
    }
  }, []);

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const userData = {
      profilePic,
      username,
      petType,
      breed,
      age,
      postCount: Math.floor(Math.random() * 10), // Mock post count
    };

    localStorage.setItem("userProfile", JSON.stringify(userData)); // Save to localStorage
    alert("Profile updated successfully!");
};


  const handleBackToHome = () => {
    navigate("/home");
  };

  return (
    <div className="settings-page">
      <h2>Settings</h2>
      
      <div className="settings-section">
        <label>Upload Profile Picture:</label>
        <input type="file" accept="image/*" onChange={handleProfilePicChange} />
        {profilePic && <img src={profilePic} alt="Preview" className="preview-img" />}
      </div>

      <div className="settings-section">
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>

      <div className="settings-section">
        <label>Pet Type:</label>
        <select value={petType} onChange={(e) => setPetType(e.target.value)}>
          <option value="">Select Pet</option>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
        </select>
      </div>

      <div className="settings-section">
        <label>Breed:</label>
        <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)} />
      </div>

      <div className="settings-section">
        <label>Age:</label>
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>

      <button onClick={handleSave} className="save-button">Save Changes</button>

      <button onClick={handleBackToHome} className="back-btn">Back to Home</button>
    </div>
  );
};

export default Settings;
