
var productExceptSelf = function(nums) {
   
    var leftProductArr = [];
    var rightProductArr = [];
    var outputProductArr = [];

    leftProductArr[0] = 1;
    rightProductArr[nums.length - 1] = 1;
    for(let i=1; i<nums.length; i++) {
        leftProductArr[i] = nums[i-1] * leftProductArr[i-1];
    }
    for(let i=nums.length-2; i>=0; i--) {
        rightProductArr[i] = nums[i+1] * rightProductArr[i+1];
    }
    for(let i=0; i<nums.length; i++) {
        outputProductArr[i] = leftProductArr[i] * rightProductArr[i];
    }
    return outputProductArr;
};

console.log(productExceptSelf([1,2,3,4]));
//         0   1   2   3
//l =      [1, 1,  2,  6]
//r =      [24,12, 4,  1]
//n =      [1, 2,  3,  4]