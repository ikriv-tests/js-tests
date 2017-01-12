/* describe() functions prints the object and all its visible properties */
'use strict';

function SomeClass() {
	this.x = 10;
	this.y = 20;
}

var obj = new SomeClass();

function describe(obj, name, indent) {
	indent = indent || "";
	
	try {
		console.log(`${indent}${name}: ${obj}`);
	}
	catch (e) {
		console.log(`${indent}${name}.toString() failed`);
	}
	
	if (obj === undefined || obj === null) return;
	console.log(`${indent}typeof ${name}: ${typeof obj}`);
	console.log(`${indent}Properties of ${name}: {`);
	for (var prop in obj) console.log(indent + " " + prop);
	console.log(indent + "}");
	
	console.log(`${indent}Symbolic properties of ${name}: {`);
	for (var sym of Object.getOwnPropertySymbols(obj)) console.log(indent + " " + sym.toString());
	console.log(indent + "}");
	
	console.log(`${indent}${name}.constructor: ${obj.constructor}`);
	describe(Object.getPrototypeOf(obj), name+".prototype", indent+" ");
}

console.log("Describing regular object");
describe(obj, "obj");

function *gen() { yield 42; }
var iterator = gen();

console.log("Describing an iterator");
describe (iterator, "it");