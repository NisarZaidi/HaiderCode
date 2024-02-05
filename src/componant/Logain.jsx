import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Logain = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Assuming your login logic here, set isLoggedIn to true upon successful login
    setLoggedIn(true);
    // Redirect to the home page
    navigate('/');
  };

  return (
    <div>
      <h2>Login Page</h2>
      {isLoggedIn ? (
        <p>Welcome! You are now logged in.</p>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default Logain;
