import React from "react";
import NavBar from "../Components/NavBar";

function App() {
  const navItems = [
    { icon: "home", text: "Home" },
    { icon: "user", text: "Profile" },
    { icon: "cog", text: "Settings" },
    { icon: "sign-out-alt", text: "Log Out" },
  ];

  return (
    <div className="app">
      <NavBar navItems={navItems} />
      {/* rest of your app */}
    </div>
  );
}

export default App;
