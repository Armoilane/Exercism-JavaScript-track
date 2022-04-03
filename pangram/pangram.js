const ALPHABET = Array.from('abcdefghijklmnopqrstuvwxyz')

/**
 * Takes in a string and checks if it has every alphabet character in it.
 * @param {String} sentence
 * @returns {Boolean}
 */
export const isPangram = sentence => {
  return ALPHABET.every(char => sentence.toLowerCase().includes(char))
};
