const TRANSCRIPTION = { G: 'C', C: 'G', T: 'A', A: 'U' }
const NUCLEOTIDE = new RegExp(Object.keys(TRANSCRIPTION).join('|'), 'g')

export const toRna = strand =>
  strand.replace(NUCLEOTIDE, nucleotide => TRANSCRIPTION[nucleotide])
