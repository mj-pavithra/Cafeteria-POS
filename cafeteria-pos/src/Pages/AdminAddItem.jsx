import React from "react";
import AddItem from "../Components/AddItem";
import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";
import "../css/AdminAddItem.css";

function AdminAddItem() {
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
            <AddItem />
        </div>
        </div>
    );
    }

export default AdminAddItem;