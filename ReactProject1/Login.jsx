import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Form.css';

const Login = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true); 
  };

  const closePopup = () => setShowPopup(false);

  return (
    <div className="form-container">
      <form className="form-box" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />

        <div className="form-options">
          <label className="remember-label">
            Remember
            <input type="checkbox" />
          </label>
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>

        <button type="submit">Login</button>

        <p>Don't have an account? <Link to="/register">Register</Link></p>
      </form>

      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <h3>Login Successful!</h3>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
