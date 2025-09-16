function solution(lines) {
    const OFFSET = 100;
    const arr = new Array(201).fill(0);

    for (const [a, b] of lines) {
        for (let i = a; i < b; i++) {
            arr[i + OFFSET]++;
        }
    }

    return arr.filter(v => v >= 2).length;
}