function minSubArrayLen(arr, target){
    let left = 0;
    let right = 0;
    let min = Infinity;
    let sum = arr[left];
    while(right < arr.length) {
        if(sum >= target) {
            min = min < (right - left + 1) ? min : (right - left + 1); //2
            left++;
            sum = sum - arr[left - 1];
        } else {
            right++;
            sum = sum + arr[right];
        }
    }
    return min;
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7)); //2 -> [4,3]
console.log(minSubArrayLen([2,1,6,5,4], 9)); //2 -> [5,4]
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)); //1 -> [62]
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39)); //3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 55)); //5
console.log(minSubArrayLen([4,3,3,8,1,2,3], 11)); //2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 95)); //0

