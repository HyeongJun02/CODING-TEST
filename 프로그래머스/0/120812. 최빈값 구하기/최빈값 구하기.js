function solution(array) {
    const freq = new Map();
    let max = 0;
    
    for (const e of array) {
        const count = (freq.get(e) || 0) + 1;
        freq.set(e, count);
        max = (count > max) ? count : max;
    }
    
    const c = [...freq. entries()].filter(([_, v]) => v == max);
    return c.length == 1 ? c[0][0] : -1;
}