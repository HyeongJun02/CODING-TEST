function solution(n) {
    while (n % 2 == 0) n >>= 1;
    
    let cnt = 0;
    for (let d = 1; d * d <= n; d += 2) {
        if (n % d == 0) {
            cnt += (d * d == n) ? 1 : 2;
        }
    }
    
    return cnt;
}

/* two pointer sliding
function solution(n) {
    let left = 1, right = 1;
    let sum = 1, cnt = 0;
    
    while (left <= n) {
        if (sum == n) {
            cnt++;
            sum -= left;
            left++;
        } else if (sum < n) {
            right++;
            sum += right;
        } else {
            sum -= left;
            left++;
        }
    }
    return cnt;
}
*/

/* DP 효율성 테스트 시간 초과
function solution(n) {
    const dp = Array(10000).fill(0);
    var answer = 0;
    for (var i = 1; i <= n; i++) {
        dp[i] = i + dp[i - 1];
    }
    for (var i = n; i > 0; i--) {
        for (var j = n - 1; j >= 0; j--) {
            if (n == (dp[i] - dp[j])) {
                answer++;
                break;
            }
        }
    }
    return answer;
}
*/