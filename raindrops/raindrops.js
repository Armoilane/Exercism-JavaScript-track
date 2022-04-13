const SOUNDS = {
  3: 'Pling',
  5: 'Plang',
  7: 'Plong'
}

/**
 * Raindrops!
 * @param {Number} n
 * @returns {String} Pling, Plang, Plong
 */
export const convert = (n) => {
  const nfactors = Object.keys(SOUNDS).filter(factor => n % factor === 0)

  if (nfactors.length > 0) {
    return nfactors.map(factor => SOUNDS[factor]).join('')
  }

  return n.toString()
}
