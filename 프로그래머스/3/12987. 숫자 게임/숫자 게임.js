function solution(A, B) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);
    if (B[B.length - 1] <= A[0]) return 0;
    let result = 0;
    for (let i = 0; A.length; i++) {
        if (B[i] > A[0]) {
            result++;
            A.shift();
        } else {
            A.pop();
        }
    }
    return result;
}