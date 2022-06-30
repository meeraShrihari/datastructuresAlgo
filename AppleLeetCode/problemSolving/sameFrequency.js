function sameFrequency(num1, num2){
    if(num1.toString().length !== num2.toString().length){
        return false;
    }
    let obj1 = {};
    while(num1 > 0) {
        let n = num1 % 10;
        num1 = Math.floor(num1 / 10);
        obj1[n] = (obj1[n] || 0) ? ++obj1[n] : 1;
    }
    while(num2 > 0) {
        let n = num2 % 10;
        num2 = Math.floor(num2 / 10);
        if(!obj1[n]) return false;
        obj1[n]--;
    }
    return true;
}


console.log(sameFrequency(121, 211));