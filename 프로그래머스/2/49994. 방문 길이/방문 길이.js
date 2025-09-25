function solution(dirs) {
    let mapr = Array.from(Array(11), () => new Array(10).fill(false));
    let mapc = Array.from(Array(11), () => new Array(10).fill(false));
    let dxy = {
        U: [0, 1],
        D: [0, -1],
        L: [-1, 0],
        R: [1, 0]
    };
    let nowx = 0;
    let nowy = 0;
    let count = 0;
    function isCanCount(x1, y1, x2, y2) {
        if (x1 === x2) {
            let [setx, sety] = [x1 + 5, 10 - (Math.min(y1, y2) + 5)];
            if (mapc[sety][setx]) return false;
            mapc[sety][setx] = true;
            return true;
        } else {
            let [setx, sety] = [Math.min(x1, x2) + 5, y1 + 5];
            if (mapr[sety][setx]) return false;
            mapr[sety][setx] = true;
            return true;
        }
    }
    function isValidMove(x, y) {
        if (x < -5 || x > 5 || y < -5 || y > 5) return false;
        return true;
    }
    function move(dir) {
        if (!isValidMove(nowx + dxy[dir][0], nowy + dxy[dir][1])) return;
        if (isCanCount(nowx, nowy, nowx + dxy[dir][0], nowy + dxy[dir][1])) count++;
        nowx += dxy[dir][0];
        nowy += dxy[dir][1];
    }
    dirs = dirs.split("");
    for (let i = 0; i < dirs.length; i++) {
        move(dirs[i]);
    }
    return count;
}