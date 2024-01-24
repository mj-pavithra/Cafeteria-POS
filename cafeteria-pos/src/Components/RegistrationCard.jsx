import React, { useState } from "react";
import "../css/RegistrationCard.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";


function RegistrationCard() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handlePasswordChange = (value) => {
    setPassword(value);
    setPasswordMatch(value === confirmPassword);
  };

  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
    setPasswordMatch(password === value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Basic password validation
    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User registered:", userCredential.user);
  
      // Display a greeting message upon successful signup
      alert("Welcome! You have successfully signed up.");
      DelayNode(2000);
      history.push("/ ");
  
      // Handle successful signup, e.g., redirect or update state
    } catch (error) {
      console.error("Signup error:", error.message);
  
      // Check if the error is due to email already being used
      if (error.code === "auth/email-already-in-use") {
        // Show an error message on the email input field
        const emailInput = document.getElementById("exampleInputEmail1");
        emailInput.classList.add("email-error");
        emailInput.setCustomValidity("Email is already in use");
        emailInput.value = "Email is already in use";
        password.value = "";
        confirmPassword.value = "";
      }
  
      // Handle signup error, e.g., show an error message to the user
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
            <input
              type="email"
              className="form-control inputs"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>
          <div className="form-group">
            <label className="label" htmlFor="exampleInputPassword1">
              Password
            </label>
            <input
              type="password"
              className={`form-control inputs ${!passwordMatch ? 'password-mismatch' : ''}`}
              id="exampleInputPassword1"
              onChange={(e) => handlePasswordChange(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="label" htmlFor="exampleInputConfirmPassword1">
              Confirm Password
            </label>
            <input
              type="password"
              className={`form-control inputs ${!passwordMatch ? 'password-mismatch' : ''}`}
              id="exampleInputConfirmPassword1"
              onChange={(e) => handleConfirmPasswordChange(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            SIGN UP
          </button>
        </form>
      </div>
      <div className="to-sign-up-div">
        <p className="to-sign-up-txt">Already have an account?</p>
        <a className="to-sign-up" href="/">
          Sign In
        </a>
      </div>
    </div>
  );
}

export default RegistrationCard;
