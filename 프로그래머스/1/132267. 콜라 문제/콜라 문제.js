function solution(a, b, n) {
    let tmp = 0;
    let result = 0;
    while (n) {
        n += tmp;
        tmp = n % a;
        n = ~~(n / a) * b;
        result += n;
    }
    return result;
}