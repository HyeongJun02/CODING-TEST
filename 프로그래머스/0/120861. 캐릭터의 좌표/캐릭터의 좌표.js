function solution(keyinput, board) {
    let boarder = [~~(board[0] / 2), ~~(board[1] / 2)];
    let pos = [0, 0];
    let move = {
        "up" : [0, 1],
        "down" : [0, -1],
        "left" : [-1, 0],
        "right" : [1, 0]
    };
    function moveTo(d) {
        let [dx, dy] = move[d];
        let prePos = [pos[0] + dx, pos[1] + dy];
        if (boarder[0] < Math.abs(prePos[0])) return;
        if (boarder[1] < Math.abs(prePos[1])) return;
        pos[0] = prePos[0];
        pos[1] = prePos[1];
    }
    keyinput.forEach((e) => {
        moveTo(e);
    })
    return pos;
}