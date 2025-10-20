function solution(s) {
    let length = s.length;
    return (length % 2) ? s[~~(length / 2)] : s[length / 2 - 1] + s[length / 2];
}