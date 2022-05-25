/**
 * Armstrong numbers
 * @param {Integer} n
 * @returns {Boolean}
 */
export const isArmstrongNumber = n => {
  let numbers = String(n).split('').map(Number)
  let power = numbers.length
  let powers = numbers.map(n => n ** power)
  let sumOfPowers = powers.reduce((sum, n) => sum + n, 0)

  return sumOfPowers === n
}

