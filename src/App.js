import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginSignup from './components/LoginSignUp/LoginSignUp';
import HomePage from './components/Homepage/HomePage';
import ContactUs from './components/ContactUs/ContactUs';
import AboutUs from './components/AboutUs/AboutUs';
import Logout from './components/LogOut/Logout';
import UserPage from "./components/UserPage/UserPage";

const App = () => {
  return (
    <Router>
      <Routes>

      <Route path="/user" element={<UserPage />} />
        {/* The default ("/") route is the Login/Signup page */}
        <Route path="/" element={<LoginSignup />} />
        {/* After logging in, navigate to "/home" */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/userpage" element={<UserPage />} />

      </Routes>
    </Router>
  );
};

export default App;
