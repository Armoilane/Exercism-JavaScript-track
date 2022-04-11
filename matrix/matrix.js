export class Matrix {
  constructor(matrix) {
    this.matrix = matrix // lines.split("\n").map(line => line.split(" "))
  }

  get rows() {
    return this.matrix.split("\n").map(row => row.split(" "))
      .map(row => row.map(n => Number(n)))
  }

  get columns() {
    const columns = []
    for (let i = 0; i < this.rows[0].length; i++) {
      let column = []
      this.rows.forEach(row => {
        column.push(row[i])
      })
      columns.push(column)
    }
    return columns
  }
}
