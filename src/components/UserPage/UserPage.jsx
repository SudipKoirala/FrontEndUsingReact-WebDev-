import React, { useState } from "react";
import "./UserPage.css";

const UserPage = () => {
  // State for handling profile info
  const [profileImage, setProfileImage] = useState(null);
  const [userName, setUserName] = useState("");
  const [userNumber, setUserNumber] = useState("");

  // State for handling pet info
  const [petBreed, setPetBreed] = useState("");
  const [petAge, setPetAge] = useState("");
  const [postsCount, setPostsCount] = useState(5); // Example posts count

  // Handle profile image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div className="user-page-container">
      <h1 className="user-page-heading">Your Profile</h1>

      {/* Profile Section */}
      <div className="profile-section">
        <h2 className="profile-heading">Profile Information</h2>

        <div className="profile-image-container">
          <img
            src={profileImage || "https://via.placeholder.com/100"}
            alt="Profile"
            className="profile-image"
          />
          <input
            type="file"
            onChange={handleImageChange}
            className="profile-image-upload"
          />
        </div>

        <div className="profile-details">
          <label>
            <span>User Name:</span>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="input-field"
            />
          </label>

          <label>
            <span>Phone Number:</span>
            <input
              type="text"
              value={userNumber}
              onChange={(e) => setUserNumber(e.target.value)}
              className="input-field"
            />
          </label>
        </div>
      </div>

      {/* Pet Section */}
      <div className="pet-section">
        <h2 className="pet-heading">Pet Information</h2>

        <div className="pet-details">
          <label>
            <span>Breed:</span>
            <input
              type="text"
              value={petBreed}
              onChange={(e) => setPetBreed(e.target.value)}
              className="input-field"
            />
          </label>

          <label>
            <span>Age:</span>
            <input
              type="number"
              value={petAge}
              onChange={(e) => setPetAge(e.target.value)}
              className="input-field"
            />
          </label>

          <label>
            <span>How Many Posts:</span>
            <input
              type="number"
              value={postsCount}
              onChange={(e) => setPostsCount(e.target.value)}
              className="input-field"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
