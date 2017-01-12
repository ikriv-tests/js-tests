/* explores Map class */
'use strict';
var m = new Map();
var key1 = { prop: 42 };
var key2 = { prop: 99 };

m.set(key1, { val: "Forty two" });
m.set(key2, { val: "Ninety nine" });

var v = m.get(key1);
console.log(v.val);

var v2 = m.get({});
console.log(v2);

console.log(m.get({prop:42}));