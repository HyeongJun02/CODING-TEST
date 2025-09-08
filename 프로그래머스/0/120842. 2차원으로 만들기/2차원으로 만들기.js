function solution(num_list, n) {
    var answer = Array.from(Array(num_list.length / n), () => Array(n));
    for (let i = 0; i < num_list.length / n; i++) {
        for (let j = 0; j < n; j++) {
            answer[i][j] = num_list[i * n + j];
        }
    }
    return answer;
}