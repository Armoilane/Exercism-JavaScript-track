const ORBITAL_PERIOD = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0, // 365.25 Earth days, or 31557600 seconds
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
}

export const age = (onPlanet, seconds) => {
  const spaceAge = seconds / 31557600 / ORBITAL_PERIOD[onPlanet]
  return Math.round(spaceAge * 100) / 100
};
