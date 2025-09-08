function solution(box, n) {
    let x = ~~(box[0] / n);
    let y = ~~(box[1] / n);
    let z = ~~(box[2] / n);
    return x * y * z;
}