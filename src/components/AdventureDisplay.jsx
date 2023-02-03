import React from "react";
import "../css/adventuredisplay.css";
import BackButton from "./BackButton";

function AdventureDisplay() {
  return (
    <div className="display-container">
      <BackButton />
      <div className="energy-container">
        <img
          src={require("../assets/images/icons/GreenPotion.png")}
          alt="Energy"
        />
        <span style={{ color: "blue" }}>300</span>
      </div>
      <div className="health-container">
        <img src={require("../assets/images/icons/Heart.png")} alt="Health" />
        <span style={{ color: "red" }}>40</span>
      </div>
    </div>
  );
}

export default AdventureDisplay;
