import React from "react";
import "../css/Dashboard.css";
import { Link } from "react-router-dom";

import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

Chart.register(ArcElement);

const state = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Rainfall",
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 1,
      data: [65, 59, 80, 81, 56, 34, 97, 25, 69, 75, 62, 45],
    },
  ],
};  

function Dashboard() {
    return (
      <div className="dashboard">
        <div className="dashboard-header">
          <h3 className="dashboard-header-txt">Dashboard</h3>
        </div>
        <div className="dashboard-body">
          <div className="dashboard-body-row">
            <div className="dashboard-body-card">
              <p>Total Orders: {/* Add total orders count here */}</p>
            </div>
            <div className="dashboard-body-card">
              <p>Received Orders: {/* Add received orders count here */}</p>
            </div>
            <div className="dashboard-body-card">
              <p>Canceled Orders: {/* Add canceled orders count here */}</p>
            </div>
          </div>
          <div className="dashboard-body-row">
            <div className="dashboard-body-card">
              <Pie
                data={state}
                options={{
                  title: {
                    display: true,
                    text: "Average Rainfall per month",
                    fontSize: 16,
                  },
                  legend: {
                    display: true,
                    position: "right",
                  },
                }}
              />
            </div>
            <div className="dashboard-body-card">
              {/* Add bar chart here */}
            </div>
          </div>
        </div>
      </div>
    );
    }

export default Dashboard;