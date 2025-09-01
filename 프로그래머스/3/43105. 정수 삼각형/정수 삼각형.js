function solution(dp) {
    const length = dp.length;
    for (let i=1; i<length; i++) {
        for (let j=0; j<i+1; j++) {
            if (j - 1 < 0) dp[i][j] += dp[i-1][j];
            else if (j + 1 > i) dp[i][j] += dp[i-1][j-1];
            else {
                dp[i][j] += (dp[i-1][j-1] > dp[i-1][j]) ? dp[i-1][j-1] : dp[i-1][j];
            }
        }
    }
    return Math.max(...dp[length - 1]);
}