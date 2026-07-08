function solution(board, moves) {
    let queue = [], answer = 0;
    for (const move of moves) {
        let pick = -1;
        for (let j = 0; j < board.length; j++) {
            if (board[j][move - 1] === 0) continue;
            pick = board[j][move - 1];
            board[j][move - 1] = 0;
            break;
        }
        if (pick === -1) continue;
        if (queue.at(-1) === pick) {
            queue.pop();
            answer += 2;
        } else queue.push(pick);
    }
    return answer;
}