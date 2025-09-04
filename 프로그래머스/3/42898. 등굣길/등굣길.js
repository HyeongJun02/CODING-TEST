let mod = 1000000007;

function solution(m, n, puddles) {
    let water = Array.from(Array(m + 1), () => Array(n + 1).fill(false));
    for (puddle of puddles) water[puddle[0]][puddle[1]] = true;
    let dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));
    for (let i = 1; i <= m; i++) {
        if (water[i][1]) break;
        dp[i][1] = 1;
    }
    for (let i = 1; i <= n; i++) {
        if (water[1][i]) break;
        dp[1][i] = 1;
    }
    for (let i = 2; i <= n; i++) {
        for (let j = 2; j <= m; j++) {
            if (water[j][i]) continue;
            dp[j][i] = (dp[j][i - 1] % mod + dp[j - 1][i] % mod) % mod;
        }
    }
    return dp[m][n];
}