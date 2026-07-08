function solution(board, moves) {
    let queue = [], qcnt = 0;
    let answer = 0;
    for (const move of moves) {
        let pick = -1;
        for (let j = 0; j < board.length; j++) {
            if (board[j][move - 1] === 0) continue;
            pick = board[j][move - 1];
            board[j][move - 1] = 0;
            break;
        }
        if (pick === -1) continue;
        queue.push(pick);
        qcnt++;
        if (qcnt >= 2) {
            if (queue.at(-1) === queue.at(-2)) {
                queue.pop();
                queue.pop();
                qcnt -= 2;
                answer += 2;
            }
        }
        // console.log(board);
        // console.log(queue);
    }
    return answer;
}