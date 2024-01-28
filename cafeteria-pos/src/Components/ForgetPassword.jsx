import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import "../css/ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [resetMessage, setResetMessage] = useState("");
  const [error, setError] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await auth.sendPasswordResetEmail(email);
      setResetMessage("Password reset email sent. Please check your inbox.");
      setError("");
    } catch (error) {
      setError("Error sending password reset email. Please try again.");
      console.error("Forgot password error:", error);
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleResetPassword}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Reset Password</button>
        {error && <div className="error-message">{error}</div>}
        {resetMessage && <div className="success-message">{resetMessage}</div>}
        <p>Remember your password? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
}

export default ForgotPassword;
