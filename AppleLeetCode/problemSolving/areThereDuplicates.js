function areThereDuplicates() {
    if(arguments.length < 2) return false;
    let obj = {};
    for(let num in arguments) {
        if(!obj[arguments[num]]) {
            obj[arguments[num]] = 1;
        } else {
            return true;
        }
    }
    return false;
}

console.log(areThereDuplicates(1,2,1,3));