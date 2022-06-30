

Array.prototype.myReduce = function(cb, initialNum) {
    let accumulator = initialNum;
    for(let i=0; i<this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i],i,this): this[i];
    }
    return accumulator;
}


let arr = [1,2,3,4];
let sum = arr.myReduce((acc,num,i,arr) => {
    return acc + num;
}, 0);
console.log(sum);