function solution(a, b) {
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    const n = max - min + 1;
    return (n * (min + max)) / 2;
}
