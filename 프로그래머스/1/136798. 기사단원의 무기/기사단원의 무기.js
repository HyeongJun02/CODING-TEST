function solution(number, limit, power) {
    let powers = new Array(number + 1).fill(0);
    for (let i = 1; i <= number; i++) {
        for (let j = 1; i * j <= number; j++) powers[i * j]++;
    }
    return powers.reduce((sum, n) => sum + (n > limit ? power : n));
}