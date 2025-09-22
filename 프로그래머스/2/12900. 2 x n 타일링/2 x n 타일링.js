function solution(n) {
    let res = [1, 1];
    let MOD = 1000000007;
    for (let i = 2; i <= n; i++) {
        res[i % 2] = ((res[0] % MOD) + (res[1] % MOD)) % MOD;
    }
    return res[n % 2];
}