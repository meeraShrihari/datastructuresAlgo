
Array.prototype.myReduce = function(fn, init) {
    let sum = init;
    for(let i=0; i<this.length; i++) {
        console.log('num = ' + this[i]);
        sum += fn(this[i], sum) 
        console.log('sum =' + sum);
    }
    return sum;
}


console.log([1,2,3].myReduce((c,v) => c + v, 0));