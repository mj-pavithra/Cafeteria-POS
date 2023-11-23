import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogInPage from "./Pages/LogInPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LogInPage/>}/>
          <Route path="/home" element={<h1>Home</h1>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
