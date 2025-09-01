function solution(s) {
    var answer = '';
    s = s.toLowerCase();
    var flag = true;
    for (const c of s) {
        if (flag && c != " ") {
            answer += c.toUpperCase();
            flag = false;
            continue;
        }
        flag = (c == " ");
        answer += c;
    }
    return answer;
}