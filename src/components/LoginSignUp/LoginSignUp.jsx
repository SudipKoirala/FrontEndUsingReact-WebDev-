import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignUp.css';
import logo from '../assets/logow.png';
import firstImg from '../assets/1st.jpg';
import secondImg from '../assets/2nd.jpg';
import thirdImg from '../assets/3rd.jpg';
import fourthImg from '../assets/4th.jpg';
import fifthImg from '../assets/5th.jpg';
import husky from '../assets/husky.png';
import cat from '../assets/meow.png';
import axios from 'axios';

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const triggerPopup = (message) => {
    setPopupMessage(message);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (action === "Sign Up") {
      if (password !== confirmPassword) {
        triggerPopup("Passwords do not match!");
        return;
      }

      const formData = { firstName, lastName, email, password };

      // Log the form data for debugging
      console.log("Form Data (Signup):", formData);

      try {
        const response = await axios.post(`http://localhost:5000/api/users/signup`, formData);

        if (response.data.success) {
          triggerPopup("Account created successfully! Please log in.");
          setTimeout(() => setAction("Login"), 2000); // Switch to Login page
        } else {
          triggerPopup("Signup failed: " + response.data.message); // Showing backend message
        }
      } catch (error) {
        console.error("Error during signup:", error.response ? error.response.data : error.message);
        triggerPopup("Signup error: " + (error.response ? error.response.data.message : error.message));
      }
    } else 
      if (action === "Login") {
        const formData = { email, password };
        try {
          const response = await axios.post(`http://localhost:5000/api/users/login`, formData);
          if (response.data.success) {
            localStorage.setItem("token", response.data.token);
            triggerPopup("Login successful!");
            setTimeout(() => navigate("/home"), 2000); // Navigate to home page
          } else {
            triggerPopup("Login failed: " + response.data.message);
          }
        } catch (error) {
          console.error("Error during login:", error.response ? error.response.data : error.message);
          triggerPopup("Invalid credentials or server error");
        }
      }
    };
    
  return (
    <div>
      <header>
        <div className="topbar">
          <div className="login-logo" style={{ backgroundImage: `url(${logo})` }}></div>
          <div className="pictures">
            {[firstImg, secondImg, thirdImg, fourthImg, fifthImg].map((img, index) => (
              <div key={index} className={index % 2 === 0 ? "lpic" : "spic"} style={{ backgroundImage: `url(${img})` }}></div>
            ))}
          </div>
        </div>
      </header>

      <div className="main">
        <div className="leftbsign">
          {action === "Sign Up" && <div className="leftimg1" style={{ backgroundImage: `url(${husky})` }}></div>}
          {action === "Login" && <div className="leftimg2" style={{ backgroundImage: `url(${cat})` }}></div>}
        </div>

        <div className="rightbsign">
          <div className="text">{action}</div>
          <div className="underline"></div>

          <form className="registration-form" onSubmit={handleSubmit}>
            {action === "Sign Up" && (
              <div className="form-row">
                <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
              </div>
            )}

            <div className="email">
              <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <div className="passwords">
              <input type="password" className="password1" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              {action === "Sign Up" && (
                <input type="password" className="password2" placeholder="Re-Enter Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
              )}
            </div>

            {action === "Login" && (
              <div className="forgetpass">Lost Password? <span>Click Here</span></div>
            )}

            {action === "Sign Up" && (
              <label className='terms'>
                <input type="checkbox" required /> I agree to the <span>Terms of Service</span> and <span>Privacy Policy</span>
              </label>
            )}

            <div className="submits">
              <button type="submit" className="submit">{action}</button>
              <button 
                type="button" 
                className="submit gray" 
                onClick={() => {
                  setAction(action === "Login" ? "Sign Up" : "Login");
                  setEmail("");
                  setPassword("");
                  setFirstName("");
                  setLastName("");
                  setConfirmPassword("");
                }}
              >
                {action === "Login" ? "Create an Account" : "Already have an account? Log in"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>{popupMessage}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginSignup;
