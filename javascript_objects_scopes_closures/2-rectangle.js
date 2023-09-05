#!/usr/bin/node
// Create an empty object if w or h is equal to 0 or not a positive integer
class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  }
if ((Rectangle.width && Rectangle.height ==0 ) || (Rectangle.width && Rectangle.height<0)){
Rectangle = {}
}

module.exports = Rectangle;