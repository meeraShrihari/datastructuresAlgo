function nearestSmallerLeft(arr) {
    const stack = [];
    const out = [];
    for(let i=0; i<arr.length; i++) {
        if(stack.length === 0) out.push(-1);
        else if(stack[stack.length-1] < arr[i]) {
            out.push(stack[stack.length-1]);
        } else {
            while(stack.length > 0 && stack[stack.length-1] > arr[i]) {
                stack.pop();
            }
            if(stack.length === 0) out.push(-1);
            else out.push(stack[stack.length-1]);
        }
        stack.push(arr[i]);
    }
    return out;
}

console.log(nearestSmallerLeft([4,5,2,10,8])) //[-1,4,-1,2,2]