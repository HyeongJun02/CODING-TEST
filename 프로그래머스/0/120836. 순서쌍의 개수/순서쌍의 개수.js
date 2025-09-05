function solution(n) {
    
    const divisors = [];
    for(let i = 1 ; i <= n / 2 ; i++) {
        if(n % i === 0) divisors.push(i);
    }
    return divisors.length + 1;
}