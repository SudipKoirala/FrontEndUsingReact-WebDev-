import React, { useState } from 'react';
import './LoginSignUp.css';

import { useNavigate } from 'react-router-dom'; // Import useNavigate
import logo from '../assets/logo.png';

import firstImg from '../assets/1st.jpg';
import secondImg from '../assets/2nd.jpg';
import thirdImg from '../assets/3rd.jpg';
import fourthImg from '../assets/4th.jpg';
import fifthImg from '../assets/5th.jpg';
import husky from '../assets/husky.png';
import cat from '../assets/meow.png';

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Add actual login validation here (optional)
    navigate('/home'); // Redirect to the home page after login
  };

  return (
    <div>
      <header>
        <div className="topbar">
          <div className="logo" style={{ backgroundImage: `url(${logo})` }}></div>
          <div className="pictures">
            <div className="lpic" style={{ backgroundImage: `url(${firstImg})` }}></div>
            <div className="spic" style={{ backgroundImage: `url(${secondImg})` }}></div>
            <div className="lpic" style={{ backgroundImage: `url(${thirdImg})` }}></div>
            <div className="spic" style={{ backgroundImage: `url(${fourthImg})` }}></div>
            <div className="lpic" style={{ backgroundImage: `url(${fifthImg})` }}></div>
          </div>
        </div>
      </header>

      <div className="main">
        <div className="leftbsign">
          {action === "Login" ? <div></div> : <div className="leftimg1" style={{ backgroundImage: `url(${husky})` }}></div>}
          {action === "Sign Up" ? <div></div> : <div className="leftimg2" style={{ backgroundImage: `url(${cat})` }}></div>}
        </div>

        <div className="rightbsign">
          <div className="text">{action}</div>
          <div className="underline"></div>

          <form className="registration-form">
            {action === "Login" ? (
              <div></div>
            ) : (
              <div className="form-row">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
            )}

            <div className="email">
              <input type="email" placeholder="Email Address" />
            </div>
            <div className="passwords">
              <div className="password1">
                <input type="password" placeholder="Password" />
              </div>
              {action === "Login" ? (
                <div></div>
              ) : (
                <div className="password2">
                  <input type="password" placeholder="Re-Enter Password" />
                </div>
              )}
            </div>
            {action === "Sign Up" ? (
              <div></div>
            ) : (
              <div className="forgetpass">
                Lost Password? <span>Click Here</span>
              </div>
            )}

            <div className="label">
              {action === "Login" ? (
                <div></div>
              ) : (
                <label>
                  <input type="checkbox" /> I have read and agreed to the{' '}
                  <span>Terms of Service</span> and <span>Privacy Policy</span>
                </label>
              )}
            </div>
            <div className="submits">
              <div
                className={action === "Login" ? "submit gray" : "submit"}
                onClick={() => setAction("Sign Up")}
              >
                Sign Up
              </div>

              <div
                className={action === "Sign Up" ? "submit gray" : "submit"}
                onClick={() => setAction("Login")}
              >
                Login
              </div>

              {/* Add a login button that redirects to the home page */}
              <div className="submit" onClick={handleLogin}>
                Enter Home
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
