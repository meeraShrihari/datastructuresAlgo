function nextLargestElement(arr) { //[1,3,2,4] => [3,4,4,-1]
    const outArr = [];
    const stk = [];

    for(let i=arr.length-1; i>=0; i--) {
        if(stk.length === 0) {
            outArr.push(-1); //[-1]
        } else if(stk[stk.length-1] > arr[i]) { //4>2
            outArr.push(stk[stk.length-1]); //[-1,4]
        } else {
            while(stk.length > 0 && stk[stk.length-1] <= arr[i]) { //2<3
                stk.pop(); //[4]
            }
            if(stk.length === 0) outArr.push(-1);
            else outArr.push(stk[stk.length-1]);
        }
        stk.push(arr[i]);
    }
    return outArr.reverse();
}

console.log(nextLargestElement([1,3,2,4]));