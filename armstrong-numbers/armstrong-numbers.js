/**
 * Armstrong numbers
 * @param {Integer} n
 * @returns {Boolean}
 */
export const isArmstrongNumber = n => {
  let digits = String(n).split('').map(Number)
  let power = digits.length

  return n === digits.map(n => n ** power).reduce((sum, n) => sum + n, 0)
}

