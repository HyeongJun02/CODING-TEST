function solution(arr, divisor) {
    let result = arr.filter((e) => !(e % divisor));
    result.sort((a, b) => a - b);
    return result.length === 0 ? [-1] : result;
}