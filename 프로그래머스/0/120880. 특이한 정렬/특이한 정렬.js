function solution(numlist, n) {
    numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
    return numlist
}