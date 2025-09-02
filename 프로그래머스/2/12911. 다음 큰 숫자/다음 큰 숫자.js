function solution(n) {
    let cnt_n = n.toString(2).split("1").length - 1;
    while (true) {
        n++;
        let cnt_a = n.toString(2).split("1").length - 1;
        if (cnt_n == cnt_a) return n;
    }
}