function solution(array, n) {
    array.push(n);
    let index = array.sort((a, b) => a - b).indexOf(n);
    let a1 = (index == array.length - 1) ? 200 : array[index + 1] - n;
    let a2 = (index == 0) ? 200 : n - array[index - 1];
    return (a1 < a2) ? array[index + 1] : array[index - 1];
}