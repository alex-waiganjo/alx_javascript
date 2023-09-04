#!/usr/bin/node
// function callMeMoby (x, theFunction){



function callMeMoby(x, theFunction) {
  if (x > 0) {
    theFunction();
    callMeMoby(x - 1, theFunction);
  }
}

module.exports.callMeMoby = callMeMoby;


callMeMoby(4, function () {
  console.log('C is fun');
});
