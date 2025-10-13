function solution(absolutes, signs) {
    let length = absolutes.length;
    let result = 0;
    for (let i = 0; i < length; i++) {
        result += (signs[i] ? 1 : -1) * absolutes[i];
    }
    return result;
}