function solution(common) {
    let type; // 0: 공차수열, 1: 공비수열
    type = (common[1] - common[0] == common[2] - common[1]) ? 0 : 1;
    let weight = type ? (common[1] / common[0]) : (common[1] - common[0]);
    return type ? (common[common.length - 1] * weight) : (common[common.length - 1] + weight);
}