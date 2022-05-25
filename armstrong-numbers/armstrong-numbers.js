/**
 * Armstrong numbers
 * @param {Integer} n
 * @returns {Boolean}
 */
export const isArmstrongNumber = n => {
  let numbers = String(n).split('').map(Number)
  let power = numbers.length

  return n === numbers.map(n => n ** power).reduce((sum, n) => sum + n, 0)
}

