
//count how many unique numbers are there in the array
//Two pointers from left
function countUniqueValuesUsingCount(arr=[]) {
    if(arr.length < 2) return arr.length;
    let left = 0;
    let right = 1;
    let count = 1;
    while(right < arr.length) {
        if(arr[left] !== arr[right]) {
            left = right;
            count++;
        }
        right++;
    }
    return count;
}

function countUniqueValuesWithoutCount(arr=[]) {
    if(arr.length < 2) return arr.length;
    let left = 0;
    for(let right=1; right<arr.length; right++) {
        if(arr[left] !== arr[right]) {
            left++;
            arr[left] = arr[right];
        }
    }
    return left+1;
}

console.log(countUniqueValuesUsingCount([1,1,1,1,1,2])); //2
console.log(countUniqueValuesUsingCount([1,2,3,4,4,4,7,7,12,12,13])); //7 
console.log(countUniqueValuesUsingCount([])); //0
console.log(countUniqueValuesUsingCount([-2,-1,-1,0,1])); //4


console.log(countUniqueValuesWithoutCount([1,1,1,1,1,2])); //2
console.log(countUniqueValuesWithoutCount([1,2,3,4,4,4,7,7,12,12,13])); //7 
console.log(countUniqueValuesWithoutCount([])); //0
console.log(countUniqueValuesWithoutCount([-2,-1,-1,0,1])); //4