function solution(board) {
    const size = [board.length, board[0].length];
    let cnt = size[0] * size[1];
    function warning(x, y) {
        for (let i = x - 1; i < x + 2; i++) {
            if (i < 0 || i >= size[0]) continue;
            for (let j = y - 1; j < y + 2; j++){
                if (j < 0 || j >= size[1]) continue;
                if (board[i][j] != 1 && board[i][j] != -1) {
                    board[i][j] = -1;
                    cnt--;
                }
            }
        }
    }
    for (let i = 0; i < size[0]; i++) {
        for (let j = 0; j < size[1]; j++) {
            if (board[i][j] == 1) {
                cnt--;
                warning(i, j);
            }
        }
    }
    return cnt;
}