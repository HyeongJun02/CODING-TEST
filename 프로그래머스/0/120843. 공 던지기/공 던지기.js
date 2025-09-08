function solution(numbers, k) {
    let now = -1;
    let leng = numbers.length
    while (k--) {
        now += 2;
        now = (now > leng) ? (now % leng) : now;
    }
    return now;
}