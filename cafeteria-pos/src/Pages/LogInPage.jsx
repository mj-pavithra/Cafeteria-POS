import React from "react";
import HeadBar from "../Components/HeadBar";
import LogInCard from "../Components/LogInCard";
import "../css/LogInPage.css";

function LogInPage() {
  return (
    <div className="login-page">
      <HeadBar />
        <div className="login-card">
            <LogInCard />
            </div>
    </div>
  );
}

export default LogInPage;
