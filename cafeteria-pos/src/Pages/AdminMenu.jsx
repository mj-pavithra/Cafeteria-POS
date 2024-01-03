import React from "react";
import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";
import Menu from "../Components/Menu";

function AdminMenu() {
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
            <Menu/>
        </div>
        </div>
    );
}

export default AdminMenu;