/**
 * Collatz Conjecture.
 *
 * @param {Number} number any positive integer
 * @returns {Number} number of cycles it took to get to 1
 */
export const steps = number => {
  if (number < 1) {
    throw new Error('Only positive numbers are allowed')
  }

  let num = number
  let steps = 0

  while (num > 1) {
    if (num % 2 === 0) {
      num /= 2
    } else {
      num = 3 * num + 1
    }
    steps++
  }

  return steps
}
