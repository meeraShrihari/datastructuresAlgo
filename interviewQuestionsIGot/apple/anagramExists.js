function isAnagram(str1, str2) {
    if(str1.length !== str2.length) return false;
    const obj = {};
    for(let s of str1) {
        obj[s] = (obj[s] || 0) ? ++obj[s] : 1;
    }
    for(let s of str2) {
        if(!obj[s]) return false;
        obj[s] -= 1;
    }
    return true;
}

function doesAnagramExist(str1, str2) {
    if(str1.length < str2.length) return false;
    for(var i=0; i<str1.length-2; i++) {
        if(isAnagram(str1.substring(i,i+3), str2)) return true;
    }
    return false;
}

console.log(doesAnagramExist('acratcor', 'cat'));
//console.log(isAnagram('act', 'cat'));