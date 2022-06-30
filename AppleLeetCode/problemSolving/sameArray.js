
//Return true is every value in arr1 has corresponding squares in arr2. Frequency of values must be same
//Frequency Counter Technique
function same(arr1, arr2) {
    //check the length
    if(arr1.length !== arr2.length) return false;
    //create object of value occurrence for arr1 and arr2
    var obj1 = {};
    var obj2 = {};
    for(num of arr1) {
        obj1[num] = ++obj1[num] || 1;
    }
    for(num of arr2) {
        obj2[num] = ++obj2[num] || 1;
    }
    //check if square of element of arr1 exists in arr2, if not return false
    for(const [key, val] of Object.entries(obj1)) {
        var sq = key ** 2;
        if(!obj2[sq]) return false;
        if(val !== obj2[sq]) return false;
    }
    return true;
    //if exists, check if both have same occurrences
}

console.log(same([1,2,3], [4,4,9]));

