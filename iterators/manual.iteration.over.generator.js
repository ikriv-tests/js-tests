/* demonstrates manually iterating over a generator function without usage of for..in loop */
'use strict';

function *fib() {
	var val = 1, prevVal = 0;
	while (true) {
		yield val;
		[prevVal, val] = [val, val+prevVal];
	}
}

var iterable = fib();
var iterator = iterable[Symbol.iterator]();

while (true) {
	var result = iterator.next();
	if (result.done !== false) break;
        console.log(result.value);
	if (result.value > 200) break;
}
	
