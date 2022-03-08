const TRANSCRIPTION = { G: 'C', C: 'G', T: 'A', A: 'U' }
const RX_NUCLEOTIDES = new RegExp(Object.keys(TRANSCRIPTION).join('|'), 'g')

export const toRna = strand =>
  strand.replace(RX_NUCLEOTIDES, nucleotide => TRANSCRIPTION[nucleotide])
