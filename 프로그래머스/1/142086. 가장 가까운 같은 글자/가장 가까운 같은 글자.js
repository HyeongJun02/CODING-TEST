function solution(s) {
    let result = [];
    let map = new Map();
    
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            result.push(i - map.get(s[i]));
        } else {
            result.push(-1);
        }
        map.set(s[i], i);
    }
    return result;
}