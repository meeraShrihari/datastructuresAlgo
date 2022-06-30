var romanToInt = function(s) {
    var sym = {
     'I':1,
     'V':5,
     'X':10,
     'L':50,
     'C':100,
     'D':500,
     'M':1000   
    };
    
    var sum = 0;
    for(var i=0; i<s.length; i++) {//2 C
        if(sym[s[i]] < sym[s[i+1]]) {
            sum += sym[s[i+1]] - sym[s[i]]; //1994
            i++;
        } else {
            sum += sym[s[i]]; //2
        }
    }
    return sum;
};

console.log(romanToInt('MCMXCIV'));