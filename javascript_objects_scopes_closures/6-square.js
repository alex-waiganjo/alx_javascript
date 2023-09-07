#!/usr/bin/Node

module.exports = class Square extends require('./5-square') {
  charPrint(c) {
    if (c == null) {
      c = 'X';
    }
    for (let i = 0; i < this.height; i++) {
      console.log(c.repeat(this.width));
    }
  }
};
