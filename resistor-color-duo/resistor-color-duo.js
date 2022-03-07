import { colorCode } from '../resistor-color/resistor-color';

export const decodedValue = (colors) => {
  return colors.slice(0,2).reduce((total, color) =>
    total * 10 + colorCode(color), 0 );
};
