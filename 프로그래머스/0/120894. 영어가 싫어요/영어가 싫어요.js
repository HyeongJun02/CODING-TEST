function solution(numbers) {
    let m = [[ "zero", 0 ], [ "one", 1 ], [ "two", 2 ], [ "three", 3 ], [ "four", 4 ], [ "five", 5 ], [ "six", 6 ], [ "seven", 7 ], [ "eight", 8 ], [ "nine", 9 ]];
    let op = 0;
    while (true) {
        if (op == 10) break;
        if (numbers.indexOf(m[op][0]) == -1) {
            op++;
            continue;
        }
        numbers = numbers.replace(m[op][0], m[op][1]);
    }
    return Number(numbers);
}