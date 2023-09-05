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
 function print(height,width){
    if (this.width > 0 && this.height > 0) {
      for (let i = 0; i < this.height; i++) {
        let row = '';
        for (let j = 0; j < this.width; j++) {
          row += 'X';
        }
        console.log(row);
      }
    }}
    
module.exports = print
module.exports = Rectangle;
// module.exports = print;