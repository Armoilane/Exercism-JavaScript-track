/**
 * Collatz Conjecture.
 *
 * @param {Number} n any positive integer
 * @returns {Number} number of cycles it took to get to 1
 */
export const steps = n => {
  if (n < 1) {
    throw new Error('Only positive numbers are allowed')
  }

  return n > 1 ? steps(!(n % 2) ? n / 2 : 3 * n + 1) + 1 : 0
}
