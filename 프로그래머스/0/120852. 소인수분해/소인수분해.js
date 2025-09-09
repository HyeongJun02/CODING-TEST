function isPrime(n) {
    for(let i = 2; i <= parseInt(Math.sqrt(n)); i++) {
        if(n % i === 0) return false;
    }
    return true;
}

function solution(n) {
    var answer = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            if (n % i == 0) {
                answer.push(i);
                while (true) {
                    n /= i;
                    if ((n / i == 1) || (n % i != 0)) break;
                }
            }
        }
    }
    return answer;
}