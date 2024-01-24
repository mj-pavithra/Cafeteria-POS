import React, { useState } from "react";
import "../css/LogInCard.css";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";



function LogInCard() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
  
    // Clear previous error states
    const emailInput = document.getElementById("exampleInputEmail1");
    const passwordInput = document.getElementById("exampleInputPassword1");
    emailInput.classList.remove("email-error");
    passwordInput.classList.remove("password-error");
    emailInput.setCustomValidity("");
    passwordInput.setCustomValidity("");
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      const user = userCredential.user;
      navigate("/admin-dashboard");
      // Handle successful login, e.g., redirect or update state
    } catch (error) {
      console.error("Login error:", error);
  
      if (error.code === "auth/user-not-found" || error.code === "auth/invalid-email") {        emailInput.classList.add("email-error");
        emailInput.setCustomValidity("Invalid email");
        emailInput.reportValidity();
      }
  
      if (error.code === "auth/wrong-password") {
        // Show an error message on the password input field
        passwordInput.classList.add("password-error");
        passwordInput.setCustomValidity("Incorrect password");
        passwordInput.reportValidity();
      }
  
      // Handle other login errors
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
            <input
              type="email"
              className="form-control inputs"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="lable" htmlFor="exampleInputPassword1">
              Password
            </label>
            <input
              type="password"
              className="form-control inputs"
              id="exampleInputPassword1"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            SIGN IN
          </button>
        </form>
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
