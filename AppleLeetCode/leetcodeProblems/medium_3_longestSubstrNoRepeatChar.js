var lengthOfLongestSubstring = function(s) {
    var charSet = new Set();
    var left = 0;
    var right = 0;
    var max = 0;
    while(right < s.length) {
        if(!charSet.has(s[right])) {
            charSet.add(s[right]);
            max = Math.max(max, charSet.size);
            right++;
        } else {
            charSet.delete(s[left]);
            left++;
        }
    }
    return max;
};


console.log(lengthOfLongestSubstring('jhgjfgjgshdkjsfhj'));
console.log(lengthOfLongestSubstring('rithmschool')); //7
console.log(lengthOfLongestSubstring('thisisawesome')); //6