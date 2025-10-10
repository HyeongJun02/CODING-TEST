function solution(x) {
    return x % (+(x + "").split("").reduce((sum, n) => sum + (+n), 0)) ? false : true;
}