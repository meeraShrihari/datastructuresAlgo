

const knapsack_memoization = (wt, val, w, n, dp = new Map()) => {
    if(w === 0 || n === 0) return 0;
    const key = `${w}|${n}`;
    if(dp.has(key)) return dp.get(key);

    if(wt[n-1] <= w) {
        dp.set(key, Math.max(
            val[n-1] + knapsack_memoization(wt, val, w-wt[n-1], n-1, dp),
            knapsack_memoization(wt, val, w, n-1, dp)
        ));        
    } else {
        dp.set(key, knapsack_memoization(wt, val, w, n-1, dp));
    }
    return dp.get(key);
}

console.log(knapsack_memoization([10,20,30], [60,100,120], 50, 3));