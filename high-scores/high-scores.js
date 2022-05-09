export class HighScores {

  constructor(scoreList) {
    this.list = scoreList
    this.topThreeScores = [...scoreList].sort((a, b) => b - a).slice(0, 3)
  }

  get scores() {
    return this.list
  }

  get latest() {
    return Number(this.list.slice(-1))
  }

  get personalBest() {
    return this.topThreeScores[0]
  }

  get personalTopThree() {
    return this.topThreeScores
  }

}

