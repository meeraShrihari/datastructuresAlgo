let arr = [1,2,6,2,6,4,6,2,4];

let count = 1;
let i=0, j=arr.length-1;
while(i<j) {
  if(arr[i] < arr[j]) {
    if(count > 1) count = 1;
    i++;
  } else if(arr[i] > arr[j]) {
    j--;
  } else {
    j--;
    count++;
  }
  
}

console.log(count);