#!/usr/bin/node
const myObject = {
  type: 'object',
  value: 12,
};
// Before adding another attribute
console.log(myObject);

// Adding incr func to myObject
function incr() {
  this.value++;
};
// myObject.incr =incr

// Output
myObject.incr();
console.log(myObject);

myObject.incr();
console.log(myObject);

myObject.incr();
console.log(myObject);
