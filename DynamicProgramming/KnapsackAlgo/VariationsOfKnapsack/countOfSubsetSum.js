
function countOfSubsetSum(arr, sum, n) {
    let dp = new Array(n+1);
    for(let i=0; i<n+1; i++) {
      dp[i] = new Array(sum+1);
      for(let j=0; j<sum+1; j++) {
        if(i === 0) dp[i][j] = 0;
        if(j === 0) dp[i][j] = 1;
      }
    }
    for(let i=1; i<n+1; i++) {
      for(let j=1; j<sum+1; j++) {
        if(arr[i-1] <= j) {
          dp[i][j] = dp[i-1][j-arr[i-1]] + dp[i-1][j];
        } else {
          dp[i][j] = dp[i-1][j];
        }
      }
    }
    console.log(dp);
    return dp[n][sum];
  }
  
  console.log(countOfSubsetSum([2,3,5,6,8,10], 10, 6));