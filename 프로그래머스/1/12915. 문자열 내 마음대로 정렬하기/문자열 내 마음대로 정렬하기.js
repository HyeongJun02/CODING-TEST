function solution(strings, n) {
    return strings.sort((a, b) => {
        const charA = a[n];
        const charB = b[n];
        
        if (charA === charB) {
            return a.localeCompare(b);
        } else {
            return charA.localeCompare(charB);
        }
    });
}