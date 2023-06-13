import React, { useState } from 'react';
import { FaMailBulk, FaLock } from 'react-icons/fa';

import '../SignUpStyles.css';
import { useNavigate } from 'react-router-dom';

const SignUp = ({ setLoggedInUser }) => {
  const [newUser, setNewUser] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    bio: '',
    email: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validateForm = () => {
    let formIsValid = true;
    const errors = {};

    // Check if required fields are filled
    if (!newUser.username.trim()) {
      formIsValid = false;
      errors.username = 'Please provide a username';
    }
    if (!newUser.email.trim()) {
      formIsValid = false;
      errors.email = 'Please provide an email';
    }
    if (!newUser.password.trim()) {
      formIsValid = false;
      errors.password = 'Please provide a password';
    }
    if (!newUser.confirmPassword.trim()) {
      formIsValid = false;
      errors.confirmPassword = 'Please confirm your password';
    }

    // Check if passwords match
    if (newUser.password !== newUser.confirmPassword) {
      formIsValid = false;
      errors.confirmPassword = 'Passwords do not match';
    }

    setErrors(errors);
    return formIsValid;
  };

  const fetchSignUpInfo = async () => {
    const signUpData = {
      username: newUser.username,
      password: newUser.password,
      bio: newUser.bio,
      email: newUser.email
    };

    const response = await fetch('http://localhost:8080/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(signUpData)
    });

    if (response.ok) {
      const authenticatedNewUser = await response.json();
      setLoggedInUser(authenticatedNewUser);
      // Redirect to the profile page
      navigate(`/profile/${authenticatedNewUser.id}`);
    } else {
      setErrorMessage('Error signing up');
    }
  };

  const handleSignUpSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      fetchSignUpInfo();
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  return (
    <div>
      <section className="signin-form-section">
        <header className="signin-form">
          <h1>Sign up to The Slap</h1>
        </header>
        <div className="signin-user-input-sections">
          <form onSubmit={handleSignUpSubmit}>
            <section className="email-section">
              <h4>
                <FaMailBulk size={40} style={{ color: 'black', marginRight: '2rem' }} />
              </h4>
              <input
                type="text"
                placeholder="Email Address"
                className="name"
                name="email"
                value={newUser.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </section>

            <section className="username-section">
              <h4>
                <FaMailBulk size={40} style={{ color: 'black', marginRight: '2rem' }} />
              </h4>
              <input
                type="text"
                placeholder="Username"
                className="name"
                name="username"
                value={newUser.username}
                onChange={handleChange}
              />
              {errors.username && <p className="error-message">{errors.username}</p>}
            </section>

            <section className="password-section">
              <h4>
                <FaLock size={40} style={{ color: 'black', marginRight: '2rem' }} />
              </h4>
              <input
                type="password"
                placeholder="Password"
                className="name"
                name="password"
                value={newUser.password}
                onChange={handleChange}
              />
              {errors.password && <p className="error-message">{errors.password}</p>}
            </section>

            <section className="confirm-password-section">
              <h4>
                <FaLock size={40} style={{ color: 'black', marginRight: '2rem' }} />
              </h4>
              <input
                type="password"
                placeholder="Confirm Password"
                className="name"
                name="confirmPassword"
                value={newUser.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
            </section>

            <div className="signin-button">
              <button type="submit">Sign Up</button>
            </div>
          </form>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <div className="terms">
            <p>Terms and Conditions</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;