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
            <i className="fas fa-info-circle"></i>
            <a href="/admin-dashboard">
              <p className="side-bar-body-btn-txt">Dashboard</p>
            </a>
          </button>
          <button className="side-bar-body-btn btn btn-primary">
            <i className="fas fa-list"></i>
            <a href="/admin-menu">
              <p className="side-bar-body-btn-txt">Menu</p>
            </a>
          </button>
          <button className="side-bar-body-btn btn btn-primary">
            <i className="fas fa-clipboard-list"></i>
            <a href="/admin-order-list">
              <p className="side-bar-body-btn-txt">Order List</p>
            </a>
          </button>
          <button className="side-bar-body-btn btn btn-primary">
            <i className="fas fa-users"></i>
            <a href="/admin-customer-list">
            <p className="side-bar-body-btn-txt">Customers</p>
            </a>
          </button>
          <button className="side-bar-body-btn btn btn-primary">
            <i className="fas fa-hamburger"></i>
            <p className="side-bar-body-btn-txt">Food Details</p>
          </button>
          <button className="side-bar-body-btn btn btn-primary">
            <i className="fas fa-calendar-alt"></i>
            <p className="side-bar-body-btn-txt">Calendar</p>
          </button>
          <a href="/">
          <button className="side-bar-body-btn btn btn-primary">
            <i className="fas fa-sign-out-alt"></i>
            <p className="side-bar-body-btn-txt">Sign Out</p>
            
          </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
