export class Matrix {
  constructor(matrix) {
    this.matrix = matrix
  }

  get rows() {
    return this.matrix.split("\n")
      .map(row => row.split(" "))
      .map(row => row.map(Number))
  }

  get columns() {
    const columns = []
    const rows = this.rows

    for (let i = 0; i < rows[0].length; i++) {
      columns.push(rows.map(row => row[i]))
    }

    return columns
  }
}
