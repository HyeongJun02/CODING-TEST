function solution(k, m, score) {
    let index = -1;
    let result = 0;
    score.sort((a, b) => b - a);
    while (true) {
        index += m;
        if (index >= score.length) break;
        result += (score[index] * m);
    }
    return result;
}