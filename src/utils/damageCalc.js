const user = {
  name: "Ash",
  health: 100,
  energy: 100,
  attackExp: 0,
  defenseExp: 0,
  strengthExp: 0,
  attack: 10,
  defense: 5,
  strength: 17,
};

const willAttackHit = (attacker, defender) => {
    console.log(attacker, defender)
  const { defense } = defender.enemy;
  const hitChance = attacker.attack;
  const dodgeChance = defense;
  const totalChance = hitChance + dodgeChance;
  const random = Math.random() * totalChance;
  return random < hitChance;
};

const calculateDamage = (attacker, defender) => {
  const { defense } = defender.enemy;
  const damage = Math.round(
    (attacker.attack + attacker.strength) * 0.325 - defense
  );
  return damage > 0 ? damage : 0;
};

const attack = (attacker, defender) => {
  if (!willAttackHit(attacker, defender)) {
    // if the attack misses
    return 0;
  }
  const damage = calculateDamage(attacker, defender);
  defender.health -= damage;
  return damage;
};

export const attackEnemy = (enemy) => {
  return attack(user, enemy);
};
