//Array.map((num, i, arr) => {})

Array.prototype.myMap = function(cb) {
    let temp = [];
    for(let i=0; i<this.length; i++) {
        temp.push(cb(this[i], i, this));
    }
    return temp;
}

let arr = [1,2,3,4];
let result = arr.myMap((a, i, arr) => {
    return a*2;
});

console.log(result);