
/**
 * 
 * Video explanation here https://www.youtube.com/watch?v=uUXXEgK2Jh8&list=PL_z_8CaSLPWeM8BDJmIYDaoQ5zuwyxnfj&index=4
 * @param arr of numbbers 
 * @param {*} size of window
 * @returns array of 1st nagative integers from all the available window of size 'size'
 */
function firstNegNumInWindOfSizeK(arr, size) {
    let i=0, j=0;
    let res = [];
    let fin = [];
    while(j < arr.length) {//2
        if(arr[j] < 0) res.push(arr[j]); //[]
        if(j-i+1 < size) {//3not<3
            j++;
        } else if(j-i+1 === size) {3===3
            if(res.length === 0) fin.push(0);
            else {
                fin.push(res[0]); //[-1,-1,-7,-15,-15,0]
            }
            if(res[0] === arr[i]) {
                res.shift();
            }
            i++;
            j++;
        }
    }
    return fin;
}

console.log(firstNegNumInWindOfSizeK([12,-1,-7,8,-15,30,16,28], 3)); //[-1, -1, -7, -15, -15, 0]