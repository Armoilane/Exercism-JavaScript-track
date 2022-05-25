/**
 * Perfect numbers - Nicomachus' classification of numbers based on their
 * aliquot sum.
 * @param {Integer} n a natural number
 * @returns {String} perfect, abundant or deficient
 */
export const classify = n => {
  if (n < 1) {
    throw new Error('Classification is only possible for natural numbers.')
  }

  let sumOfFactors = sumFactors(n)

  if (sumOfFactors < n) {
    return 'deficient'
  }

  if (sumOfFactors > n) {
    return 'abundant'
  }

  return 'perfect'
}


/**
 *  Returns the sum of factors of n
 *  @param {Integer} n
 *  @returns {Integer}
 */
const sumFactors = n => {
  let factors = []

  for (let i = 1; i < n; i++) {
    if (!(n % i)) {
      factors.push(i)
    }
  }

  return factors.reduce((sum, n) => sum + n, 0)
}

