function solution(myString, pat) {
    return myString.indexOf(pat.split("").map((ch) => ch === 'A' ? 'B' : 'A').join("")) === -1 ? 0 : 1;
}