function solution(before, after) {
    let bef = Array(26).fill(0);
    let aft = Array(26).fill(0);
    if (before.length != after.length) return 0;
    for (let i = 0; i < before.length; i++) {
        bef[before[i].charCodeAt() - 97]++;
        aft[after[i].charCodeAt() - 97]++;
    }
    for (let i = 0; i < 26; i++) {
        if (bef[i] != aft[i]) return 0;
    }
    return 1;
}