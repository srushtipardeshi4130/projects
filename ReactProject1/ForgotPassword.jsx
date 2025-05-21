import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Form.css';

const ForgotPassword = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const closePopup = () => setShowPopup(false);

  return (
    <div className="form-container">
      <form className="form-box" onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>
        <input type="email" placeholder="Enter your email" required />

        <button type="submit">Reset Password</button>

        <p>Remembered your password? <Link to="/login">Login</Link></p>
      </form>

      {showPopup && (       
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <h3>Password reset link sent!</h3>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;

