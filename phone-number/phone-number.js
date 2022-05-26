const VALIDATIONS = [
  [phoneNumber => phoneNumber.length < 11, 'Incorrect number of digits'],
  [phoneNumber => phoneNumber.length > 11, 'More than 11 digits'],
  [phoneNumber => phoneNumber.match(/[a-z]/gi), 'Letters not permitted'],
  [phoneNumber => !phoneNumber.match(/\d{11}/), 'Punctuations not permitted'],
  [phoneNumber => phoneNumber[0] !== '1', '11 digits must start with 1'],
  [phoneNumber => phoneNumber[1] === '0', 'Area code cannot start with zero'],
  [phoneNumber => phoneNumber[1] === '1', 'Area code cannot start with one'],
  [phoneNumber => phoneNumber[4] === '0', 'Exchange code cannot start with zero'],
  [phoneNumber => phoneNumber[4] === '1', 'Exchange code cannot start with one'],

]

/**
 * Clean phone number according to North American Numbering Plan
 * @param {String} number
 * @return {String} NANP number
 */
export const clean = phoneNumber => {
  const cleaned = phoneNumber.replace(/[\s\(\)\-\.\+]/g, '')
  const normalized = cleaned.length === 10 ? '1' + cleaned : cleaned

  VALIDATIONS.forEach(([condition, error]) => {
    if (condition(normalized)) throw new Error(error)
  })

  return normalized.slice(1)
}

