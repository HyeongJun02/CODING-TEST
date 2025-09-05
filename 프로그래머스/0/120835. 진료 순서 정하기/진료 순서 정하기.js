function solution(emergency) {
    let m = new Map();
    let emergency2 = [...emergency];
    emergency2.sort((a, b) => b - a);
    emergency2.forEach((e, i) => m[e] = i + 1);
    var answer = [];
    for (var i = 0; i < emergency.length; i++) {
        answer.push(m[emergency[i]]);
    }
    return answer;
}