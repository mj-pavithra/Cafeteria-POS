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
        {navItems.map((item, index) => (
          <button key={index} className="nav-bar-btn btn-primary ">
            <i className={`fas fa-${item.icon}`}></i>
            <p className="nav-bar-btn-txt">{item.text}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
