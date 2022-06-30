function sortArray(arr) {
    if(arr.length === 1) return arr;
    let sortedArr = sortArray(arr.slice(0,arr.length-1));
    let rightVal = arr[arr.length-1];
    let tempArr = [];
    let i=0;
    let j=0;
    while(i<sortedArr.length) { //[0,4,5]
        if(rightVal <= sortedArr[i]){
            tempArr[j] = rightVal;
        }else {
            tempArr[j] = sortedArr[i];//[0,2]
            i++;
        }
        j++;
    }
    if(rightVal > sortedArr[i-1])
    tempArr[j] = rightVal;
    return tempArr;
}

console.log(sortArray([5,0,4,2]));