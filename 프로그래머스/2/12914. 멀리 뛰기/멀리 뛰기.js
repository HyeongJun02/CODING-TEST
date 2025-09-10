function solution(n) {
    let dp = Array(n + 1).fill(0);
    dp[1] = 1;
    dp[2] = 1;
    for (let i = 2; i < n; i++) {
        dp[i] += (dp[i - 1] % 1234567); // 1칸 점프
        dp[i + 1] += (dp[i - 1] % 1234567); // 2칸 점프
    }
    dp[n] += (dp[n - 1] % 1234567);
    return dp[n] % 1234567;
}