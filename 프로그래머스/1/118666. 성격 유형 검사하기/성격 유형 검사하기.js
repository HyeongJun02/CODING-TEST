function solution(survey, choices) {
    let res_list = {
        'R': 0,
        'T': 1,
        'C': 2,
        'F': 3,
        'J': 4,
        'M': 5,
        'A': 6,
        'N': 7
    };
    let res_pick = "RTCFJMAN".split("");
    let count = Array.from(Array(4), () => Array(2).fill(0));
    survey.forEach((ans, i) => {
        let q = ans.split("");
        if (choices[i] < 4) {
            let index = res_list[q[0]];
            count[~~(index / 2)][index % 2] += 4 - choices[i];
        }
        else if (choices[i] > 4) {
            let index = res_list[q[1]];
            count[~~(index / 2)][index % 2] += choices[i] - 4;
        }
    })
    let result = "";
    for (let i = 0; i < 4; i++) {
        result += (count[i][0] < count[i][1])
                ? res_pick[i * 2 + 1]
                : res_pick[i * 2];
    }
    return result;
}