import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogInPage from "./Pages/LogInPage";
import RegistrationPage from "./Pages/RegistrationPage";
import AdminDashboard from "./Pages/AdminDashboard";
import AdminMenu from './Pages/AdminMenu';
import AdminOrderList from "./Pages/AdminOrderList";
import AdminCusList from "./Pages/AdminCusList";
import AdminAddItem from "./Pages/AdminAddItem";
import HomePage from './Pages/HomePage';
import ForgotPasswordPage from './Pages/ForgotPasswordPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LogInPage />} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-menu" element={<AdminMenu />} />
        <Route path="/admin-order-list" element={<AdminOrderList />} />
        <Route path="/admin-customer-list" element={<AdminCusList />} />
        <Route path="/add-item" element={<AdminAddItem />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
