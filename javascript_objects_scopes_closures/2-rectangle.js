#!/usr/bin/node
// Create an empty object if w or h is equal to 0 or not a positive integer
class Rectangle {
    constructor(width, height) {
        // if (width<=0 || height<=0){
        //     return {}
        // }
    
      this.width = width;
      this.height = height;
    }
  }
if (Rectangle.width<=0 ||Rectangle.height<=0){
return {}
}

module.exports = Rectangle;