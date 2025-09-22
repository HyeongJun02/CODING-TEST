function solution(clothes) {
    let map = new Map();
    for (let [item, type] of clothes) {
        map.set(type, (map.get(type) || 0) + 1);
    }

    let result = 1;
    for (let cnt of map.values()) {
        result *= (cnt + 1);
    }

    return result - 1;
}
