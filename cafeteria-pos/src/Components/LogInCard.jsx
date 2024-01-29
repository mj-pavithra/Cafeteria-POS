import React, { useState } from "react";
import "../css/LogInCard.css";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function LogInCard() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");


  const handleLogin = async (e) => {
    e.preventDefault();

    // Clear previous error states
    setEmailError("");
    setPasswordError("");

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in:", userCredential);

      // Set login state or redirect to dashboard
      navigate("/admin-dashboard");
    } catch (error) {
      console.error("Login error:", error);

      // Handle specific error codes
      switch (error.code) {
        case "auth/user-not-found":
        case "auth/invalid-email":
          setEmailError("Invalid email");
          break;
        case "auth/wrong-password":
          setPasswordError("Incorrect password");
          break;
        default:
          console.error("Error:", error.message);
          alert("Login failed. Please try again later.");
          break;
      }
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Log In</h5>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label className="lable" htmlFor="exampleInputEmail1">
              User Name
            </label>
            <span className="email-error-txt error">{emailError}</span>
            <input
              type="email"
              className={`form-control inputs ${emailError ? 'input-error' : ''}`}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="lable" htmlFor="exampleInputPassword1">
              Password
            </label>
            <span className="password-error-txt error">{passwordError}</span>
            <input
              type="password"
              className={`form-control inputs ${passwordError ? 'input-error' : ''}`}
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            SIGN IN
          </button>
        </form>
        <div className="form-group">
            <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
          </div>
        <div className="to-sign-up-div">
          <p className="to-sign-up-txt">Don't have an account?</p>
          <a className="to-sign-up" href="/register">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}

export default LogInCard;
