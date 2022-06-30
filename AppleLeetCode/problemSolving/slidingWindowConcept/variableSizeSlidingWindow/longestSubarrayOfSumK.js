

//According to the video
function longestSubarrayOfSumK(arr, k) {
    let i=0;
    let j=0;
    let sum = 0;
    let max = -Infinity;
    while(j < arr.length) {
        sum = sum + arr[j];
        if(sum > k){
            while(sum > k) {
                sum = sum - arr[i];
                i++;
            }
        }else if(sum === k) {
            max = Math.max(max, j-i+1);
        }
        j++;
    }
    return max;
}
console.log(longestSubarrayOfSumK([4,1,1,1,2,3,5], 5)) 
//My version below
/*function longestSubarrayOfSumK(arr, k) {
    let i=0;
    let j=0;
    let max = 0;
    let sum = 0;
    let count = 0;
    while(i < arr.length) {
        sum = sum + arr[j]; //12
        if(sum <= k) {
            count++; //4
        }else {
            max = Math.max(count, max); //4
            sum = sum - arr[i]; //11
            //count--; //1
            i++; //2
        }
        j++; //6
    }
    return max;
}*/

console.log(longestSubarrayOfSumK([4,1,1,1,2,3,5], 5)) 
                                         