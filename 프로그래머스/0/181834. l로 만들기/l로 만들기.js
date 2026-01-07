function solution(myString) {
    return myString.split("").map((c) => {
        if (c < "l") return "l";
        return c;
    }).join("");
}