const GCD = (a, b) => ((a % b) ? GCD(b, a % b) : b);

function isPrime(num) {
  if(num === 2) {
    return true;
  }
  for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
    if(num % i === 0){
      return false; 
    }
  }
  return true; 
}

function solution(a, b) {
    function check(b) {
        for (let i = 2; i <= b; i++) {
            if (!isPrime(i)) continue;
            if (b % i == 0) {
                if (i == 2 || i == 5) {
                    continue;
                } else
                    return 2;
            }
        }
        return 1;
    }
    let g = GCD(a, b);
    a /= g;
    b /= g;
    return check(b);
}