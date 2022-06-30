
// Time complexity = O(nlogn)
// Space complexity = O(n)
/*
function firstMissingPositive(nums) {
    nums = [...new Set(nums)].sort((a,b) => a-b);
    nums = nums.filter(num => num > 0);
    let j = 1;
    for(let i=0; i<nums.length; i++) {
        if(j === nums[i]) {
            j++;
        } else {
            return j;
        }
    }
}
*/

function firstMissingPositive(nums) {
    const obj = {};
    for(let i=0; i<nums.length; i++) {
        obj[nums[i]] = 1;
    }
    for(let i=1; i<=nums.length; i++) {
        if(!obj[i]) return i;
    }
}

console.log(firstMissingPositive([1,1,7,2,3,2,3,4,6,7]));