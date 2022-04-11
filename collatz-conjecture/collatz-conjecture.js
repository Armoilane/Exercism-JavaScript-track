/**
 * Take an integer.
 * Throw if it isn't positive by nature.
 * If it's even, divide by 2
 * If it's odd, multiply by 3 and add 1
 * Count the number of cycles for the n to reach 1
 * @param {Number} number any positive integer
 * @returns {Number} number of cycles it took to get to 1
 */
export const steps = number => {
  if (number < 1) {
    throw Error("Only positive numbers are allowed")
  }

  let num = number
  let steps = 0

  do {
    if (num % 2 === 0) {
      num = num / 2
      steps++
    } else if (num > 2) {
      num = 3 * num + 1
      steps++
    }
  } while (num > 1)

  return steps
}
