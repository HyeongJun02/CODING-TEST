function solution(n) {
    var answer = [];
    for (let i = 2; i <= n; i++) {
        flag = true; 
        for(let j = 2; j <= parseInt(Math.sqrt(i)); j++) {
            if(i % j === 0) {
                flag = false;
                break;
            }
        }
        if (flag) {
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


function isPrime(num) {
}