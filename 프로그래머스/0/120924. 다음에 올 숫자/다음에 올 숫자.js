function solution(common) {
    let type; // 0: 공차수열, 1: 공비수열
    let leng = common.length;
    type = (common[1] - common[0] == common[leng - 1] - common[leng - 2]) ? 0 : 1;
    let weight = type ? (common[1] / common[0]) : (common[1] - common[0]);
    return type ? (common[leng - 1] * weight) : (common[leng - 1] + weight);
}