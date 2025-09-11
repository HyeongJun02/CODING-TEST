function solution(num, k) {
    let result = String(num).split("").indexOf(String(k)) + 1;
    return result ? result : -1
}