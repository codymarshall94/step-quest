import React, { useState } from "react";
import AdventureDisplay from "../../components/AdventureDisplay";
import AdventureLog from "../../components/AdventureLog";
import Enemy from "../../components/Enemy";
import TurnSequence from "../../components/TurnSequence";
import { ENEMIES } from "../../enemies";

function Adventure({ user, setUser }) {
  const [enemy, setEnemy] = useState(ENEMIES[0]);
  const [userLog, setUserLog] = useState("");
  const [enemyLog, setEnemyLog] = useState("");

  return (
    <div className="main-container">
      <Enemy enemy={enemy} />
      <AdventureDisplay user={user}/>
      <AdventureLog userLog={userLog} enemyLog={enemyLog} />
      <TurnSequence
        enemy={enemy}
        setEnemy={setEnemy}
        user={user}
        setUser={setUser}
        setEnemyLog={setEnemyLog}
        setUserLog={setUserLog}
      />
    </div>
  );
}

export default Adventure;
