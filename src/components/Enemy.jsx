import React from "react";

function Enemy({enemy}) {

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
