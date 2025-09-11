function solution(quiz) {
    var answer = [];
    for (let i = 0; i < quiz.length; i++) {
        let arr = quiz[i].split(' ');
        if (arr[1] == '+') answer.push((Number(arr[0]) + Number(arr[2]) == Number(arr[4])) ? "O" : "X");
        if (arr[1] == '-') answer.push((Number(arr[0]) - Number(arr[2]) == Number(arr[4])) ? "O" : "X");
    }
    return answer;
}