import React from "react";
import "../css/SideBar.css";

function SideBar() {
  return (
    <div className="side-bar">
      <div className="side-bar-header">
        <h3 className="side-bar-header-txt">Cafeteria</h3>
      </div>
      <div className="side-bar-body">
        <div className="side-bar-body-btns">
          <button className="side-bar-body-btn btn btn-primary">
            <i className="fas fa-list"></i>
            <p className="side-bar-body-btn-txt">Menus</p>
          </button>
          <button className="side-bar-body-btn btn btn-primary">
            <i className="fas fa-clipboard-list"></i>
            <p className="side-bar-body-btn-txt">Orders List</p>
          </button>
          <button className="side-bar-body-btn btn btn-primary">
            <i className="fas fa-info-circle"></i>
            <p className="side-bar-body-btn-txt">Order Details</p>
          </button>
          <button className="side-bar-body-btn btn btn-primary">
            <i className="fas fa-users"></i>
            <p className="side-bar-body-btn-txt">Customers</p>
          </button>
          <button className="side-bar-body-btn btn btn-primary">
            <i className="fas fa-hamburger"></i>
            <p className="side-bar-body-btn-txt">Food Details</p>
          </button>
          <button className="side-bar-body-btn btn btn-primary">
            <i className="fas fa-calendar-alt"></i>
            <p className="side-bar-body-btn-txt">Calendar</p>
          </button>
          <button className="side-bar-body-btn btn btn-primary">
            <i className="fas fa-sign-out-alt"></i>
            <p className="side-bar-body-btn-txt">Sign Out</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
