function solution(n, t, m, p) {
    let length = 0;
    let output = "";
    let i = 0;
    while (length <= m * t) {
        output += i.toString(n);
        length = output.length;
        i++;
    }
    let result = "";
    for (let i = 0; i < t; i++) {
        result += output[m * i + p - 1];
    }
    return result.toUpperCase();
}