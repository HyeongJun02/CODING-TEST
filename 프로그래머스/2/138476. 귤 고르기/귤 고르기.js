function solution(k, tangerine) {
    let counts = {};
    for (const t of tangerine) {
        counts[t] = (counts[t] || 0) + 1;
    }
    let sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    var answer = 0, total = 0;
    for (const s of sorted) {
        total += s[1];
        answer++;
        if (total >= k) break;
    }
    return answer;
}