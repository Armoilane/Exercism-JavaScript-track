export const decodedValue = (colors) => {
  let digits = colors.slice(0,2).map( color => BANDS.indexOf(color));
  return digits[0] * 10 + digits[1];
};

export const BANDS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
]
