function solution(s) {
    let numbers = new Array;
    s.split(' ').forEach(e => (e == 'Z') ? (numbers.pop()) : (numbers.push(e)));
    return numbers.reduce((sum, n) => sum + Number(n), 0);
}