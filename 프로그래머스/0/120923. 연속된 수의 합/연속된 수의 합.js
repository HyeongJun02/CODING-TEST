function solution(num, total) {
    let result = [];
    let v = (num % 2 == 1) ? total / num - ~~(num / 2) : ~~(total / num) - num / 2 + 1;
    for (let i = 0; i < num; i++) result.push(v + i);
    return result;
}