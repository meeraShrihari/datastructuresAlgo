function myFunc() {
    var count = 0;
    return function(){
        count++;
        return count;
    }

}

var instance1 = myFunc();
var instance2 = myFunc();


console.log('instance1 : '+instance1());
console.log('instance1 : '+instance1());
console.log('instance1 : '+instance1());
console.log('instance2 : '+instance2());
console.log('instance2 : '+instance2());
console.log('instance1 : '+instance1());


