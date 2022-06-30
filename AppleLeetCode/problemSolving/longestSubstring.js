function findLongestSubstring(str) {
    let left = 0;
    let right = 0;
    let max = 0;
    let mySet = new Set();
    while(right < str.length) {
        if(!mySet.has(str[right])) {
            mySet.add(str[right]);
            max = Math.max(max, mySet.size);
            right++;
        } else {
            mySet.delete(str[left]);
            left++;
        }
    }
    return max;
}

console.log(findLongestSubstring('hjdkiehkjiwleoqh'));
console.log(findLongestSubstring('rithmschool')); //7
console.log(findLongestSubstring('thisisawesome')); //6