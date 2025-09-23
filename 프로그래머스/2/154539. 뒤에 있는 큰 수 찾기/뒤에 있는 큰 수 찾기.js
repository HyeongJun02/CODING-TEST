function solution(numbers) {
    let n = numbers.length;
    let result = new Array(n).fill(-1);
    let stack = [];

    for (let i = 0; i < n; i++) {
        while (numbers[stack[stack.length - 1]] < numbers[i]) {
            let idx = stack.pop();
            result[idx] = numbers[i];
        }
        stack.push(i);
    }
    return result;
}
