import React from "react";
import AdventureDisplay from "../../components/AdventureDisplay";
import AttackOptions from "../../components/AttackOptions";
import Enemy from "../../components/Enemy";

function Adventure() {
  return (
    <div className="main-container">
      <Enemy />
      <AdventureDisplay />
      <AttackOptions />
    </div>
  );
}

export default Adventure;
