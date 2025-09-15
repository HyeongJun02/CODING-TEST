function solution(s) {
    function isCorrect(str) {
        let g = [];
        let flag = true;
        for (let i = 0; i < str.length; i++) {
            if (str[i] == "]") (g[g.length - 1] == "[") ? g.pop() : (flag = false);
            else if (str[i] == ")") (g[g.length - 1] == "(") ? g.pop() : (flag = false);
            else if (str[i] == "}") (g[g.length - 1] == "{") ? g.pop() : (flag = false);
            else g.push(str[i]);
            if (!flag) break;
        }
        if (g.length != 0) flag = false;
        return flag;
    }
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        isCorrect(s) && result++;
        s = s.slice(1) + s[0];
    }
    return result;
}