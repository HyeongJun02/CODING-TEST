function solution(dartResult) {
    const bonusMap = { 'S': 1, 'D': 2, 'T': 3 };
    const regex1 = /\d+[a-zA-Z][^0-9a-zA-Z]*/g;
    const regex2 = /\d+|[SDT]|[*#]/g;;
    
    let scores = dartResult.match(regex1);
    let results = [];
    
    for (let i = 0; i < scores.length; i++) {
        let gets = scores[i].match(regex2);
        console.log(gets);
        let result = gets[0] ** bonusMap[gets[1]];
        
        if (gets[2] === '*') {
            if (i !== 0) results[i - 1] *= 2;
            result *= 2;
        } else if (gets[2] === '#') {
            result *= -1;
        }
        results.push(result);
    }
    
    return results.reduce((sum, n) => sum + n, 0);
}