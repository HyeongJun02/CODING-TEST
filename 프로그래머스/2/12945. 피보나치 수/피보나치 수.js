// function funfibo(n) {
//     if (n == 1 || n == 0) return n;
//     return funfibo(n - 1) + funfibo(n - 2);
// }

var fibo = Array(100001);
fibo[0] = 0;
fibo[1] = 1;

function func(n) {
    for (var i = 2; i <= n; i++) {
        fibo[i] = (fibo[i - 1] % 1234567 + fibo[i - 2] % 1234567) % 1234567;
    }
    return fibo[n];
}

function solution(n) {
    return func(n);
}