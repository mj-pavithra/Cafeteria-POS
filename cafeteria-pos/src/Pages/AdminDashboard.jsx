import React from "react";
import Dashboard from "../Components/Dashboard";
import HeadBar from "../Components/HeadBar";
import SideBar from "../Components/SideBar";
import "../css/AdminDashboard.css";

function AdminDashboard() {
    return (
        <div className="admin-dashboard">
        <HeadBar />
        <div className="admin-dashboard-body">
            <SideBar />
            <Dashboard />
        </div>
        </div>
    );
    }
    export default AdminDashboard;
