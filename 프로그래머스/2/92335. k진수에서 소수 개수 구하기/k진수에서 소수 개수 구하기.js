function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0) return false;
    }
    return true; 
}

function solution(n, k) {
    let answer = 0;
    let num = n.toString(k);
    let nums = num.split("0");
    nums.map((n) => isPrime(+n) && answer++);
    return answer;
}