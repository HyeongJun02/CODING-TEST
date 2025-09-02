function solution(array) {
    var cnt = Array(1000).fill(0);
    var max = 0;
    var answer = 0;
    for (var e of array) {
        cnt[e]++;
        if (cnt[e] > max) {
            max = cnt[e];
            answer = e;
        } else if (cnt[e] == max) answer = -1;
    }
    return answer;
}