const proteins = { 
  'AUG': 'Methionine',
  'UUU': 'Phenylalanine',
  'UUC': 'Phenylalanine',
  'UUA': 'Leucine',
  'UUG': 'Leucine',
  'UCU': 'Serine',
  'UCC': 'Serine',
  'UCA': 'Serine',
  'UCG': 'Serine',
  'UAU': 'Tyrosine',
  'UAC': 'Tyrosine',
  'UGU': 'Cysteine',
  'UGC': 'Cysteine',
  'UGG': 'Tryptophan',
  'UAA': 'STOP',
  'UAG': 'STOP',
  'UGA': 'STOP',
  }

export const translate = (rnaStrand) => {
  
  let translatedCodons = [];

  if ( !!rnaStrand == false ) {
    return translatedCodons;
  }

  let codons = rnaStrand.match(/.{1,3}/g);
  
  for ( let i = 0; i < codons.length; i++) {
    let codon = codons[i];
    let protein = proteins[codon];

    if ( !(codon in proteins) ) {
      throw "Invalid codon";
    }

    if ( protein != 'STOP' ) {
      translatedCodons.push(protein);
    } else {
      break;
    }
  }

  return translatedCodons;
  
}
