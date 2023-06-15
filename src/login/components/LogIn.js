import React, { useState } from 'react';
import { FaMailBulk, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import '../LogInStyles.css';

const LogIn = ({ loggedInUser, setLoggedInUser }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const fetchLoginInfo = async (email, password) => {
    const loginData = {
      email: email,
      password: password,
    };
  
    const response = await fetch("http://localhost:8080/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    });
  
    if (response.ok) {
      const authenticatedUser = await response.json();
      setLoggedInUser(authenticatedUser);
      // Redirect to the profile page
      navigate(`/timeline/${authenticatedUser.id}`);
    } else {
      setErrorMessage("Invalid email or password");
    }
  };
  

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    fetchLoginInfo(email, password);
  };

  return (
    <section className="login-form-section">
      <header className="login-form">
        <h1>Login to The Slap</h1>
      </header>
      <div className="user-input-sections">
        <form onSubmit={handleLoginSubmit}>
          <section className="username-section">
            <h4>
              <FaMailBulk size={40} style={{ color: 'black', marginRight: '2rem' }} />
            </h4>
            <input type="email" placeholder="Email" className="name" name="email" />
          </section>
          <section className="password-section">
            <h4>
              <FaLock size={40} style={{ color: 'black', marginRight: '2rem' }} />
            </h4>
            <input type="password" placeholder="Password" className="name" name="password" />
          </section>
          <div className="login-button">
            <button type="submit">Login</button>
          </div>
        </form>
        {errorMessage && <div className="error-message"><p>{errorMessage}</p></div>}
        <div className="links">
          <p>
            <a href="#">Forgot Password</a> or <a href="/signUp">Sign Up</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LogIn;