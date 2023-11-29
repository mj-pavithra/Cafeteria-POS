import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogInPage from "./Pages/LogInPage";
import RegistrationPage from "./Pages/RegistrationPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogInPage/>}/>
          <Route path="/home" element={<h1>Home</h1>}/>
          <Route path="/register" element={<RegistrationPage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
