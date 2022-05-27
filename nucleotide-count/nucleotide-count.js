/**
 * Count nucleotides in a gived strand of RNA
 * @param {String} strand
 * @returns {String} The counts separated with spaces '0 0 0 0'
 */
export function countNucleotides([...strand]) {
  const NUCLEOTIDES = ['A', 'C', 'G', 'T']

  return strand.reduce((counts, nucleotide) => {
    if (!NUCLEOTIDES.includes(nucleotide)) {
      throw new Error('Invalid nucleotide in strand')
    }

    return ++counts[NUCLEOTIDES.indexOf(nucleotide)] && counts
  }, [0, 0, 0, 0]).join(' ')
}

