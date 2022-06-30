
/*const knapsack_toDown_dp = (wt, val, w, n) => {
    //Base condition - initialize 2d array
    const dp = new Array(n+1);
    for(let i=0; i<n+1; i++) {
        dp[i] = new Array(w+1);
        for(let j=0; j<w+1; j++) {
            if(i === 0 || j === 0) dp[i][j] = 0;
        }
    }

    for(let i=0; i<n+1; i++) {
        for(let j=0; j<w+1; j++) {
            if(i === 0 || j === 0) return 0;

            if(wt[i-1] > j) {
                dp[i][j] = dp[i-1][j];
            } else {
                dp[i][j] = Math.max(dp[i-1][j], val[i-1] + dp[i-1][])
            }
        }
    }
}*/
function knapsack(wt, val, w, n) {
    var dp = new Array(n+1);
    //var dp = [];
    for(var i=0; i<n+1; i++){
      dp[i] = new Array(w+1);
      for(var j=0; j<w+1; j++) {
        if(i===0 || j===0) dp[i][j] = 0;
      }
    }
  
    for(var i=1; i<n+1; i++) {
      for(var j=1; j<w+1; j++) {
        if(wt[i-1] <= j) {
          dp[i][j] = Math.max(val[i-1] + dp[i-1][j-wt[i-1]], dp[i-1][j]);
          console.log(dp);
        } else{
            dp[i][j] = dp[i-1][j];
            console.log(dp);
        }
      }
    }
    //console.log(dp);
    return dp[n][w];
  }
  
  console.log(knapsack([1,2,3], [6,10,12], 5, 3));

//console.log(knapsack([10,20,30], [60,100,120], 50, 3));