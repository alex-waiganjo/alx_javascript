#!/usr/bin/Node
module.exports = class Square extends require('./5-rectangle.js') {
    constructor (size) {
        super(size, size);
    }
};