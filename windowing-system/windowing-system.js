// @ts-check

/**
 * A constructor function for the class Size.
 *
 * @param {number} width window width in pixels
 * @param {number} height window height in pixels
 *
 * @returns what, exactly? - A new instance of Size.
 */
export function Size(width = 80, height = 60) {
  this.width = width
  this.height = height
}

/**
 * Resizes the window.
 *
 * @param {number} width new window width in pixels
 * @param {number} height new window height in pixels
 *
 * @returns Nothing? It just sets new window attributes.
 */
Size.prototype.resize = function(width, height) {
  this.width = width
  this.height = height
}

/**
 * Constructor function for the Position class.
 * Stores the coordinate position of the window.
 *
 * @param {number} x coordinate of upper left corner of the window.
 * @param {number} y coordinate of upper left corner of the window.
 *
 * @returns A new instance of position.
 */
export function Position(x = 0, y = 0) {
  this.x = x
  this.y = y
}

/**
 * Moves the window to a new position
 *
 * @param {number} x coordinate of upper left corner of the window
 * @param {number} y coordinate of upper left corner of the window
 */
Position.prototype.move = function (x, y) {
  this.x = x
  this.y = y
}

/**
 * The previous have been created with constructor functions and the
 * value fields are accessed through instance methods that are added
 * via the `prototype` property.
 *
 * The following classes are created with class declarations.
 * A `constructor` function is defined first that works like the
 * constructor function in the prototype syntax. It's like the
 * `initialize` in Ruby.
 *
 * The class body also contains the method definitions. The syntax is
 * similar to the shorthand syntax that's used for adding functions as
 * values inside and object.
 */

/**
 * Class declaration with keyword `class` for ProgramWindow. -ES2015
 *
 * @param {Size} screenSize fixed to size 800, 600
 * @param {Size} size size of the program window
 * @param {Position} position
 */
export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600)
    this.size = new Size()
    this.position = new Position()
  }

  /**
   * Method to resize the ProgramWindow
   *
   * @param {Size} newSize new size for the program window
   *
   * Could have a function to do the < 1 check.
   */
  resize(newSize) {
    this.size.width = this._limitWindowWidth(newSize.width)
    this.size.height = this._limitWindowHeight(newSize.height)
  }

  /**
   * Private method to keep the window width in bounds
   *
   * @param {Number} pixelWidth pixel width of a program window
   *
   * @returns {Number} width adjusted to the screen size.
   */
  _limitWindowWidth(pixelWidth) {
    if (pixelWidth < 1) {
      return 1
    }
    if (this.position.x + pixelWidth > this.screenSize.width) {
      return this.screenSize.width - this.position.x
    }
    return pixelWidth
  }

  /**
   * Private method to keep the window width in bounds
   *
   * @param {Number} pixelHeight pixel height of a program window
   *
   * @returns {Number} height adjusted to the screen size.
   */
  _limitWindowHeight(pixelHeight) {
    if (pixelHeight < 1) {
      return 1
    }
    if (this.position.y + pixelHeight > this.screenSize.height) {
      return this.screenSize.height - this.position.y
    }
    return pixelHeight
  }

  /**
   * Method to move the window
   *
   * @param {Position} newPosition new coordinates for top left corner
   *
   * The program window should be kept within limits of the screen.
   */
  move(newPosition) {
    let newPositiveX = this._limitTopLeft(newPosition.x)
    let newPositiveY = this._limitTopLeft(newPosition.y)

    this.position.x = this._limitRight(newPositiveX)
    this.position.y = this._limitBottom(newPositiveY)
  }

  /**
   * Private methods to keep program window within the limits of the window.
   *
   * @param {Number} coordinate position of edge of program window
   *
   * @returns {Number} coordinate that is limited to the current screen size.
   */
  _limitTopLeft(coordinate) {
    return coordinate < 0 ? 0 : coordinate
  }

  _limitRight(coordinate) {
    const maximumX = this.screenSize.width - this.size.width
    return coordinate > maximumX ? maximumX : coordinate
  }

  _limitBottom(coordinate) {
    const maximumY = this.screenSize.height - this.size.height
    return coordinate > maximumY ? maximumY : coordinate
  }
}

/**
 * This function resets the program window on to the screen.
 *
 * @param {ProgramWindow} programWindow an instance of.
 *
 * @returns {ProgramWindow} The same window object adjusted.
 */
export function changeWindow(programWindow) {
  programWindow.resize(new Size(400, 300))
  programWindow.move(new Position(100, 150))
  return programWindow
}
