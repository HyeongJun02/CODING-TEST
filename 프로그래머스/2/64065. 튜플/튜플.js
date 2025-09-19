function solution(s) {
    var answer = [];
    s = JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]"));
    s.sort((a, b) => a.length - b.length);
    answer.push(Number(s[0]));
    for (let i = 1; i < s.length; i++) {
        let res = s[i].filter((n) => (!s[i - 1].includes(n)));
        answer.push(Number(res));
    }
    return answer;
}