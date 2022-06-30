
Array.prototype.myFilter = function(cb) {
    const temp = [];
    for(let i=0; i<this.length; i++) {
        if(cb(this[i], i, this)){
            temp.push(this[i]);
        }
    }
    return temp;
}

let arr = [1,2,3,4];
console.log(arr.myFilter((num, i, arr) => num > 2));