const calculateAttackChance = (attacker, defender) => {
  const defenseSkill = defender.skills.find(skill => skill.name === 'Defense');
  const attackSkill = attacker.skills.find(skill => skill.name === 'Attack');
  const hitChance = attackSkill.level;
  const dodgeChance = defenseSkill.level;
  const totalChance = hitChance + dodgeChance;
  const random = Math.random() * totalChance;
  return random < hitChance;
};

const calculateDamageDealt = (attacker, defender) => {
  const attackSkill = attacker.skills.find(skill => skill.name === 'Attack').level;
  const strengthSkill = attacker.skills.find(skill => skill.name === 'Strength').level;
  const defenseSkill = defender.skills.find(skill => skill.name === 'Defense').level;
  const maxDefensePercentage = 0.8;
  const defensePercentage = Math.min(defenseSkill / 100, maxDefensePercentage);
  const damage = Math.round((attackSkill + strengthSkill) * 0.325 * (1 - defensePercentage));
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
  console.log('attacker', attacker);
  return performAttack(attacker, defender);
};
