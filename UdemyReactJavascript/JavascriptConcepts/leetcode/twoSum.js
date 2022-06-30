function twoSum(arr, target) {
    let map = new Map();
    for(let i=0; i<arr.length; i++) {
        let counterpart = target - arr[i];
        if(map.has(counterpart)) {
            return [map.get(counterpart), i];
        }
        map.set(arr[i], i);
    }
}

console.log(twoSum([2,7,2,7], 9));