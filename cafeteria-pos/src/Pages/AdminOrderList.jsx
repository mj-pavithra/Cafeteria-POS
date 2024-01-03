import "../css/AdminOrderList.css";
import React, { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";
import OrderList from "../Components/OrderList";

function AdminOrderList() {
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
            <OrderList />
        </div>
        </div>
    );
    }

export default AdminOrderList;
