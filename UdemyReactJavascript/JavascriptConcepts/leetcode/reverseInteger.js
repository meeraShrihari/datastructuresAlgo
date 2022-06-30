function reverseInteger(x) {
    if(typeof x !== 'number') {
        return null;
    }
    if(x < (-2) ** 31 || x > (2 ** 31 - 1) || x === 0) return 0;

    let num = Math.abs(x);
    if(num/10 < 1) return x;
    let sum = 0;
    let rem = 0;
    while(num > 0) {
        rem = num % 10;
        sum = sum * 10 + rem;
        num = Math.floor(num / 10);
    }
    if(x < 0) return sum * -1;
    return sum;
}

console.log(reverseInteger(-123));