const PROTEINS = {
  AUG: 'Methionine',
  UUU: 'Phenylalanine',
  UUC: 'Phenylalanine',
  UUA: 'Leucine',
  UUG: 'Leucine',
  UCU: 'Serine',
  UCC: 'Serine',
  UCA: 'Serine',
  UCG: 'Serine',
  UAU: 'Tyrosine',
  UAC: 'Tyrosine',
  UGU: 'Cysteine',
  UGC: 'Cysteine',
  UGG: 'Tryptophan',
  UAA: 'STOP',
  UAG: 'STOP',
  UGA: 'STOP',
  }

export const translate = rnaStrand => {
  let translatedCodons = []

  if (!rnaStrand) {
    return translatedCodons
  }

  let strandCodons = rnaStrand.match(/.{1,3}/g)

  for (let i = 0; i < strandCodons.length; i++) {
    let protein = PROTEINS[strandCodons[i]]

    if (!protein) {
      throw "Invalid codon"
    }

    if (protein === 'STOP' ) {
      break
    }

    translatedCodons.push(protein)
  }

  return translatedCodons
}
