function solution(numlist, n) {
    let result = [];
    numlist.push(n);
    numlist.sort((a, b) => a - b);
    let start_index = numlist.indexOf(n);
    let index_p = start_index + 1;
    let index_n = start_index - 1
    while (true) {
        let input;
        if (index_n == -1) {
            input = numlist[index_p];
            index_p++;
        } else if (index_p == numlist.length + 1) {
            input = numlist[index_n];
            index_n--;
        } else {
            if ((numlist[index_p] - n) <= n - (numlist[index_n])) {
                input = numlist[index_p];
                index_p++;
            }
            else {
                input = numlist[index_n];
                index_n--;
            }
        }
        result.push(input)
        if (index_n == -1 && index_p == numlist.length) break;
    }
    return result;
}