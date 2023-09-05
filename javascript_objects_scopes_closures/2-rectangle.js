#!/usr/bin/node
// Create an empty object if w or h is equal to 0 or not a positive integer
class Rectangle {
  constructor(width, height) {
    if (
      width <= 0 ||
      height <= 0 ||
      typeof width !== 'number' ||
      typeof height !== 'number'
    ) {
      return typeof Rectangle;
    }

    this.width = width;
    this.height = height;
  }
}

module.exports = Rectangle;
