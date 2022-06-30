function charCount(str) {
    var obj = {}
    for(var char of str) {
        char = char.toLowerCase();
        if(isAlphanumeric(char)){
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

function isAlphanumeric(char) {
    var code = char.charCodeAt(0);
    if((code >= 97 && code <= 122) || (code >= 65 && code <= 90) || (code >= 48 && code <= 57)) {
        return true;
    }
    return false;
}

console.log(charCount('Hello'));

