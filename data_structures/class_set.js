/* Explores Set class */
'use strict';
var s = new Set();

s.add(42);
s.add(99);
s.add(42);
s.add(33);

var vals = [...s.values()];
console.log(vals);
