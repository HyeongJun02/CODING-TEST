function solution(d, budget) {
    return d.sort((a, b) => a - b).reduce((count, price) => {
        return count + ((budget -= price) >= 0);
    }, 0);
}
