function solution(n,a,b)
{
    if (a > b) {
        let tmp = b;
        b = a;
        a = tmp;
    } 
    let round = 0;
    while (true) {
        round++;
        if (b % 2 == 0) {
            if (b - a == 1) break;
        }
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
    }
    return round;
}