function nearestSmallerRight(arr) { //[4,5,2,10,8] => [2,2,-1,8,-1]
    const out = [];
    const stack = [];
    for(let i=arr.length-1; i>=0; i--) {
        if(stack.length === 0) out.push(-1);
        else if(stack[stack.length - 1] < arr[i]) out.push(stack[stack.length - 1]);
        else {
            while(stack.length > 0 && stack[stack.length - 1] > arr[i]) stack.pop();
            if(stack.length === 0) out.push(-1);
            else out.push(stack[stack.length - 1]);
        }
        stack.push(arr[i]);
    }
    return out.reverse();
}

console.log(nearestSmallerRight([4,5,2,10,8])); //[2,2,-1,8,-1]