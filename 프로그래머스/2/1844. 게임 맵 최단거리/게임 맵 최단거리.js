function solution(maps) {
    const dx = [0, 0, -1, 1];
    const dy = [1, -1, 0, 0];
    const [goal_x, goal_y] = [maps.length - 1, maps[0].length - 1];
    
    const queue = [[0, 0]];
    
    function check(x, y) {
        if (x < 0 || y < 0 || x > goal_x || y > goal_y) return false;
        if (maps[x][y] === 1) return true;
    }
    
    while (queue.length !== 0) {
        const [now_x, now_y] = queue.shift();
        
        if (now_x === goal_x && now_y === goal_y) {
            return maps[now_x][now_y];
        }
        
        for (let i = 0; i < 4; i++) {
            const [check_x, check_y] = [now_x + dx[i], now_y + dy[i]];
            
            if (check(check_x, check_y)) {
                maps[check_x][check_y] = maps[now_x][now_y] + 1;
                queue.push([check_x, check_y]);
            }
        }
    }
    
    return -1;
}