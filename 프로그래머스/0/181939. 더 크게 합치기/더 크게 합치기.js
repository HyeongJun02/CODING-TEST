function solution(a, b) {
    let n = [+(a+""+b), +(b+""+a)];
    return n[0] < n[1] ? n[1] : n[0];
}