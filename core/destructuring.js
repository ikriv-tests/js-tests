'use strict';
var obj = {
  x: 10, y: 20
};

var [c,d] = [2,3];

var {x:a, y:b} = obj;

console.log(`a=${a}`);
console.log(`b=${b}`);
