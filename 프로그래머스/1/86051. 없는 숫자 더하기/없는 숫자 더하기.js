function solution(numbers) {
    return 45 - numbers.reduce((n, sum) => sum + n, 0);
}