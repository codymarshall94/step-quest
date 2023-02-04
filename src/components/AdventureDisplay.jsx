import React from "react";
import "../css/adventuredisplay.css";
import BackButton from "./BackButton";

function AdventureDisplay({ user }) {
  const currentHealth = user.health > 0 ? user.health : 0;

  return (
    <div className="display-container">
      <BackButton />
      <div className="energy-container">
        <img
          src={require("../assets/images/icons/GreenPotion.png")}
          alt="Energy"
        />
        <span style={{ color: "blue" }}>{user.energy}</span>
      </div>
      <div className="health-container">
        <img src={require("../assets/images/icons/Heart.png")} alt="Health" />
        <span style={{ color: "red" }}>{currentHealth}</span>
      </div>
    </div>
  );
}

export default AdventureDisplay;