function solution(s) {
    const arr = s.split(" ");
    var max = arr.reduce((a, b) => (Math.max(a, b)));
    var min = arr.reduce((a, b) => (Math.min(a, b)));
    var answer = min + " " + max;
    return answer;
}