function solution(score) {
    let average_sort = [];
    let average = [];
    for (let i = 0; i < score.length; i++) {
        average_sort.push(score[i].reduce((res, s) => res + s, 0) / 2);
        average.push(average_sort[i]);
    }
    average_sort.sort((a, b) => b - a);
    var answer = [];
    for (let i = 0; i < average.length; i++) {
        answer.push(average_sort.indexOf(average[i]) + 1);
    }
    return answer;
}