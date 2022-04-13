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
export const convert = n => {
  return Object.keys(SOUNDS)
    .filter(factor => n % factor === 0)
    .map(factor => SOUNDS[factor])
    .join('')
    || n.toString()
}
