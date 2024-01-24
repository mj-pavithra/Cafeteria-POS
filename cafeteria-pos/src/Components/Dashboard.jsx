import React from "react";
import "../css/Dashboard.css";
import { Link } from "react-router-dom";


import { Pie, Bar } from "react-chartjs-2";
import { Chart,BarController, ArcElement, CategoryScale, LinearScale } from "chart.js";

Chart.register(ArcElement, CategoryScale, LinearScale, BarController);



function Dashboard() {
    const state = {
      labels: [
        "Beverages",
        "Breakfast",
        "Lunch",
        "Dinner",
        "Desserts",
        "Snacks",
      ],
      datasets: [
        {
          label: "Food Category Sales",
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
          ],
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 1,
          data: [300, 50, 100, 40, 120, 200], // replace with actual data
        },
      ],
    };
    return (
      <div className="dashboard">
        <div className="dashboard-header">
          <h3 className="dashboard-header-txt">Dashboard</h3>
        </div>
        <div className="dashboard-body">
          <div className="dashboard-body-row">
            <div className="dashboard-body-card">
              <p>Total Orders: 387</p>
            </div>
            <div className="dashboard-body-card">
              <p>Received Orders: 274</p>
            </div>
            <div className="dashboard-body-card">
              <p>Canceled Orders: 13</p>
            </div>
          </div>
          <div className="dashboard-body-row">
            <div className="dashboard-body-card">
              <Pie
                data={state}
                options={{
                  title: {
                    display: true,
                    text: "Cafeteria Sales by Food Category",
                    fontSize: 16,
                  },
                  legend: {
                    display: true,
                    position: "right",
                  },
                  tooltips: {
                    callbacks: {
                      label: function (tooltipItem, data) {
                        let dataset = data.datasets[tooltipItem.datasetIndex];
                        let meta = dataset._meta[Object.keys(dataset._meta)[0]];
                        let total = meta.total;
                        let currentValue = dataset.data[tooltipItem.index];
                        let percentage = parseFloat(
                          ((currentValue / total) * 100).toFixed(1)
                        );
                        return currentValue + " (" + percentage + "%)";
                      },
                      title: function (tooltipItem, data) {
                        return data.labels[tooltipItem[0].index];
                      },
                    },
                  },
                  plugins: {
                    datalabels: {
                      formatter: (value, ctx) => {
                        let sum = 0;
                        let dataArr = ctx.chart.data.datasets[0].data;
                        dataArr.map((data) => {
                          sum += data;
                        });
                        let percentage = ((value * 100) / sum).toFixed(2) + "%";
                        return percentage;
                      },
                      color: "#fff",
                    },
                  },
                }}
              />
            </div>
            <div className="dashboard-body-card">
              <Bar
                data={state}
                options={{
                  title: {
                    display: true,
                    text: "Cafeteria Sales by Food Category",
                    fontSize: 16,
                  },
                  legend: {
                    display: true,
                    position: "right",
                  },
                  scales: {
                    yAxes: [
                      {
                        ticks: {
                          beginAtZero: true,
                        },
                      },
                    ],
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
    }

export default Dashboard;