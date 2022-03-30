// @ts-check

/**
 * A constructor function for the class Size.
 *
 * @param {number} width window width in pixels
 * @param {number} height window height in pixels
 *
 * @returns a new instance of Size
 */
export function Size(width = 80, height = 60) {
  this.width = width
  this.height = height
}

/**
 * A function that resizes the window.
 *
 * @param {number} width new window width in pixels
 * @param {number} height new window height in pixels
 *
 * @returns Nothing for it just sets new window attributes.
 */
Size.prototype.resize = function(width, height) {
  this.width = width
  this.height = height
}

/**
 * Constructor function for the Position class.
 * Stores the coordinate position of the window.
 *
 * @param {number} x coordinate of upper left corner of the window
 * @param {number} y coordinate of upper left corner of the window
 *
 * @returns A new instance of Position.
 */
export function Position(x = 0, y = 0) {
  this.x = x
  this.y = y
}

/**
 * Moves the window to a new position.
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
 *
 * @returns A new instance of ProgramWindow.
 */
export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600)
    this.size = new Size()
    this.position = new Position()
  }

  /**
   * Method to resize the ProgramWindow. Calls the `resize` method
   * of the Size class. The new size is kept within the screen limits.
   *
   * @param {Size} newSize new size for the program window
   */
  resize(newSize) {
    this.size.resize(
      this.limitWindowWidth(newSize.width),
      this.limitWindowHeight(newSize.height)
    )
  }

  /**
   * Private method to keep the program window width in bounds
   *
   * @param {Number} pixelWidth pixel width of the window
   *
   * @returns {Number} width adjusted to the screen size.
   */
  limitWindowWidth(pixelWidth) {
    if (pixelWidth < 1) {
      return 1
    }
    if (this.position.x + pixelWidth > this.screenSize.width) {
      return this.screenSize.width - this.position.x
    }
    return pixelWidth
  }

  /**
   * Private method to keep the program window height in bounds
   *
   * @param {Number} pixelHeight pixel height of the program window
   *
   * @returns {Number} height adjusted to the screen size.
   */
  limitWindowHeight(pixelHeight) {
    if (pixelHeight < 1) {
      return 1
    }
    if (this.position.y + pixelHeight > this.screenSize.height) {
      return this.screenSize.height - this.position.y
    }
    return pixelHeight
  }

  /**
   * Method to move a ProgramWindow
   *
   * @param {Position} newPosition new coordinates for top left corner
   *
   * The program window should be kept within limits of the screen.
   */
  move(newPosition) {
    this.position.x = this.keepWidthWithinScreen(newPosition.x)
    this.position.y = this.keepHeigthWithinScreen(newPosition.y)
  }

  /**
   * Private method to keep program window width within limits
   *
   * @param {Number} widthPosition position of top left corner program window
   *
   * @returns {Number} x coordinate that is limited to the current screen size.
   */
  keepWidthWithinScreen(widthPosition) {
    return this.limitRight(this.limitTopLeft(widthPosition))
  }

  /**
   * Private method to keep program window height within limits
   *
   * @param {Number} heightPosition position of top left corner program window
   *
   * @returns {Number} y coordinate that is limited to the current screen size.
   */
  keepHeigthWithinScreen(heigthPosition) {
    return this.limitBottom(this.limitTopLeft(heigthPosition))
  }

  /**
   * Private method to keep the top left corner on the screen.
   *
   * @param {Number} coordinate position of top left corner of program window
   *
   * @returns {Number} coordinate that is limited to the current screen size
   */
  limitTopLeft(coordinate) {
    return coordinate < 0 ? 0 : coordinate
  }

  /**
   * Private method to keep the right side on the screen.
   *
   * @param {Number} coordinate position of top left corner of program window
   *
   * @returns {Number} coordinate that is limited to the current screen size.
   */
  limitRight(coordinate) {
    const maximumX = this.screenSize.width - this.size.width
    return coordinate > maximumX ? maximumX : coordinate
  }

  /**
   * Private method to keep the bottom on the screen.
   *
   * @param {Number} coordinate position of top left corner of program window
   *
   * @returns {Number} coordinate that is limited to the current screen size.
   */
  limitBottom(coordinate) {
    const maximumY = this.screenSize.height - this.size.height
    return coordinate > maximumY ? maximumY : coordinate
  }
}


/**
 * This function resets the program window on to the screen.
 * This is NOT a part of the ProgramWindow class.
 *
 * @param {ProgramWindow} programWindow an instance of.
 *
 * @returns {ProgramWindow} The same ProgramWindow object adjusted.
 */
export function changeWindow(programWindow) {
  programWindow.resize(new Size(400, 300))
  programWindow.move(new Position(100, 150))
  return programWindow
}
