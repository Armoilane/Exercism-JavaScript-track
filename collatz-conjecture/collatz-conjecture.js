
export const steps = (number) => {
  let num = number;
  let steps = 0;
  if ( num < 1 ) {
    throw Error("Only positive numbers are allowed");
  }

  do {
    if ( num % 2 === 0 ) {
      num = num / 2;
      steps++;
    } else if ( num > 2 ) {
      num = 3*num + 1;
      steps++;
    }
  } while (num != 1);

  return steps;
};
