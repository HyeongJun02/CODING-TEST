function solution(s) {
    const eng = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ];
    for (let i = 0; i < 10; i++) {
        const regex = new RegExp(eng[i], "g");
        s = s.replace(regex, i);
    }
    return Number(s);
}