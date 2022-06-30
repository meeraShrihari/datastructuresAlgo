
const arr = [5, 10, 1, 21];
for(let i=0; i<arr.length; i++) {
    setTimeout(() => {
        console.log(`Index: ${i} , element: ${arr[i]}`);
    }, arr[i])
}