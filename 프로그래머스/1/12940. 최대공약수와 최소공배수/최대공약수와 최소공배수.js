const GCD = (a, b) => ((a % b) ? GCD(b, a % b) : b);
const LCM = (a, b) => ((a * b) / GCD(a, b));
const solution = (n, m) => [GCD(n, m), LCM(n, m)];