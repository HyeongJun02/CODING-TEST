function solution(sides) {
    sides.sort((a, b) => a - b);
    let [a, b] = [sides[0], sides[1]];
    var answer = 0;
    // 가장 긴 변이 b일 때
    for (let i = b - 1; i > 0; i--) {
        if ((a + i) > b) {
            answer++;
        } else {
            break;
        }
    }
    // 가장 긴 변이 새로운 변일 때
    for (let i = b; true; i++) {
        if ((a + b) > i) {
            answer++;
        } else {
            break;
        }
    }
    return answer;
}