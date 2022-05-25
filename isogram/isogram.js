/**
 * @param {String} word
 * @returns {Boolean} Is the word an isogram
 */
export const isIsogram = word => {
  let chars = [...word.toLowerCase().matchAll(/[a-z]/g)].flat()
  let uniques = chars.filter(uniquesOnly)
  return uniques.join('') === chars.join('')
}

const uniquesOnly = (value, index, self) => {
  return self.indexOf(value) === index
}

