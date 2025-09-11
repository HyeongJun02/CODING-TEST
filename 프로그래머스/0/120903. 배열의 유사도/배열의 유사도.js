function solution(s1, s2) {
    let merged = s1.concat(s2);
    let mergedSet = new Set(merged);
    return merged.length - mergedSet.size;
}