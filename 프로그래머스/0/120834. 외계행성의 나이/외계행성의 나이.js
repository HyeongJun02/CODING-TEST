function solution(age) {
    var answer = [];
    while (age) {
        answer.push(String.fromCharCode(age % 10 + 97));
        age = ~~(age / 10);
    }
    return answer.reverse().join('');
}