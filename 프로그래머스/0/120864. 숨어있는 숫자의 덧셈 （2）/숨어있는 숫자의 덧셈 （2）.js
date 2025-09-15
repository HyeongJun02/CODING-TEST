function solution(my_string) {
    let num = my_string.match(/\d+/g);
    return !num ? 0 : num.map(Number).reduce((sum, n) => sum + n, 0);
}