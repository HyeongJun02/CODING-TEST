function solution(array) {
    let max = Math.max(...array);
    return [Math.max(...array), array.indexOf(Math.max(...array))];
}