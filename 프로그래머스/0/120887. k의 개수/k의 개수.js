function solution(i, j, k) {
    let cnt = 0;
    const target = String(k);
    
    for (let n = i; n <= j; n++) {
        const str = String(n);
        cnt += str.split(target).length - 1;
    }
    
    return cnt;
}