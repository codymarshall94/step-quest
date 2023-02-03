import React from "react";
import "../css/attackoptions.css";
import { attackEnemy } from "../utils/damageCalc";
import { ENEMIES } from "../enemies";

const attackOptions = [
  {
    name: "Attack",
    energy: 100,
    damage: 10,
  },
  {
    name: "Heavy Attack",
    energy: 200,
    damage: 30,
  },
];

const enemy = ENEMIES[0];

function AttackOptions() {

  const handleAttack = (option) => {
    console.log(attackEnemy({enemy}));
  };

  return (
    <div className="menu-options attack-options">
      {attackOptions.map((option, index) => (
        <div
          className="menu-option attack-option"
          key={index}
          onClick={() => handleAttack()}
        >
          <div>
            <span>{option.name}</span>
          </div>
          <div className="attack-option-cost">
            <span
              style={{ color: "green" }}
              className="attack-option-cost-damage"
            >
              {option.damage}
            </span>
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
