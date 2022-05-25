/**
 * Transform scrabble scores to a new system.
 *
 * @param {Object} old holds the old in form { 1: ['A', 'E'], 2: ['D'], 3: .. }
 * @returns {Object} in the form { a: 1, d: 2, e: 1 .. }
 */

export const transform = old => {
  let transformed = {}

  for (const [key, value] of Object.entries(old)) {
    value.map(char => transformed[char.toLowerCase()] = Number(key))
  }

  return transformed
};

