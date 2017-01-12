/* In an arrow function method, this does not point to the object being called */
'use strict'

var obj = {
    value: 42,
    inc: ()=>++this.value,
    inc2() { return ++this.value; }
}

console.log(obj.inc(), obj.inc2());