function solution(survey, choices) {
    const res_list = { 'R': 0, 'T': 1, 'C': 2, 'F': 3, 'J': 4, 'M': 5, 'A': 6, 'N': 7 };
    const res_pick = "RTCFJMAN".split("");
    const count = Array.from(Array(4), () => Array(2).fill(0));
    
    survey.forEach((ans, i) => {
        const [disagree, agree] = ans; 
        const choice = choices[i];
        
        if (choice < 4) {
            const index = res_list[disagree];
            count[~~(index / 2)][index % 2] += 4 - choice;
        } else if (choice > 4) {
            const index = res_list[agree];
            count[~~(index / 2)][index % 2] += choice - 4;
        }
    });
    
    let result = "";
    for (let i = 0; i < 4; i++) {
        result += (count[i][0] < count[i][1])
                ? res_pick[i * 2 + 1]
                : res_pick[i * 2];
    }
    return result;
}