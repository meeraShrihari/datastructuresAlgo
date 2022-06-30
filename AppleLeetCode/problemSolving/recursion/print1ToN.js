function print1ToN(n) {
    if(n === 1) {
        console.log(n);
        return 1;
    }
    print1ToN(n-1);
    console.log(n);
}

print1ToN(7);