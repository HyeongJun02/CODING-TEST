function solution(word) {
    let mo = ['A', 'E', 'I', 'O', 'U'];
    let cnt = 0;
    
    function dfs(w) {
        cnt++;
        if (w == word) return true;
        if (w.length == 5) return;
        for (let i = 0; i < 5; i++) {
            if (dfs(w + mo[i])) return true;
        }
    }
    
    for (let i = 0; i < 5; i++) {
        if (dfs(mo[i])) return cnt;
    }
}