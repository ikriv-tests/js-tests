/* Exploring Array functions */
console.log("Exploring Array functions like filter()");

var data = [0, 1, 4, 9, 16, 25, 36, 49, 64];
console.log('data=[' + data + ']');
console.log('indexOf(4)=' + data.indexOf(4));
console.log('Square roots: ' + data.map(x => Math.sqrt(x)));

Array.prototype.sum = function() {
    return this.reduce((a, b) => a + b, 0);
};

Array.prototype.average = function () { return this.sum() / this.length; };

Array.prototype.median = function () {
    
    if (this.legnth === 0) return 0;
    var sorted = this.filter(x => typeof x !== "undefined").sort();
    var len = sorted.length;
    if (len === 0) return 0;
    if (len % 2 === 1) return sorted[(len-1) / 2];
    return (sorted[len / 2 - 1] + sorted[len / 2]) / 2;
}



console.log('Length: ' + data.length);
console.log('Sum: ' + data.sum());
console.log('Average: ' + data.average());
console.log('Median: ' + data.median());

console.log('Sum of [42]: ' + [1].sum());
console.log('Sum of []: ' + [].sum());

console.log('Median of []: ' + [].median());
console.log('Median of [1]: ' + [1].median());
console.log('Median of [1,2]: ' + [1, 2].median());
console.log('Median of [1,2,3]: ' + [1, 2, 3].median());
console.log('Median of [1,2,3,4]: ' + [1,2,3,4].median());
console.log('Median of [1,2,3,4,5]: ' + [1,2,3,4,5].median());
console.log('Median of [1,5,2,3,4]: ' + [1,5,2,3,4].median());




//console.log("Average: ' + ")


