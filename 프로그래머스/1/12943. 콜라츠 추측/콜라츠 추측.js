function solution(num) {
    let cnt = 0;
    for (let i = 0; i < 500; i++) {
        if (num == 1) return cnt;
        num = (num % 2 == 0 ? num / 2 : num * 3 + 1);
        cnt++;
    }
    return -1;
}