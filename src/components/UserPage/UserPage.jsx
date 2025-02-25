import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./UserPage.css";


const UserPage = () => {
  const [profileData, setProfileData] = useState({
    profilePic: "",
    username: "User",
    petType: "Not Selected",
    breed: "Not Selected",
    age: "Not Provided",
    postCount: 0,
  });

  const navigate = useNavigate();
  const handleBackToHome = () => {
    navigate("/home");
  };
  
  useEffect(() => {
    // Fetch stored data from localStorage
    const storedData = JSON.parse(localStorage.getItem("userProfile"));
    if (storedData) {
      setProfileData(storedData); // Set profile data, including post count
    }
  }, []);

  return (
    <div className="user-page">
      <div className="profile-section">
        <img
          src={profileData.profilePic || "/default-avatar.png"}
          alt="Profile"
          className="profile-pic"
        />
        <h2 className="username">{profileData.username}</h2>
        <p className="post-count">Posts Uploaded: {profileData.postCount}</p>
      </div>

      <div className="pet-details">
        <h3>Pet Details</h3>
        <p><strong>Pet Type:</strong> {profileData.petType}</p>
        <p><strong>Breed:</strong> {profileData.breed}</p>
        <p><strong>Age:</strong> {profileData.age}</p>
        
        
      </div>
      <button onClick={handleBackToHome} className="back-btn">Back to Home</button>
    </div>
  );
};

export default UserPage;
