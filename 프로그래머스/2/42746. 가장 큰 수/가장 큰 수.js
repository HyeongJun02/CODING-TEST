function solution(numbers) {
    numbers = numbers.map(String);
    numbers.sort((a, b) => (b + a) - (a + b));
    const result = numbers.join('');
    return result[0] === '0' ? '0' : result;
}
