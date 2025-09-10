function solution(s) {
    let result = "";
    
    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        if (s.indexOf(ch) == s.lastIndexOf(ch)) {
            result += ch;
        }
    }
    
    return result.split("").sort().join("");
}