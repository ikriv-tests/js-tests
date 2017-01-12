/* Call vs apply */
'use strict';

console.log("Exploring call() vs apply()");

function print(...args) {
    console.log([this].concat(args).join(", "));
}

print(3,5);

function obj(name) {
    return {toString() {return name}};
}

print.call(obj("someObject"),1,2);
print.apply(obj("anotherObject"), [1,2,3]);

