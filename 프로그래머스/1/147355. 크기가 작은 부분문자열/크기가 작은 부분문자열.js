function solution(t, p) {
    let result = 0;
    for (let i = 0; i < t.length - p.length + 1; i++) {
        let tmp = "";
        for (let j = 0; j < p.length; j++) {
            tmp += t[i + j];
        }
        // console.log(tmp);
        if (tmp <= p) result++;
    }
    
    return result;
}