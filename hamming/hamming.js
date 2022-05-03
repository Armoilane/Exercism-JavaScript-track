/**
 * Calculate the hamming distance between two DNA strands.
 * @param {String} strandA
 * @param {String} strandB
 * @returns {Number} hamming distance
 */
export const compute = (strandA, strandB) => {
  if (!equalLengths(strandA, strandB)) {
    throw new Error('strands must be of equal length')
  }

  const strandBNucleotides = strandB.split('')

  return strandA.split('').reduce((hammingCount, nucleotide, index) =>
    nucleotide !== strandBNucleotides[index] ? hammingCount + 1 : hammingCount
    , 0)
}

/**
 * Helper function to check if the strands are of equal length.
 * @param {String} strandA
 * @param {String} strandB
 * @return {Boolean}
 */
const equalLengths = (strandA, strandB) => strandA.length === strandB.length

