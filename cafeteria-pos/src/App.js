import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogInPage from "./Pages/LogInPage";
import RegistrationPage from "./Pages/RegistrationPage";
import AdminDashboard from "./Pages/AdminDashboard";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogInPage/>}/>
          <Route path="/home" element={<h1>Home</h1>}/>
          <Route path="/register" element={<RegistrationPage/>}/>
          <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
