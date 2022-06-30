function maxSubArrayProduct1(arr) {
    let max = 0;
    let prod = 1;
    let neg = 0;
    for(let i=0, j=0; i<arr.length; i++) {
        if(arr[i] === -1) neg++;
        if(arr[i] === 1) {
            while(neg%2 !== 0) {
                if(arr[j]){}
            }
        }
    }
}

console.log(maxSubArrayProduct1([1,-1,1,1,-1,-1]));