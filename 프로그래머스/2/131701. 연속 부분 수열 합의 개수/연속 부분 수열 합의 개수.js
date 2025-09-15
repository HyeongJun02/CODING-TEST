function solution(elements) {
    let result = new Set([]);
    let leng = elements.length;
    for (let i = 0; i < leng; i++) {
        for (let j = 0; j < leng; j++) {
            let sum = 0;
            for (let k = 0; k < i + 1; k++) {
                sum += elements[(j + k) % leng];
            }
            result.add(sum);
        }
    }
    return result.size;
}