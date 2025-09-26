// By. GPT
function solution(land) {
    let n = land.length;
    let dp = [...land[0]]; // 첫 행 값 복사
    for (let i = 1; i < n; i++) {
        const [a, b, c, d] = dp;  // 이전 행 4열 값
        dp = [
            land[i][0] + Math.max(b, c, d),
            land[i][1] + Math.max(a, c, d),
            land[i][2] + Math.max(a, b, d),
            land[i][3] + Math.max(a, b, c),
        ];
    }
    return Math.max(...dp);
}

// function solution(land) {
//     let n = land.length;
//     let dp = Array.from(Array(n), () => new Array(4).fill(0));
//     for (let i = 0; i < 4; i++) {
//         dp[0][i] = land[0][i];
//     }
//     for (let i = 1; i < n; i++) {
//         for (let j = 0; j < 4; j++) {
//             for (let k = 0; k < 4; k++) {
//                 if (j == k) continue;
//                 let value = land[i][j] + dp[i - 1][k];
//                 dp[i][j] = dp[i][j] < value ? value : dp[i][j];
//             }
//         }
//     }
//     return dp[n - 1].reduce((max, e) => (max < e) ? e : max, 0);
// }