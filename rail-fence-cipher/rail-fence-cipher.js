/**
 * Rail fence cipher encode
 * @param {String} phrase to cipher
 * @param {Integer} rowCount number of rails to cipher on
 * @returns {String} 
 */
export const encode = (phrase, rowCount) => {
  let length = phrase.length
  let rails = initializeRails(length, rowCount)
  let cycle = railCycle(length, rowCount)

  for (let i = 0; i < length; i++) {
    rails[cycle[i]][i] = phrase[i]
  }

  return rails.map(rail => rail.join('')).join('')
}


/**
 * Rail fence cipher decipher
 * @param {String} cipher to decipher
 * @param {Integer} rowCount number of rails to decipher on
 * @returns {String} 
 */
export const decode = (cipher, rowCount) => {
  let length = cipher.length
  let rails = initializeRails(length, rowCount)
  let cycle = railCycle(length, rowCount)
  let cipherChars = [...cipher]

  for (let i = 0; i < length; i++) {
    rails[cycle[i]][i] = cycle[i]
  }

  rails.map(rail => {
    rail.map((e, i) => {
      if (Number.isInteger(e)) { rail[i] = String(cipherChars.shift()) }
    })
  })

  return cycle.map((rail, index) => rails[rail][index]).join('')
}


/**
 * Creates the rails for cipher/decipher filled with empty strings
 * @param {Integer} length of the phrase/cipher
 * @param {Integer} rowCount number of rails to de-/cipher on
 * @returns {Array[Array]} an array of rails
 */
const initializeRails = (length, rowCount) => {
  let rails = []

  for (let i = 0; i < rowCount; i++) {
    rails.push(Array.from({length: length}, () => String('')))
  }

  return rails
}


/**
 * Creates the rail cycle according which the chars are placed in the arrays
 * @param {Integer} length phrase/cipher length
 * @param {Integer} rowCount number of rails to de-/cipher on
 * @returns {Array}
 */
const railCycle = (length, rowCount) => {
  let cycleLength = 2 * rowCount - 2
  let fullCycle = []

  while (fullCycle.length < length) {
    fullCycle = fullCycle.concat(
      Array.from({length: cycleLength}, (_, index) =>
      (index < rowCount ) ? index : cycleLength - index))
  }

  return fullCycle.slice(0, length)
}

