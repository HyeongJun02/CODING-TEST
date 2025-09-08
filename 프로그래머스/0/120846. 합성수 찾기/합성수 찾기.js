function solution(n) {
    let num = Array(101).fill(0);
    var answer = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (num[i] > 2) break;
            num[i * j]++;
        }
        if (num[i] > 2) answer++;
    }
    return answer;
}