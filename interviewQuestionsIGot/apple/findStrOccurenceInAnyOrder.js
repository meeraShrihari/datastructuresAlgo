
//Given an input 'actor', find if 'cat' exists in actor in any order, but consecutive

//Steps
/**
 * add 'cat' in object - char as key, occurence as value
 * take 2 pointers - 1 points 1st char and other length of cat 
 * 
 */

function findOccurence(str1, str2) {
    var str2Obj = {}
    for(var i=0; i<str2.length; i++) {
        var c = str2[i];
        str2Obj[c] = (str2Obj[c] || 0) ? str2Obj[c] + 1 : 1;
    }
    var i=0;
    var j=str2.length;
    str2 = str2.split('').sort().join('');
    while(i <= str1.length-str2.length) {
        var s = str1.substring(i,j).split('').sort().join('');
        if(s === str2) return true;
        else{
            i++;
            j++;
        }
    }
    return false;
}

console.log(findOccurence('acrctaor', 'cat'));