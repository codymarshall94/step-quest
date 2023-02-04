const calculateAttackChance = (attacker, defender) => {
  const { defense } = defender;
  const hitChance = attacker.attack;
  const dodgeChance = defense;
  const totalChance = hitChance + dodgeChance;
  const random = Math.random() * totalChance;
  return random < hitChance;
};

const calculateDamageDealt = (attacker, defender) => {
  const maxDefensePercentage = 0.8;
  const defensePercentage = Math.min(defender.defense / 100, maxDefensePercentage);
  const damage = Math.round((attacker.attack + attacker.strength) * 0.325 * (1 - defensePercentage));
  return damage > 0 ? damage : 0;
};


export const performAttack = (attacker, defender) => {
  if (!calculateAttackChance(attacker, defender)) {
    // if the attack misses
    return 0;
  }
  const damage = calculateDamageDealt(attacker, defender);
  return damage;
};

export const attackEnemy = (attacker, defender) => {
  return performAttack(attacker, defender);
};
