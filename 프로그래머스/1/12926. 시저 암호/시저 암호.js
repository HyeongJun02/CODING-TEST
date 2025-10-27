function solution(s, n) {
    let lets = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ                           ";
    return s.split("").map((ch) => lets[lets.indexOf(ch) + n]).join("");
}
