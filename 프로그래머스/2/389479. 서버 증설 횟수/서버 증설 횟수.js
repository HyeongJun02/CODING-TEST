function solution(players, m, k) {
    let poss = Array(24).fill(m - 1);
    let answer = 0;
    for (let i = 0; i < 24; i++) {
        let add = 0;
        if (players[i] > poss[i]) {
            add = Math.ceil((players[i] - poss[i]) / m);
            answer += add;
            for (let j = i; j < i + k && j < 24; j++) {
                poss[j] += add * m;
            }
        }
    }
    return answer;
}