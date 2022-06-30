/**
 * @param {string} s
 * @return {number}
 */
 var balancedStringSplit = function(s) {
    var balanceStrCount = 0;
    var count = 0;
    
    for(let i=0; i<s.length; i++) {
        if(s.charAt(i) === 'L') {
            count++;
        } else if(s.charAt(i) === 'R') {
            count--;
        }
        if(count === 0) {
            balanceStrCount++;
        }
    }
    return balanceStrCount;
};

console.log(balancedStringSplit('RLRRLLRL'));