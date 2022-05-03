/**
 * Anagram finder
 * @param {String} subject The original word
 * @param {Array} wordList words to look the anagram for
 * @returns {Array} The anagrams
 */
export const findAnagrams = (subject, wordList) => {
  const subjectLetters = normalize(subject)

  return wordList.filter((word) =>
    word.toLowerCase() !== subject.toLowerCase() &&
    word.length === subject.length &&
    normalize(word).every((char, i) => char === subjectLetters[i]))
};

/**
 * Helper to process the letters in each word to a standard.
 * @param {String} word
 * @returns {Array} The letters
 */
const normalize = word => word.toLowerCase().split('').sort()

