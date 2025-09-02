function solution(s) {
    var answer = [0, 0];

    while (s !== "1") {
        const ones = s.split("").filter(ch => ch === "1");
        answer[1] += s.length - ones.length;

        s = ones.length.toString(2);

        answer[0]++;
    }

    return answer;
}
