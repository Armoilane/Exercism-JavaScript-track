/**
 * Count nucleotides in a gived strand of RNA
 * @param {String} strand
 * @returns {String} The counts separated with spaces '0 0 0 0'
 */
export function countNucleotides(strand) {
  const VALIDNUCLEOTIDES = ['A', 'C', 'G', 'T']
  const COUNTS = {A: 0, C: 0, G: 0, T: 0}
  const nucleotides = strand.split('')

  if (!nucleotides.every(n => VALIDNUCLEOTIDES.includes(n))) {
    throw new Error('Invalid nucleotide in strand')
  }

  nucleotides.map(nucleotide => COUNTS[nucleotide]++)

  return Object.values(COUNTS).join(' ')

}

