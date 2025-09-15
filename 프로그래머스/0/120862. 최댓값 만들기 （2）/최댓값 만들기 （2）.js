function solution(numbers) {
    let l = numbers.length;
    numbers.sort((a, b) => a - b);
    return Math.max(numbers[0] * numbers[1], numbers[l - 1] * numbers[l - 2]);;
}