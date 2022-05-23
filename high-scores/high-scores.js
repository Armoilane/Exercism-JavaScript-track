export class HighScores {

  constructor(scoreList) {
    this.list = scoreList
  }

  get scores() {
    return this.list
  }

  get latest() {
    return this.list.slice(-1)[0]
  }

  get personalBest() {
    return this.personalTopThree[0]
  }

  get personalTopThree() {
    return [...this.list].sort((a, b) => b - a).slice(0, 3)
  }

}

