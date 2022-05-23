/**
 * Rotates alphabet, keeps punctuation
 * @param {String} phrase to cipher
 * @returns {String} ciphered phrase
 */

export const rotate = (phrase, rotation) => {
  return phrase.split('')
    .map(char => shift(char.codePointAt(0), rotation))
    .map(code => String.fromCharCode(code))
    .join('')
}


/** Helper to shift the letters
 * @param {Integer} code character code
 * @param {Integer} rotation
 * @returns {Integer} code, shifted if alphabetical
 */
const shift = (code, rotation) => {
  if (64 < code && code < 91) {
    return (code + rotation - 65) % 26 + 65
  }

  else if (96 < code && code < 123) {
    return (code + rotation - 97) % 26 + 97
  }

  else {
    return code
  }

}

