<<<<<<< HEAD
//
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = () => {
  throw new Error('Remove this statement and implement this function');
};

export class Character {
  static rollAbility() {
    throw new Error('Remove this statement and implement this function');
  }

  get strength() {
    throw new Error('Remove this statement and implement this function');
  }

  get dexterity() {
    throw new Error('Remove this statement and implement this function');
  }

  get constitution() {
    throw new Error('Remove this statement and implement this function');
  }

  get intelligence() {
    throw new Error('Remove this statement and implement this function');
  }

  get wisdom() {
    throw new Error('Remove this statement and implement this function');
  }

  get charisma() {
    throw new Error('Remove this statement and implement this function');
  }

  get hitpoints() {
    throw new Error('Remove this statement and implement this function');
  }
}
=======
/**
 * Ability modifier to calculate hitpoints.
 * @param {Integer} n
 * @returns {Integer} between -4 and 4
 */
export const abilityModifier = n => {
  if (n < 3) {
    throw new Error('Ability scores must be at least 3')
  }

  if (n > 18) {
    throw new Error('Ability scores can be at most 18')
  }

  return Math.floor((n - 10) / 2)
}


/**
 * D&D character generator
 */
export class Character {
  static strength = Character.rollAbility()
  static dexterity = Character.rollAbility()
  static constitution = Character.rollAbility()
  static intelligence = Character.rollAbility()
  static wisdom = Character.rollAbility()
  static charisma = Character.rollAbility()

  static rollAbility() {
    let dies = []

    for (let i = 0; i < 4; i++) {
      dies.push(Math.floor(Math.random() * 5 + 1))
    }

    return dies.sort((a, b) => b - a).slice(0, 3).reduce((sum, n) => sum + n)
  }

  get strength() {
    return Character.strength
  }

  get dexterity() {
    return Character.dexterity
  }

  get constitution() {
    return Character.constitution
  }

  get intelligence() {
    return Character.intelligence
  }

  get wisdom() {
    return Character.wisdom
  }

  get charisma() {
    return Character.charisma
  }

  get hitpoints() {
    return 10 + abilityModifier(Character.constitution)
  }
}

>>>>>>> 061ec7c01fb23dd80d8753bd509931a6247e6dc4
