/* super in literals points to the prototype */
'use strict';

var parent = { x:10, y: 20 };
var obj = {
   x: 42,
   print() { 
      console.log("this.x:", this.x);
      console.log("super.x:", super.x); 
   }
};

Object.setPrototypeOf(obj, parent);

obj.print();
