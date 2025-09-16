const GCD = (a, b) => ((a % b) ? GCD(b, a % b) : b);

function solution(a, b) {
    let g = GCD(a, b);
    a /= g;
    b /= g;
    
    while (b % 2 == 0) b /= 2;
    while (b % 5 == 0) b /= 5;
    
    return b == 1 ? 1 : 2;
}