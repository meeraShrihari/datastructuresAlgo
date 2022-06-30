function isSubsequence(s1, s2) {
    let i=0, j=0;
    while(j<s2.length && i<s1.length) {
        if(s2[j] === s1[i]) i++;
        j++;
    }
    if(i === s1.length) return true
    return false;
}

console.log(isSubsequence('hello', 'hello world')); //true
console.log(isSubsequence('sing', 'sting')); //true
console.log(isSubsequence('abc', 'abracadabra')); //true
console.log(isSubsequence('abc', 'acb')); //false (order matters)