/* Use promises to simultaneously calculate large numbers of sqrt(), some of which are negative */
'use strict';
function asyncSqrt(x) {
    return new Promise(function(resolve,reject) {
         var delay = Math.random() * 5000;
         setTimeout( ()=> {
             if (x>=0) {
                 resolve(Math.sqrt(x));
             } else {
                 reject("Invalid argument: sqrt expects a non negative number");
             }
         }, delay);
    });
}

function getArgs(n) {
    var result = [];
    for (var i=0; i<n; ++i) result[i] = Math.random()*100-10;
    return result;
}

const nArgs = 10000;
var args = getArgs(nArgs);
console.log("Calculating sqrt of " + nArgs + " numbers");

Promise.all( args.map( arg=>asyncSqrt(arg).then( 
    result => console.log(`sqrt(${arg})=${result}`), 
    error => console.log(`sqrt(${arg})=ERROR! ${error}`)))); 