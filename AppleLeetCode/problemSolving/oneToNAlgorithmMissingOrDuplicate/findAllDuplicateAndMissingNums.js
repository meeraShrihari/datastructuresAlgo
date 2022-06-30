function findAllDuplicateAndMissingNums(arr) {
    let dup = new Set();
    let miss = new Set();
    let i=0;
    while(i<arr.length) {
        if(arr[i] !== i+1) {
            if(arr[arr[i]-1] === arr[i]) {
                dup.add(arr[i]); //[1,2,3]
                i++;
            }else {
                let temp = arr[i];
                arr[i] = arr[arr[i]-1];
                arr[temp-1] = temp; //[1,2,3,1,5,3,2,8]
            }
        }else {
            i++;
        }
    }
    for(let i=0; i<arr.length; i++) {
        if(arr[i] !== i+1) {
            miss.add(i+1);
        }
    }
    return {
        'duplicate' : dup,
        'missing' : miss
    }
}

console.log(findAllDuplicateAndMissingNums([2,3,1,8,2,3,5,1]));
                                        // [1,2,3,4,5,6,7,8]