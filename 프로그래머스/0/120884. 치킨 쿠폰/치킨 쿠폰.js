function solution(chicken) {
    let answer = 0;
    let coupon = chicken;

    while (coupon >= 10) {
        const bonus = ~~(coupon / 10);
        answer += bonus;
        coupon = (coupon % 10) + bonus;
    }

    return answer;
}
