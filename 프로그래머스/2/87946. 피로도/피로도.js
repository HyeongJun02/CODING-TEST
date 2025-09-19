function solution(k, dungeons) {
    dungeons.sort((a, b) => a[0] - b[0]);
    let visited = Array(dungeons.length).fill(false);
    let count = 0;
    let max = 0;
    function dfs(now) {
        visited[now] = true;
        
        if (k < dungeons[now][0]) { // 던전 입구컷
            visited[now] = false;
            return;
        }
        
        k -= dungeons[now][1]; // 피로도 사용
        count++;
        
        for (let i = 0; i < dungeons.length; i++) {
            if (visited[i] == true) continue;
            dfs(i);
        }
        
        max = (count > max) ? count : max;
        
        k += dungeons[now][1]; // 피로도 회복
        count--;
        
        visited[now] = false;
    }
    
    for (let i = 0; i < dungeons.length; i++) {
        dfs(i);
    }
    
    return max;
}