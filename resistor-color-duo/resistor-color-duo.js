const COLORS = [
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

const colorCode = band => COLORS.indexOf(band)

export const decodedValue = (colors) => {
  return colors.slice(0,2).reduce((total, color) =>
                                   total * 10 + colorCode(color), 0 );
};
