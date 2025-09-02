const GCD = (a, b) => ((a % b) ? GCD(b, a % b) : b);
const LCM = (a, b) => (a * b / GCD(a, b));

function solution(arr) {
    if (arr.length == 1) return arr[0];
    
    var a = arr[0], b;
    for (var i = 1; i < arr.length; i++) {
        b = arr[i]
        a = LCM(a, b);
    }
    return a;
}