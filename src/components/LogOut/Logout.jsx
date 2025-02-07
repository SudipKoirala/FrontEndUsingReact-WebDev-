import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Perform logout logic here, e.g., clearing tokens or session data
    console.log("User logged out");
    // Redirect to Login/Signup page
    navigate('/');
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default Logout;
