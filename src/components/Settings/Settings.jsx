import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Settings.css";

const Settings = () => {
  const [profilePic, setProfilePic] = useState("");
  const [username, setUsername] = useState("");
  const [petType, setPetType] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationType, setNotificationType] = useState("success");
  
  const notificationTimeoutRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Load stored profile data first
    const storedData = JSON.parse(localStorage.getItem("userProfile"));
    if (storedData) {
      setProfilePic(storedData.profilePic || "");
      setUsername(storedData.username || "");
      setPetType(storedData.petType || "");
      setBreed(storedData.breed || "");
      setAge(storedData.age || "");
    }

    // Then try to fetch from API if authenticated
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    
    if (token && userId) {
      fetchUserProfile(token, userId);
    }

    // Cleanup notification timeout on unmount
    return () => {
      if (notificationTimeoutRef.current) {
        clearTimeout(notificationTimeoutRef.current);
      }
    };
  }, []);

  const showPopupNotification = (message, type = "success") => {
    // Clear any existing timeout
    if (notificationTimeoutRef.current) {
      clearTimeout(notificationTimeoutRef.current);
    }
    
    // Set notification properties
    setNotificationMessage(message);
    setNotificationType(type);
    setShowNotification(true);
    
    // Auto-hide after 3 seconds
    notificationTimeoutRef.current = setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  const fetchUserProfile = async (token, userId) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/users/profile/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success && data.data) {
          // Only update if we got valid data
          setUsername(data.data.first_name + " " + data.data.last_name);
          setPetType(data.data.petType || "");
          setBreed(data.data.breed || "");
          setAge(data.data.age || "");
          if (data.data.profilePic) {
            setProfilePic(data.data.profilePic);
          }
        }
      } else {
        // Handle unauthorized or other errors
        const errorData = await response.json();
        if (response.status === 401) {
          showPopupNotification("Session expired. Please log in again.", "error");
          setTimeout(() => handleSignUp(), 2000);
        } else {
          showPopupNotification(errorData.message || "Could not fetch profile", "error");
        }
      }
    } catch (err) {
      console.error("Error fetching profile:", err);
      showPopupNotification("Network error while fetching profile", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleProfilePicChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // File size validation (max 5MB)
      if (selectedFile.size > 5 * 1024 * 1024) {
        showPopupNotification("File size exceeds 5MB limit", "error");
        return;
      }
      
      // For preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(selectedFile);
      
      // Save file for form submission
      setFile(selectedFile);
    }
  };

  const handleSave = async () => {
    // Validate form
    if (!username.trim()) {
      showPopupNotification("Username is required", "error");
      return;
    }

    // First save to localStorage for compatibility with existing code
    const userData = {
      profilePic,
      username,
      petType,
      breed,
      age,
      postCount: JSON.parse(localStorage.getItem("userProfile"))?.postCount || Math.floor(Math.random() * 10),
    };
    localStorage.setItem("userProfile", JSON.stringify(userData));

    // Then try to save to API if authenticated
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    
    if (token && userId) {
      try {
        setLoading(true);
        setError("");
        
        // Create form data for file upload
        const formData = new FormData();
        formData.append("petType", petType);
        formData.append("breed", breed);
        formData.append("age", age);
        formData.append("username", username);
        
        if (file) {
          formData.append("profilePic", file);
        }

        // Send update request
        const response = await fetch(`/api/users/profile/${userId}`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`
          },
          body: formData
        });

        const data = await response.json();
        
        if (response.ok && data.success) {
          showPopupNotification("Profile updated successfully!");
          
          // Update the profile pic path from server if available
          if (data.data && data.data.profilePic) {
            setProfilePic(data.data.profilePic);
            
            // Update in localStorage too
            userData.profilePic = data.data.profilePic;
            localStorage.setItem("userProfile", JSON.stringify(userData));
          }
        } else {
          if (response.status === 401) {
            showPopupNotification("Session expired. Please log in again.", "error");
            setTimeout(() => handleSignUp(), 2000);
          } else {
            showPopupNotification(data.message || "Failed to update profile", "error");
          }
        }
      } catch (err) {
        console.error("Error saving profile to API:", err);
        showPopupNotification("Network error while saving profile", "error");
      } finally {
        setLoading(false);
      }
    } else {
      // No authentication, but localStorage was updated
      showPopupNotification("Profile updated in local storage only");
    }
  };

  const handleBackToHome = () => {
    navigate("/home");
  };

  const handleSignUp = () => {
    // Clear any auth data
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/");
  };

  return (
    <div className="settings-page">
      <h2>Settings</h2>
      
      {/* Popup Notification */}
      {showNotification && (
        <div className={`notification ${notificationType}`}>
          <span>{notificationMessage}</span>
          <button 
            className="close-notification" 
            onClick={() => setShowNotification(false)}
          >
            ×
          </button>
        </div>
      )}
      
      <div className="settings-section">
        <label>Upload Profile Picture:</label>
        <input type="file" accept="image/*" onChange={handleProfilePicChange} />
        {profilePic && <img src={profilePic} alt="Preview" className="preview-img" />}
      </div>

      <div className="settings-section">
        <label>Username:</label>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          placeholder="Enter username"
          required
        />
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
        <input 
          type="text" 
          value={breed} 
          onChange={(e) => setBreed(e.target.value)} 
          placeholder="Enter breed"
        />
      </div>

      <div className="settings-section">
        <label>Age:</label>
        <input 
          type="text" 
          value={age} 
          onChange={(e) => setAge(e.target.value)} 
          placeholder="Enter age"
        />
      </div>

      <button onClick={handleSave} className="save-button" disabled={loading}>
        {loading ? "Saving..." : "Save Changes"}
      </button>

      <button onClick={handleBackToHome} className="back-btn">Back to Home</button>
      <button onClick={handleSignUp} className="logout">Log out</button>
    </div>
  );
};

export default Settings;