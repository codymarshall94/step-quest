import React, { useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../../components/BackButton";
import StepCount from "../../components/StepCount";

function Skill({ user }) {
  const [skillExp, setSkillExp] = useState(0);
  const { name } = useParams();
  const skill = user.skills.find((skill) => skill.name === name);

  return (
    <div className="main-container">
      <BackButton />
      <StepCount points={user.stepPoints} />
      <div className="skill-page-info small-margin-top">
        <h1 className="game-font small-padding">{name}</h1>
        <span>Level: {skill.level}</span>
        <p className="game-font-sub small-padding">{skill.description}</p>
      </div>
      <div className="skill-page-experience">
        <div className="skill-page-experience-bar">
          <div className="skill-page-experience-bar-fill"></div>
        </div>
        <div className="skill-page-experience-text">
          <span>Current XP: {skill.exp}</span>
          <span>XP Needed {skill.expToNextLevel}</span>
        </div>
      </div>
      <div className="skill-page-range-slider">
        <h1 className="game-font small-padding">Allocate</h1>
        <p className="game-font-sub small-padding">
          Allocate your step points to increase your experience in a skill.
        </p>
        <div className="skill-page-range-slider-container">
          <input
            type="range"
            min="0"
            max={user.stepPoints}
            value={skillExp}
            onChange={(e) => {
              setSkillExp(e.target.value);
            }}
            className="skill-page-range-slider-input"
          />
          <div className="skill-page-range-slider-value">
            <span>{skillExp}</span>
          </div>
        </div>
      </div>
      <div className="skill-page-allocate-button">
        <button className="game-btn game-font-sub">Confirm XP</button>
      </div>
    </div>
  );
}

export default Skill;
