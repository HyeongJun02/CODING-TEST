function GCD (a, b) {
    return (a % b) ? GCD(b, a % b) : b;
}

function solution(numer1, denom1, numer2, denom2) {
    var numer = numer1 * denom2 + numer2 * denom1;
    var denom = denom1 * denom2;
    var gcd = GCD(numer, denom);
    return [numer / gcd, denom / gcd];
}