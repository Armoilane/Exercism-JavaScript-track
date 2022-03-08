const TRANSCRIPTION = { G: 'C', C: 'G', T: 'A', A: 'U' }

export const toRna = strand =>
  strand.replace(/G|C|T|A/g, nucleotide => TRANSCRIPTION[nucleotide] )
