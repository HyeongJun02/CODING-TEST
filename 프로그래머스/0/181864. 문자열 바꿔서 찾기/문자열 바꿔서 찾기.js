function solution(myString, pat) {
    return myString
        .split("")
        .map((ch) => ch === 'A' ? 'B' : 'A')
        .join("").indexOf(pat) === -1 ? 0 : 1;
}