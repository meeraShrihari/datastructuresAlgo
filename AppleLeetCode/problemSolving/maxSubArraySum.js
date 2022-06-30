function maxSubArraySum(arr, num) {
    if(arr.length < num) return null;
    let left = 0;
    let right = num - 1;
    //let max = Infinity * -1;
    let sum = 0;
    for(let i=0; i<=right; i++) {
        sum += arr[i];
    }
    left++; right++;
    let max = sum;
    while(right < arr.length) {
        sum = sum - arr[left++ - 1] + arr[right++];
        max = max > sum ? max : sum;
    }
    return max;
}

console.log(maxSubArraySum([1,2,5,2,8,1,5], 2)); //10
console.log(maxSubArraySum([1,2,5,2,8,1,5], 4)); //17
console.log(maxSubArraySum([4,2,1,6], 1)); //6
console.log(maxSubArraySum([4,2,1,6,2], 4),) //13
console.log(maxSubArraySum([], 4)) //null


console.log(maxSubArraySum([100,200,300,400], 2)); //700
console.log(maxSubArraySum([1,4,2,10,23,3,1,0,20], 4)); //39
console.log(maxSubArraySum([-3,4,0,-2,6,-1], 2)); //5
console.log(maxSubArraySum([3,-2,7,-4,1,-1,4,-2,1], 2)); //5
console.log(maxSubArraySum([2,3], 3));