function solution(lottos, win_nums) {
    win_nums.sort((a, b) => b - a);
    lottos.sort((a, b) => b - a);
    let header = 0, count = 0;
    let result = [0, 0];
    for (let i = 0; i < 6; i++) {
        if (lottos[i] === 0) {
            result[1]++;
        }
        while (true) {
            if (win_nums[header] > lottos[i]) {
                header++;
                continue;
            }
            if (win_nums[header] === lottos[i]) {
                header++;
                count++;
            }
            break;
        }
    }
    let [min, max] = [result[0]+count, result[1]+count];
    return [max > 1 ? 7 - max : 6, min > 1 ? 7 - min : 6];
}