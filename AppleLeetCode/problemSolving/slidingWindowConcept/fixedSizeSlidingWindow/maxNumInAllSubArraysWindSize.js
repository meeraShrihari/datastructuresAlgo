/**
 * https://www.youtube.com/watch?v=xFJXtB5vSmM&list=PL_z_8CaSLPWeM8BDJmIYDaoQ5zuwyxnfj&index=6
 * @param {*} arr 
 * @param {*} size of window
 * @returns 
 */

function maxNumInAllSubArrays(arr, size) {
    let i=0; 
    let j=0;
    let res = [];
    //let max = -Infinity;
    let maxQueue = [-Infinity];
    while(j < arr.length) {
        //calculation
        //max = Math.max(max, arr[j]); //4
        while(maxQueue.length > 0 && maxQueue[maxQueue.length - 1] < arr[j]) {
            maxQueue.pop();
        }
        maxQueue.push(arr[j]); //[5]
        if(j-i+1 < size) {
            j++;
        } else if(j-i+1 === size) {
            //get ans from above calc
            res.push(maxQueue[0]); //[3,3]
            //sliding window
            if(arr[i] === maxQueue[0]) {
                maxQueue.pop(); //[-1,-3]
            }
            i++; j++;
        }
    }
    return res;
}

console.log(maxNumInAllSubArrays([1,3,-1,-3,5,3,6,7], 3)); // [3,3,5,5,6,7]