export class HighScores {
  constructor(scoreList) {
    this.list = scoreList
  }

  get scores() {
    return this.list
  }

  get latest() {
    return Number(this.list.slice(-1))
  }

  get personalBest() {
    return this.maxScore(this.list)
  }

  get personalTopThree() {
    return this.list.sort((a, b) => b - a).slice(0, 3)
  }

  /**
   * Parses the highest score from the array of scores
   * @param {Array} scorelist contains integers
   * @returns {Number}
   */
  maxScore(scorelist) {
    return scorelist.reduce(function(a, b) {
      return Math.max(a, b)
    }, -Infinity)
  }

}

