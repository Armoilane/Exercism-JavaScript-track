const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('')

/**
 * Takes in a string and checks if it has every alphabet character in it.
 * @param {String} sentence
 * @returns {Boolean}
 */
export const isPangram = sentence => {
  const lowerCaseSentence = sentence.toLocaleLowerCase()
  return ALPHABET.every(char => lowerCaseSentence.includes(char))
};
