'use strict'
console.log("Exploring coincise properties");

var x = 10, y = 20;

var obj = {
  x: 3,
  y: 4,
  sum() { return x+y; }, /* no "this", goes to global properties */
  real_sum() { return this.x + this.y }
};

console.log(obj.sum());
console.log(obj.real_sum());
