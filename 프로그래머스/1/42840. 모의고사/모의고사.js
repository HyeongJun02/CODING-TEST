function solution(answers) {
    const people = [[ 1, 2, 3, 4, 5 ],
                    [ 2, 1, 2, 3, 2, 4, 2, 5 ],
                    [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5 ]];
    const length = [ people[0].length, people[1].length, people[2].length ];
    let score = new Array(3).fill(0);
    
    for (let i = 0; i < answers.length; i++) {
        const correct = answers[i];
        for (let j = 0; j < 3; j++) {
            (answers[i] == people[j][i % length[j]]) && score[j]++;
        }
    }
    const max_score = Math.max(...score);
    const result = score.reduce((acc, cur, i) => {
        if (cur === max_score) acc.push(i + 1);
        return acc;
    }, []);
    return result;
}