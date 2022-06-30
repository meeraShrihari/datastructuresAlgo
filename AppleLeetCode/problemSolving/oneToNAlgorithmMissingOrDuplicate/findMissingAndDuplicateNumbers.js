function findMissingAndDuplicateNumbers(arr) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i] !== i+1) {
            let temp = arr[i]; 
            arr[i] = arr[arr[i]-1]; 
            arr[temp-1] = temp; 
        }
    }
    
    for(let i=0; i<arr.length; i++) {
        if(arr[i] !== i+1) {
            return {'missing' : i+1, 'duplicate' : arr[i]};
        }
    }
}

console.log(findMissingAndDuplicateNumbers([2,3,1,5,1]));

