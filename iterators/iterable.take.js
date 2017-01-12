/* implements take() for iterables */
'use strict';

function isIterable(obj) {
	var getIterator = obj[Symbol.iterator];
	return getIterator && (typeof getIterator === "function");
}

/* works only on iterables */
Object.prototype.take = function *(n) {
	if (n<=0) return;
	
	if (!isIterable(this)) throw new TypeError("Cannot apply 'take' to object that is not an iterable");
	
	var i = 1;
	for (let item of this) {
		yield item;
		if (i++ >= n) break;
	}
}

function *fib() {
	var val = 1, prevVal = 0;
	while (true) {
		yield val;
		[prevVal, val] = [val, val+prevVal];
	}
}

console.log(...fib().take(10));

var list = ["a","b","c"];

for (let i=0; i<5; ++i) {
	console.log(`${i}: [${[...list.take(i)]}]`);
}

var str = "abcdef";
console.log(...str.take(2));

try {
    var num = 42;
    console.log(...num.take(2));
}
catch (e) {
    console.log("Error:", e.message);
}
