function medianOfTwoSortedArrays(arr1, arr2) {
    let finalArr = [...arr1, ...arr2].sort((a,b) => a-b);
    let len = finalArr.length;
    let m = Math.floor(len / 2);
    
    return len % 2 !== 0 ? 
        finalArr[m]:
        (finalArr[m] + finalArr[m-1]) / 2;
}

console.log(medianOfTwoSortedArrays([1,2,4,7], [4,6,7,8,9]));