import React from "react";
import { Link } from "react-router-dom";
import "../css/HomePage.css"; // Import the CSS file for styling

function HomePage() {
  return (
    <div className="home-page-container">
      <div className="home-page-content">
        <h3 className="welcome">Welcome</h3>
        <h1 className="name-of-the-cafe">Cafeteria</h1>
        <div className="buttons-container1">
          <Link to="/login" className=" btn-primary2">Login</Link>
          <Link to="/register" className="btn-primary2">Register</Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
