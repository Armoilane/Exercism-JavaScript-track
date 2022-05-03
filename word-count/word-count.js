/** Word counts.
 * @param {String} phrase A piece of text
 * @returns {Object} word: counts
 */
export const countWords = phrase => {
  return phrase.toLowerCase().match(/(\w+'\w+|\w+)/ig)
    .reduce((counts, word) => {
      if (counts[word]) {
        counts[word]++
      } else {
        counts[word] = 1
      }
      return counts
    }, {})
};

