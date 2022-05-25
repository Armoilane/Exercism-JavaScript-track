/**
 * Clean phone number according to North American Numbering Plan
 * @param {String} number
 * @return {String} NANP number
 */
export const clean = number => {
  if (number.match(/[a-zA-Z]/)) {
    throw new Error('Letters not permitted')
  }

  if (number.match(/(@:!)/)) {
    throw new Error('Punctuations not permitted')
  }

  let numbers = Array.from(number.matchAll(/[0-9]/g)).flat().join('')

  if (numbers.length < 10) {
    throw new Error('Incorrect number of digits')
  }

  if (numbers.length > 11) {
    throw new Error('More than 11 digits')
  }

  if (numbers.length === 11 && numbers[0] != '1') {
    throw new Error('11 digits must start with 1')
  }

  if (numbers.length === 11 && numbers[0] === '1') {
    numbers = numbers.slice(1)
  }

  if (numbers[0] === '0') {
    throw new Error('Area code cannot start with zero')
  }

  if (numbers[0] === '1') {
    throw new Error('Area code cannot start with one')
  }

  if (numbers[3] === '0') {
    throw new Error('Exchange code cannot start with zero')
  }

  if (numbers[3] === '1') {
    throw new Error('Exchange code cannot start with one')
  }

  return numbers
}

