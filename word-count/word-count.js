/** Word count.
 * @param {String} phrase A piece of text
 * @returns {Object} word: count
 */
export const countWords = phrase => {
  return phrase.toLowerCase().match(/(\w+'\w+|\w+)/ig)
    .reduce((count, word) => {
      count[word] = count[word] ? count[word] + 1 : count[word] = 1
      return count
    }, {})
};

