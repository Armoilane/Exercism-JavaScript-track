/**
 * Darts scoring
 * @param {Number} x x distance from center
 * @param {Number} y y distance from center
 * @returns {Number} score
 */
export const score = (x, y) => {
  let distance = Math.hypot(x, y)

  if (distance <= 1) return 10
  if (distance <= 5) return 5
  if (distance <= 10) return 1
  return 0
}

