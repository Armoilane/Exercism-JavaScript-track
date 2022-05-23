/**
 * Rotates alphabet, keeps punctuation
 * @param {String} phrase to cipher
 * @returns {String} ciphered phrase
 */
export const rotate = (phrase, rotation) => {
  return String.fromCharCode(
    ...phrase
      .split('')
      .map(char => shift(char.codePointAt(0), rotation))
  )
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

  if (96 < code && code < 123) {
    return (code + rotation - 97) % 26 + 97
  }

  return code
}

