import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogInPage from "./Pages/LogInPage";
import RegistrationPage from "./Pages/RegistrationPage";
import AdminDashboard from "./Pages/AdminDashboard";
import AdminMenu from './Pages/AdminMenu';
import AdminOrderList from "./Pages/AdminOrderList";
import AdminCusList from "./Pages/AdminCusList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/home" element={<h1>Home</h1>} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-menu" element={<AdminMenu />} />
        <Route path="/admin-order-list" element={<AdminOrderList />} />
        <Route path="/admin-customer-list" element={<AdminCusList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
