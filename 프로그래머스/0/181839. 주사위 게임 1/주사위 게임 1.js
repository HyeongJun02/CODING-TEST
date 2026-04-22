function solution(a, b) {
    let n=a%2+b%2;
    return n?(n===1?2*(a+b):a*a+b*b):Math.abs(a-b);
}