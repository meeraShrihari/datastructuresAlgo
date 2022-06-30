
//Memoization
/*
var fib = function(n, mem = [0, 1]) {
    if(n === 0 || n === 1) return mem[n];
    if(mem[n]) return mem[n];
    
    mem[n] = fib(n-1, mem) + fib(n-2, mem);
    console.log(mem);
    return mem[n];
};
*/

var fib = function(n) {
    var arr = [0,1];
    if(n === 0 || n === 1) return arr[n];

    for(let i=2; i<=n; i++) {
        arr[i] = arr[i-1] + arr[i-2];
    }
     return arr;
}


console.log(fib(6));