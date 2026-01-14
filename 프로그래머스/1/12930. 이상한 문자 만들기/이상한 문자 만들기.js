function solution(s) {
    return s.split(" ").map((word) => {
        return word.split("").map((ch, i) => i%2 ? ch.toLowerCase() : ch.toUpperCase()).join("");
    }).join(" ");
}