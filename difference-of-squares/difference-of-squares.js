/**
 * Class to calculate the difference between square of sums and sum of squares.
 */
export class Squares {
  constructor(n) {
    this.n = n
  }

  get sumOfSquares() {
    let sum = 0

    for (let i = 1 ; i <= this.n; i++) {
      sum += i**2
    }

    return sum
  }

  get squareOfSum() {
    let sum = 0

    for (let i = 1; i <= this.n ; i++) {
      sum += i
    }

    return sum**2
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares
  }
}

