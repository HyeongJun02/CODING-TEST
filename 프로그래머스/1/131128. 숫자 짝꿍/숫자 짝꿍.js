function solution(X, Y) {
    let [strX, strY] =
        [
            X.toString().split("").sort().reverse(),
            Y.toString().split("").sort().reverse()
        ];
    let dup = [];
    let [pointX, pointY] = [0, 0];
    while (pointX < strX.length && pointY < strY.length) {
        let [x, y] = [strX[pointX], strY[pointY]];
        if (x === y) {
            dup.push(x);
            pointX++;
            pointY++;
        } else (x > y) ? pointX++ : pointY++;
    }
    if (dup.length === 0) return "-1";
    if (dup[0] === "0") return "0"; 
    return dup.join("");
}