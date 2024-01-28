import React, { useState } from "react";
import "../css/RegistrationCard.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function RegistrationCard() {
  const navigate = useNavigate(); // Use the useNavigate hook
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [warning, setWarning] = useState("");

  const handlePasswordChange = (value) => {
    setPassword(value);
    setPasswordMatch(value === confirmPassword);
    // Clear password error when typing
    setPasswordError("");
  };

  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
    setPasswordMatch(password === value);
    // Clear password error when typing
    setPasswordError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for blank fields
    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      setWarning("All fields are required");
      return;
    } else {
      setWarning("");
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      setPasswordMatch(false);
      setPasswordError("Passwords do not match");
      return;
    } else {
      setPasswordMatch(true);
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User registered:", userCredential.user);

      // Display a greeting message upon successful signup
      alert("Welcome! You have successfully signed up.");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Signup error:", error.message);

      // Handle email already in use error
      if (error.code === "auth/email-already-in-use") {
        setEmailError("Email is already in use");
      }
    }
  };

  return (
    <div className="reg-card">
      <div className="card-body">
        <h5 className="card-title">Register</h5>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="label" htmlFor="exampleInputEmail1">
              Email
            </label>
            <span className="email-error-txt error">{emailError}</span>
            <input
              type="email"
              className={`form-control inputs ${emailError ? 'input-error' : ''}`}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError(""); // Clear email error when typing
              }}
            />
          </div>
          <div className="form-group">
            <label className="label" htmlFor="exampleInputPassword1">
              Password
            </label>
            <span className="password-error-txt error">{passwordError}</span>
            <input
              type="password"
              className={`form-control inputs ${passwordError || !passwordMatch ? 'input-error' : ''}`}
              id="exampleInputPassword1"
              onChange={(e) => handlePasswordChange(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="label" htmlFor="exampleInputConfirmPassword1">
              Confirm Password
            </label>
            <span className="re-password-txt error">{passwordError}</span>
            <input
              type="password"
              className={`form-control inputs ${passwordError || !passwordMatch ? 'input-error' : ''}`}
              id="exampleInputConfirmPassword1"
              onChange={(e) => handleConfirmPasswordChange(e.target.value)}
            />
          <span className="warning-txt error">{warning}</span>
          </div>
          <button type="submit" className="btn btn-primary">
            SIGN UP
          </button>
        </form>
      </div>
      <div className="to-sign-up-div">
        <p className="to-sign-up-txt">Already have an account?</p>
        <a className="to-sign-up" href="/login">
          Sign In
        </a>
      </div>
    </div>
  );
}

export default RegistrationCard;
