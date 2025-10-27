function solution(number) {
    let result = 0;
    let length = number.length;
    function dfs(depth, n, hap) {
        if (depth === 3 && hap === 0) {
            result++;
            return;
        }
        for(let i = n + 1; i < length; i++) {
            dfs(depth + 1, i, hap + number[i]);
        }
    }
    for (let i = 0; i < length - 2; i++) dfs(1, i, number[i])
    return result;
}