/**
 * Video explanation here : https://www.youtube.com/watch?v=KtpqeN0Goro&list=PL_z_8CaSLPWeM8BDJmIYDaoQ5zuwyxnfj&index=3
 * @param {*} arr of numbbers 
 * @param {*} size of window
 * @returns maximum sum out of all sums of window size sub arrays
 */


function maxSumSubarraySizeK(arr, size) {
    /*let start = 0;
    let end = size - 1;
    let sum = 0;
    for(let i=start; i<=end; i++) {
        sum += arr[i];
    }
    let max = sum;
    end++;
    while(end < arr.length) {
        sum = sum + arr[end] - arr[start];
        start++; end++;
        max = Math.max(max, sum);
    }
    return max;*/

    //Second way
    /*let sum = 0;
    let max = -Infinity;
    let i=0, j=0;
    while( j<arr.length; j++) {//5<7
        if(j < size) {//2<3
            sum += arr[j];//8
            continue;
        }
        max = Math.max(max, sum); //14
        sum = sum - arr[i] + arr[j]; //19
        i++; //2
    }
    return max;
    */

    //third way
    let i=0, j=0;
    let sum = 0;
    let max = -Infinity;
    while(j < arr.length) {
        sum = sum + arr[j];
        if(j-i+1 < size) {
            j++;
        } else {
            max = Math.max(max, sum);
            sum = sum - arr[i];
            i++; j++; 
        }
    }
    return max;
}

console.log(maxSumSubarraySizeK([2,5,1,8,2,9,1], 3)) //19