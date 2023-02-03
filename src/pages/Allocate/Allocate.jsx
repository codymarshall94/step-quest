import React from "react";
import BackButton from "../../components/BackButton";
import "./allocate.css";

const skills = [
  {
    name: "Attack",
    icon: require("../../assets/images/icons/IronSword.png"),
    level: 1,
  },
  {
    name: "Strength",
    icon: require("../../assets/images/icons/Belt.png"),
    level: 1,
  },
  {
    name: "Defense",
    icon: require("../../assets/images/icons/IronArmor.png"),
    level: 1,
  },
  {
    name: "Vitality",
    icon: require("../../assets/images/icons/Heart.png"),
    level: 1,
  },
  {
    name: "Energy",
    icon: require("../../assets/images/icons/GreenPotion.png"),
    level: 1,
  },
];

function Allocate() {
  return (
    <div className="main-container">
      <div className="allocate-skill-container">
        <div className="title-container">
          <h1 className="allocate-skill-title game-font">Allocation</h1>
          <p className="game-font-sub">
            Allocate your step points to increase your skill levels or to allow
            for more energy in your adventure.
          </p>
        </div>
        <div className="allocate-skill-list">
          {skills.map((skill, index) => (
            <div className="allocate-skill-item menu-option" key={index}>
              <img src={skill.icon} alt={skill.name} />
              <span className="game-font-sub">{skill.name}</span>
              <span className="game-font">{skill.level}</span>
            </div>
          ))}
        </div>
      </div>
      <BackButton />
    </div>
  );
}

export default Allocate;
