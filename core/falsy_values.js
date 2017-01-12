/* Truthfulness and falsehood of various values */
function isTruthy(value) {
    if (value) return true;
    return false;
}

var values = [ 
    [undefined, "undefined"],
    [null,"null"],
    [0, "0"],
    [-0, "-0"],
    ["", '""'],
    [[], "[]"],
    [{}, "{}"],
    [Number.NaN, "NaN"],
    [Infinity, "Infinity" ]
];

console.log("TRUTHY VALUES:");
for (var v of values.filter(v=>isTruthy(v[0]))) {
    console.log(v[1]);
}

console.log(""); // empty line

console.log("FALSY VALUES:");

for (var v of values.filter(v=>!isTruthy(v[0]))) {
    console.log(v[1]);
}
