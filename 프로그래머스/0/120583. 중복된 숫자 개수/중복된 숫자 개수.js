function solution(array, n) {
    array.sort((a, b) => a - b);
    return array.indexOf(n) == -1 ? 0 : array.lastIndexOf(n) - array.indexOf(n) + 1;
}