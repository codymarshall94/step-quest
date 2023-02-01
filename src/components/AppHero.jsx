import React from "react";
import "../css/login.css";

function AppHero() {
  return (
    <div className="app-hero">
      <img
        className="login-image"
        src={require("../assets/images/walking.gif")}
        alt="Tindev"
      />
      <h1 className="login-title">StepQuest</h1>
    </div>
  );
}

export default AppHero;
