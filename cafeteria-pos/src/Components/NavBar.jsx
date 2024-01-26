import React from "react";
import "../css/NavBar.css";

function NavBar({ navItems }) {
  return (
    <div className="nav-bar">
      <div className="nav-bar-bracket">
        <div className="nav-bar-logo-section">
          <img
            src="/images/preloader-new.png"
            alt="logo"
            className="nav-bar-logo"
          />
        </div>
        
          <button className="nav-bar-btn btn-primary ">
            <i className="fas fa-$home"></i>
            <p className="nav-bar-btn-txt">Home</p>
          </button>
          <button className="nav-bar-btn btn-primary ">
            <i className="fas fa-$user"></i>
            <p className="nav-bar-btn-txt">Profile</p>
          </button>
          <button className="nav-bar-btn btn-primary ">
          <a href="/">
            <i className="fas fa-$home"></i>
            <p className="nav-bar-btn-txt">Log Out</p></a>
          </button>
      </div>
    </div> 
  );
}

export default NavBar;
