function solution(my_string, alp) {
    return my_string.split("").map((c) => {
        if(c === alp) return c.toUpperCase();
        return c;
    }).join("");
}