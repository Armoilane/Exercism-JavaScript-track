const UPPERCASERX = /[A-Z]/g
const LOWERCASERX = /[a-z]/g
const WORDCHARSRX = /([A-Za-z])/g

export const hey = (message) => {
  const wordChars = extractAlphabet(message)
  const allUpperCaseChars = extractUpperCaseLetters(message)
  const lastChar = message.trimEnd().slice(-1)
  const anyMessage = message.trim()

  if (anyMessage.length === 0) {
    return 'Fine. Be that way!'
  }

  if (message.endsWith('?') && isYell(message)) {
    return 'Calm down, I know what I\'m doing!'
  }

  if (isYell(message)) {
    return 'Whoa, chill out!'
  }

  if (lastChar === '?') {
    return 'Sure.'
  }

  return 'Whatever.'
}



/**
 * Check if message is YELLED
 * @param {String} message
 * @returns {Boolean}
 */
const isYell = phrase => extractAlphabet(phrase) === extractUpperCaseLetters(phrase)

/**
 * Returns all uppercase letters in the message
 * @param {String} phrase
 * @returns {String} all uppercase letters if the phrase
 */
const extractUpperCaseLetters = phrase => {
  if (!phrase.match(UPPERCASERX)) {
    return ''
  }
  return phrase.match(UPPERCASERX).join('')
}
/**
 * This extracts only word chars from the phrase
 * @param {String} phrase
 * @returns {String}
 */
const extractAlphabet = phrase => {
  if (!phrase.match(WORDCHARSRX)) {
    return ''
  }
   return phrase.match(WORDCHARSRX).join('')
}
