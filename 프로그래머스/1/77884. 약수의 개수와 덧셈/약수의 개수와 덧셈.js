function check(n) {
    let cnt = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (i == Math.sqrt(n)) cnt++;
        if (n % i == 0) cnt += 2;
    }
    return cnt;
}

function solution(left, right) {
    let result = 0;
    for (let i = left; i <= right; i++) {
        result += (check(i) % 2 ? -i : +i);
    }
    return result;
}