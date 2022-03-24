// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

<<<<<<< HEAD
=======
import { cp } from "fs"

>>>>>>> 9f0599918b2b43df272648b8229742af3cb69e8f
/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d translation of a coordinate pair.
 *
 * @param {number} dx the translate x component
 * @param {number} dy the translate y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  translated coordinate pair in the form [x, y]
 */
<<<<<<< HEAD
export function translate2d(dx, dy) {
  throw new Error('Implement the translate2d function');
=======
 export function translate2d(dx, dy) {
  const translated = function(x, y) { return [x+dx, y+dy] }
  return translated
>>>>>>> 9f0599918b2b43df272648b8229742af3cb69e8f
}

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d scale of a coordinate pair.
 *
 * @param {number} sx the amount to scale the x component
 * @param {number} sy the amount to scale the y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  scaled coordinate pair in the form [x, y]
 */
<<<<<<< HEAD
export function scale2d(sx, sy) {
  throw new Error('Implement the scale2d function');
=======
 export function scale2d(sx, sy) {
  const scaled = function(x, y) { return [x*sx, y*sy] }
  return scaled
>>>>>>> 9f0599918b2b43df272648b8229742af3cb69e8f
}

/**
 * Create a composition function that returns a function that combines two
 * functions to perform a repeatable transformation
 *
 * @param {function} f the first function to apply
 * @param {function} g the second function to apply
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  transformed coordinate pair in the form [x, y]
 */
<<<<<<< HEAD
export function composeTransform(f, g) {
  throw new Error('Implement the composeTransform function');
=======
 export function composeTransform(f, g) {
  const fFunc = function(x, y) { return f(x, y) }
  const gFunc = function(x, y) { return g(fFunc(x, y)[0], fFunc(x, y)[1]) }
  return gFunc
>>>>>>> 9f0599918b2b43df272648b8229742af3cb69e8f
}

/**
 * Return a function that memoizes the last result.  If the arguments are the same as the last call,
 * then memoized result returned.
 *
 * @param {function} f the transformation function to memoize, assumes takes two arguments 'x' and 'y'
 *
 * @returns {function} a function which takes x and y arguments, and will either return the saved result
 *  if the arguments are the same on subsequent calls, or compute a new result if they are different.
 */
<<<<<<< HEAD
export function memoizeTransform(f) {
  throw new Error('Implement the memoizeTransform function');
=======
 export function memoizeTransform(f) {
  let cache = {}
  return function(x, y) {
    let key = [x, y].toString()
    if (key in cache) {
      return cache[key]
    }
    let result = f(x, y)
    cache = {}
    cache[key] = result
    return result
  }
>>>>>>> 9f0599918b2b43df272648b8229742af3cb69e8f
}
