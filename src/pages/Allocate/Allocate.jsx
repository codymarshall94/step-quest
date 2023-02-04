import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../../components/BackButton";
import "./allocate.css";

const calculateExperience = (level) => {
  let baseLevelExp = 10000; // experience at level 1
  for (let i = 1; i <= level; i++) {
    // loop through each level
    baseLevelExp = Math.round(baseLevelExp * 1.1); // increase experience by 10%
    console.log(baseLevelExp);
  }
  const nextLevel = baseLevelExp * 1.1; // calculate experience for next level
  const experienceNeeded = Math.round(nextLevel - baseLevelExp); // calculate experience needed for next level
  console.log(experienceNeeded);
};

function Allocate({ user }) {
  const { health } = user;
  const attackLevel = user.skills.find((skill) => skill.name === "Attack").level;
  const strengthLevel = user.skills.find(skill => skill.name === "Strength").level;
  const defenseLevel = user.skills.find(skill => skill.name === "Defense").level;
  
  const userSkills = [
    {
      name: "Attack",
      level: attackLevel,
      icon: require("../../assets/images/icons/IronSword.png"),
    },
    {
      name: "Strength",
      level: strengthLevel,
      
      icon: require("../../assets/images/icons/Belt.png"),
    },
    {
      name: "Defense",
      level: defenseLevel,
      
      icon: require("../../assets/images/icons/IronArmor.png"),
    },
    {
      name: "Vitality",
      level: health,
      
      icon: require("../../assets/images/icons/Heart.png"),
    },
  ];

  return (
    <div className="main-container">
      <div className="allocate-skill-container">
        <div className="title-container">
          <h1 className="allocate-skill-title game-font">Allocation</h1>
          <p className="game-font-sub">
            Allocate your step points to increase your experience in a skill.
          </p>
        </div>
        <div className="allocate-skill-list">
          {userSkills.map((skill, index) => (
            <Link to={`/allocate/${skill.name}`} className="link" key={index}>
              <div className="allocate-skill-item menu-option">
                <img src={skill.icon} alt={skill.name} />
                <span className="game-font-sub">{skill.name}</span>
                <span className="game-font">{skill.level}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <BackButton />
    </div>
  );
}

export default Allocate;
