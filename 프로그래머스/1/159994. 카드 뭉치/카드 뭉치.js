function solution(cards1, cards2, goal) {
    let it1 = 0, it2 = 0;
    for (let i = 0; i < goal.length; i++) {
        if (cards1[it1] === goal[i]) {
            it1++;
        } else if (cards2[it2] === goal[i]) {
            it2++;
        } else {
            return "No";
        }
    }
    return "Yes";
}