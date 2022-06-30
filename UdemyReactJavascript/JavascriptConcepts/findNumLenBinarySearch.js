const arr = [1,2,3,4];

/*function findMinMax(arr) {
  let minNum = Math.min(...arr);
  let maxNum = Math.max(...arr);

  let arraySum = arr.reduce((sum, num) => {
    return sum + num;
  }, 0);

  
  console.log('Min Sum = ' + (arraySum - maxNum));
  console.log('Max Sum = ' + (arraySum - minNum));
}*/

function binarySearch(arr, sum) {
  if(arr.length === 1) return 1;
  return sum += binarySearch(arr.slice(0,arr.length/2), sum) + binarySearch(arr.slice(arr.length/2, arr.length), sum);
  
}

function findMinMax(arr) {
  console.log(binarySearch(arr, 0))
}

findMinMax([1,2,3,4,38,100,34,82,29]);