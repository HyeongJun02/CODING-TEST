function solution(x, y, n) {
    if (x === y) return 0;
    const queue = [[x, 0]];
    const visited = new Set();
    visited.add(x);
    
    let head = 0;

    while (head < queue.length) {
        const [current, count] = queue[head++];
        const nextStates = [current + n, current * 2, current * 3];

        for (const next of nextStates) {
            // 정답 발견
            if (next === y) {
                return count + 1;
            }

            // 아직 유효한 숫자 && 방문한 숫자 X
            if (next < y && !visited.has(next)) {
                visited.add(next);
                queue.push([next, count + 1]);
            }
        }
    }
    
    return -1;
}