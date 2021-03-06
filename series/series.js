/**
 * Return all series of slicelength in the string.
 * @param {String} series
 */
export class Series {
  constructor(series) {
    this.series = [...series].map(Number)
    this.seriesLength = series.length
  }


  /**
   * Slices the string to parts of sliceLength
   * @param {Number} sliceLength
   * @returns {Array[Integer]}
   */
  slices(sliceLength) {
    if (this.seriesLength < 1) {
      throw new Error('series cannot be empty')
    }

    this.validate(sliceLength)

    return this.series.reduce((allSeries, element, index, array) => {
      if (index + sliceLength <= this.seriesLength) {
        allSeries.push(array.slice(index, index + sliceLength))
      }
      return allSeries
    }, [])
  }


  /** Validates slice length parameter and errors accordingly
   * @param {Integer} sliceLength
   */
  validate(sliceLength) {
    const VALIDATIONS = [
      [sliceLength => sliceLength > this.seriesLength,
        'slice length cannot be greater than series length'],
      [sliceLength => sliceLength  === 0,
        'slice length cannot be zero'],
      [sliceLength => sliceLength < 0,
        'slice length cannot be negative']
    ]

    VALIDATIONS.forEach(([condition, error]) => {
      if (condition(sliceLength)) {
        throw new Error(error)
      }
    })
  }
}

