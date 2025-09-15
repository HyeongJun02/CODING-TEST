function solution(dots) {
    let a = Math.max(Math.abs(dots[0][0] - dots[1][0]), Math.abs(dots[0][0] - dots[2][0]));
    let b = Math.max(Math.abs(dots[0][1] - dots[1][1]), Math.abs(dots[0][1] - dots[2][1]));
    return a * b;
}