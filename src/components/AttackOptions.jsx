import React from "react";
import "../css/attackoptions.css";

const attackOptions = [
  {
    name: "Attack",
    energy: 100,
    multiplier: 1,
  },
  {
    name: "Heavy Attack",
    energy: 200,
    multiplier: 1.5,
  },
];

function AttackOptions({ onAttack }) {

  return (
    <div className="menu-options attack-options">
      {attackOptions.map((option, index) => (
        <div
          className="menu-option attack-option"
          key={index}
          onClick={() => onAttack(option)}
        >
          <div>
            <span>{option.name}</span>
          </div>
          <div className="attack-option-cost">
            <span
              style={{ color: "blue" }}
              className="attack-option-cost-energy"
            >
              {option.energy}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AttackOptions;
