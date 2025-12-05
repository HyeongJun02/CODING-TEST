function solution(s, skip, index) {
    const allAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    const alpha = allAlpha.filter(c => !skip.includes(c));

    const answer = s.split("").map(ch => {
        const curIdx = alpha.indexOf(ch);
        const nextIdx = (curIdx + index) % alpha.length;
        return alpha[nextIdx];
    });

    return answer.join("");
}