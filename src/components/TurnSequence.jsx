import React, { useState, useEffect } from "react";
import { attackEnemy } from "../utils/damageCalc";
import { performAttack } from "../utils/damageCalc";
import AttackOptions from "./AttackOptions";

const TurnSequence = ({
  enemy,
  setEnemy,
  user,
  setUser,
  setUserLog,
  setEnemyLog,
}) => {
  const [playerTurn, setPlayerTurn] = useState(true);
  const { health } = user;

  useEffect(() => {
    if (!playerTurn) {
      handleEnemyTurn();
    }
  }, [playerTurn]);

  const handleAttack = (attackOption) => {
    if (user.energy - attackOption.energy < 0) {
      setUserLog(
        "You don't have enough energy to perform that attack! Refill your energy by purchasing with Step Points."
      );
      setEnemyLog("");
      return;
    }
    setUser({ ...user, energy: user.energy - attackOption.energy });
    const damage = attackEnemy(user, enemy);
    setUserLog(`You attack the enemy for ${damage} damage.`);
    if (enemy.health - damage <= 0) {
      setEnemy({ ...enemy, health: 0 });
    } else {
      setEnemy({ ...enemy, health: enemy.health - damage });
    }
    setPlayerTurn(false);
  };

  const enemyAttack = () => {
    const damage = performAttack(enemy, user);
    if (health - damage <= 0) {
      setUser({ ...user, health: 0 });
    } else {
      setUser({...user, health: health - damage});
    }
    setEnemyLog(`The ${enemy.name} attacks you for ${damage} damage.`);
    setPlayerTurn(true);
  };

  const handleEnemyTurn = () => {
    if (enemy.health > 0) {
      enemyAttack();
    } else {
      setPlayerTurn(true);
      setEnemyLog(`The ${enemy.name} has been defeated!`);
    }
  };

  return (
    <div>
      <AttackOptions onAttack={handleAttack} />
    </div>
  );
};

export default TurnSequence;
