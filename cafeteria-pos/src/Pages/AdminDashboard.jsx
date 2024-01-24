import React from "react";
import Dashboard from "../Components/Dashboard";
import SideBar from "../Components/SideBar";
import "../css/AdminDashboard.css";
import NavBar from "../Components/NavBar";

function AdminDashboard() {
  const navItems = [
    { icon: "home", text: "Home" },
    { icon: "user", text: "Profile" },
    { icon: "cog", text: "Settings" },
    { icon: "sign-out-alt", text: "Log Out" },
  ];
  return (
    <div className="admin-dashboard">
      <SideBar />
      <div className="admin-dashboard-body">
        <NavBar navItems={navItems} />
        <Dashboard />
      </div>
    </div>
  );
}
export default AdminDashboard;
