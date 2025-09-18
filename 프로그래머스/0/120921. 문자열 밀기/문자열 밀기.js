function solution(A, B) {
    let cnt = 0;
    for (let i = 0; i < A.length; i++) {
        if (A == B) return cnt;
        A = A.split("");
        let temp = A.pop();
        A.unshift(temp);
        A = A.join("");
        cnt++;
    }
    return -1;
}