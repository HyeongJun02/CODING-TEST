function solution(n, s) {
    if (n > s) return [-1];
    
    const num = ~~(s / n); 
    const rest = s % n;
    const result = Array(n).fill(num);
    
    for (let i = 0; i < rest; i++) result[result.length - 1 - i]++;
    
    return result;
}