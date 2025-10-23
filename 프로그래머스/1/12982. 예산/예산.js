function solution(d, budget) {
    d.sort((a, b) => a - b);
    let total = 0;
    for (var i = 0; i < d.length; i++) {
        total += d[i];
        if (total > budget) break;
    }
    return i;
}