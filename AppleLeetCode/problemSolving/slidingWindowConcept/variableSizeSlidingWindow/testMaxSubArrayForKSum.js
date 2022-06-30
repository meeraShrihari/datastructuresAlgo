function testMaxSubArrayForKSum(arr, k) {
    let max = 0;
    let sum = 0;
    let j=0, i=0;
    while(j < arr.length) {//4
        sum = sum + arr[j];//6
        if(sum < k) j++; 
        else if(sum === k) {
                max = Math.max(max, j-i+1);//3
                j++;
        }else {
            while(sum > k) {
                sum = sum - arr[i]; //2
                i++; //3
            }
            j++;
        } 
    }
    return max;
}

console.log(testMaxSubArrayForKSum([5,0,4,1,1,1,2,3,5], 5));