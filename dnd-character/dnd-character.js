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

