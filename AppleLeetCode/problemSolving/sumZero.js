//Return the first pair which adds to zero
//Using two pointers from both ends
function sumZero(arr) {
    let left = 0;
    let right = arr.length-1;
    let sum = 0;
    while(left < right) {
        sum = arr[left] + arr[right];
        if(sum === 0) return [arr[left], arr[right]];
        if(sum < 0) left++;
        right--;
    }
}

console.log(sumZero([-3,-2,-1,0,1,2,3]));
console.log(sumZero([-2,0,1,3]));
console.log(sumZero([1,2,3]));