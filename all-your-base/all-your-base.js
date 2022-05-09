import { runInNewContext, runInContext } from "vm";

export const convert = (digits, fromBase, newBase) => {

  let lessThanOne = "let check = function(d) { return d <= 1; }; check(digit);";
  let fromBaseIsOneOrLess = runInNewContext(lessThanOne, {digit:fromBase});
  let newBaseIsOneOrLess = runInNewContext(lessThanOne, {digit: newBase});

  let isInteger = "let check = function(d) { return !Number.isInteger(d); }; check(digit);";
  let fromBaseIsNotInteger = runInNewContext(isInteger, {digit: fromBase});
  let newBaseIsNotInteger = runInNewContext(isInteger, {digit: newBase});

  if ( fromBaseIsOneOrLess || fromBaseIsNotInteger ) {
    throw Error("Wrong input base");
  }

  if ( newBaseIsOneOrLess || newBaseIsNotInteger ) {
    throw Error("Wrong output base");
  }

  if ( digits.length == 0 ) {
    throw Error("Input has wrong format");
  }

  if ( digits.length > 1 && digits[0] == 0 ) {
    throw Error("Input has wrong format");
  }

  if ( digits.find( digit => digit < 0 )) {
    throw Error("Input has wrong format");
  }

  if ( digits.find( digit => digit > fromBase - 1 )) {
    throw Error("Input has wrong format");
  }

  let temp = 0;
  let out = [];

  function outBase(digit,index) {
    temp += digit * fromBase ** index;
  }

  let n = 0;

  function findLargestExponent() {
    let m = 0;
    for (let i = 0; m < temp; i++) {
      m = newBase ** i;
      n = i;
    }
  }
  
  digits.reverse().forEach(outBase);
  findLargestExponent();

  let multiplier = 0;

  do {
    if ( n == 0 ) {
      out.push(temp);
    } else if ( newBase ** ( n - 1 ) > temp ) {
      out.push(0);
    } else {
      multiplier = ~~ ( temp / newBase ** ( n - 1 ));
      out.push(multiplier);
      temp = ( temp - multiplier * newBase ** ( n - 1 ));
    }
    n = n - 1;
  } while ( n > 0 );

  return out;

};
