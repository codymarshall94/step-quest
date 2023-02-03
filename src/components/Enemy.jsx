import React, { useState } from "react";
import { ENEMIES } from "../enemies";

function Enemy() {
  const [enemy, setEnemy] = useState(ENEMIES[0]);

  return (
    <div className="enemy-container">
      <div className="enemy-name game-font">{enemy.name}</div>
      <div style={{ color: "red" }} className="enemy-health game-font-sub">
        {enemy.health}
      </div>
    </div>
  );
}

export default Enemy;
