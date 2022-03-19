/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(remainingTime) {
  if (remainingTime === 0) {
    return 'Lasagna is done.'
  }
  if (!remainingTime) {
    return 'You forgot to set the timer.'
  }
  return 'Not done, please wait.'
}

export function preparationTime(layers, timePerLayer = 2) {
  return layers.length * timePerLayer;
}

function sauceAndNoodles(layers) {
  return layers.filter(layer => layer === 'sauce' || layer === 'noodles');
}

export function quantities(layers) {
  const unitsPerLayer = { noodles: 50, sauce: 0.2 }
  let quantitiesByLayer = { noodles: 0, sauce: 0 }
  sauceAndNoodles(layers).forEach(layer =>
    quantitiesByLayer[layer] += unitsPerLayer[layer])
  return quantitiesByLayer
}

export function addSecretIngredient(listFrom, listTo) {
  listTo.push(listFrom[listFrom.length - 1])
}

export function scaleRecipe(recipe, portions) {
  let scaled = {}
  for (const ingredient in recipe) {
    scaled[ingredient] = recipe[ingredient] * portions / 2
  }
  return scaled
}
