var longestCommonPrefix = function(strs) {
    strs = strs.sort((a,b) => a.length - b.length);
    var minStr = strs[0];
    var prefixCount = 0;
    for(var i=0; i<minStr.length; i++) {
        if(strs.every(s => s[i] === minStr[i])) {
            prefixCount++;
        }else {
            break;
        }
    }
    if(prefixCount === 0) return '';
    return minStr.substring(0,prefixCount);
};

console.log(longestCommonPrefix(["flower","flow","flight"]));