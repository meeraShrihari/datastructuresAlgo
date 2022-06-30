
//Time complexity - O(2^n) => because every item can have 2 choices at max
const knapsack = (wt, val, w, n) => {
    //Base codition => if weight is 0 or number of items n is 0
    if(w === 0 || n === 0) return 0;

    if(wt[n-1] <= w) {
        //Either include the item or not - Take max of both => if including then add the values
        return Math.max(val[n-1] + knapsack(wt, val, w-wt[n-1], n-1), knapsack(wt, val, w, n-1));
    } else {
        return knapsack(wt, val, w, n-1);
    }
}

console.log(knapsack([10,20,30], [60,100,120], 50, 3));