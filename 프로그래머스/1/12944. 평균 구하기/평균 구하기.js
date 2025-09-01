function solution(arr) {
    return arr.reduce((sum, e) => sum += e, 0) / arr.length;;
}