function solution(k, score) {
    var answer = [];
    let save = [];
    for (let i = 0; i < score.length; i++) {
        save.push(score[i]);
        save.sort((a, b) => b - a);
        if (save.length > k) {
            save.pop();
        }
        answer.push(save[save.length - 1]);
        // console.log(save);
    }
    return answer;
}