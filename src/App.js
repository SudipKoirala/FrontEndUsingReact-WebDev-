import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginSignup from './components/LoginSignUp/LoginSignUp';
import HomePage from './components/Homepage/HomePage';
import ContactUs from './components/ContactUs/ContactUs';
import AboutUs from './components/AboutUs/AboutUs';
import Logout from './components/LogOut/Logout';
import UserPage from "./components/UserPage/UserPage";
import Settings from "./components/Settings/Settings";
import BreedInfo from "./components/Dogs/Breedinfo";
import Foods from "./components/Dogs/Foods";
import Training from "./components/Dogs/Training";
import Behavior from "./components/Cats/Behavior";
import Grooming from "./components/Cats/Grooming";
import Nutrition from "./components/Cats/Nutrition";
import RecentNews from "./components/RecentNews/RecentNews";

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
        <Route path="/settings" element={<Settings />} />
        <Route path="/dogs/breedinfo" element={<BreedInfo />} />
<Route path="/dogs/foods" element={<Foods />} />
<Route path="/dogs/training" element={<Training />} />
<Route path="/cats/behavior" element={<Behavior />} />
<Route path="/cats/grooming" element={<Grooming />} />
<Route path="/cats/nutrition" element={<Nutrition />} />
<Route path="/recentnews" element={<RecentNews />} />

      </Routes>
    </Router>
  );
};

export default App;
