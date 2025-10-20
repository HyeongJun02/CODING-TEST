function solution(a, b) {
    return a.reduce((sum, n, i) => sum + n * b[i], 0)
}