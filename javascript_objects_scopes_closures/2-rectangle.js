#!/usr/bin/node
// Create an empty object if w or h is equal to 0 or not a positive integer
class Rectangle {
    constructor(width, height) {
        if (width<=0 || height<=0 || typeof width !== 'number' || typeof height !== 'number'){
            return typeof(Rectangle)
        }
        // else if(width=='undefined' 
        // ||height=='undefined'){
        //     return Rectangle.width= undefined
        // }
    
      this.width = width;
      this.height = height;
    }
  }
// if (Rectangle.width<=0 ||Rectangle.height<=0){
// return {}
// }

module.exports = Rectangle;