export class Matrix {
  constructor(matrix) {
    this.matrix = matrix
  }

  get rows() {
    return this.matrix.split('\n')
      .map(row => row.split(' ')
      .map(Number))
  }

  get columns() {
    const rows = this.rows
    return rows[0].map((_, i) => rows.map(row => row[i]))
  }
}
