function solution(array) {
    return array.reduce((sum, n) => sum + String(n).split('').filter((a) => a == "7").length, 0);
}