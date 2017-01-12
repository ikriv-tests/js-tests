/* Implements map() for iterables */
'use strict';

function isFunction(obj) { return obj && (typeof obj === "function"); }
function isIterable(obj) { return isFunction(obj[Symbol.iterator]); }

/* works only on iterables */
Object.prototype.map = function *(mapper) {
	if (!isFunction(mapper)) throw new TypeError("The argument of map() must be a function");
	if (!isIterable(this)) throw new TypeError("Cannot apply 'take' to object that is not an iterable");
	
	for (let item of this) {
		yield mapper(item);
	}
}

function *range(n,len) {
    for (var i=0;i<len;++i) yield n+i;
}

console.log(...range(0,10).map(x=>Math.sqrt(x)));
