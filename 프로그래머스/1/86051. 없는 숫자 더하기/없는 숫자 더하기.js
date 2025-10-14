function solution(numbers) {
    return numbers.reduce((sum, n) => sum - n, 45);
}