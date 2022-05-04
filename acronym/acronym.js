/**
 * Acronym, first letters of words in a phrase.
 * @param {String} phrase
 * @returns {String}
 */
export const parse = phrase => {
  return phrase.split(/[^a-zA-Z']/)
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
}

