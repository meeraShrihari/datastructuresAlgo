function nearestGreaterLeft(arr) { //[1,3,2,4] => [-1,-1,3,-1]
    const outArr = [];
    const stk = [];

    for(let i=0; i<arr.length; i++) {//3
        if(stk.length === 0) {
            outArr.push(-1); //[-1]
        } else if(stk[stk.length-1] > arr[i]) { //3>2
            outArr.push(stk[stk.length-1]); //[-1,-1,3]
        } else {
            while(stk.length > 0 && stk[stk.length-1] <= arr[i]) { //2<3
                stk.pop(); //[4]
            }
            if(stk.length === 0) outArr.push(-1);
            else outArr.push(stk[stk.length-1]);
        }
        stk.push(arr[i]); //[4]
    }
    return outArr;
}

console.log(nearestGreaterLeft([1,3,2,4]));